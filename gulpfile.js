const gulp           = require('gulp');
const fs             = require('fs');
const browserSync    = require('browser-sync');
const gih            = require("gulp-include-html");
const cleanCss       = require('gulp-clean-css');
const less           = require('gulp-less');
const path           = require('path');
const LessAutoprefix = require('less-plugin-autoprefix');
const autoprefix     = new LessAutoprefix({ browsers: ['last 2 versions'] });
const groupMedia     = require('gulp-group-css-media-queries');
const concat         = require('gulp-concat');
const rename         = require('gulp-rename');
const imagemin       = require('gulp-imagemin');
const del            = require('del');
const plumber        = require('gulp-plumber');
const replace        = require('replace');


var paths = {
  dirs: {
    build: ['./build', './blocks']
  },
  html: {
    blocks: './src/blocks/',
    src: './src/pages/*.html',
    dest: './build',
    watch: ['./src/pages/*.html', './src/partials/*.html', './src/blocks/**/*.html']
  },
  css: {
    libsCSS: [
      './src/styles/libs/**/*.css'
    ],
    src: ['./src/styles/style.less' ],
    dest: './build/css',
    watch: ['./src/blocks/**/*.less', './src/styles/**/*.less', './src/styles/*.less']
  },
  js: {
    libsJS: [
      './node_modules/jquery/dist/jquery.min.js',
      './src/libsJS/**/*.js'],
    src: ['./src/blocks/**/*.js'],
    dest: './build/js',
    watch: './src/blocks/**/*.js',
    watchPlugins: './src/libsJS/**/*.js'
  },
  images: {
    src: './src/blocks/**/img/*',
    dest: './build/img',
    watch: ['./src/blocks/**/img/*']
  },
  icons: {
    src: './src/blocks/**/icons/*',
    dest: './build/img/icons/',
    watch: ['./src/blocks/**/icons/*']
  },
  fonts: {
    src: './src/fonts/**/*',
    dest: './build/fonts',
    watch: './src/fonts/**/*'
  }
};

gulp.task('clean', function () {
  return del(paths.dirs.build);
});

gulp.task('blocks' , function(){
  return gulp.src(['./src/blocks/**/.html', './src/blocks/**/.js'])
    .pipe(gulp.dest('./blocks'))
});

gulp.task('blockCSS' , function(){
  return gulp.src('./src/blocks/**/.less')
    .pipe(plumber())
    .pipe(less({
      plugins: [autoprefix]
    }))
    .pipe(groupMedia())
    .pipe(cleanCss({
      level: 2,
      format: 'beautify'
    }))
    .pipe(gulp.dest('./blocks'))
});

gulp.task('html' , function(){
  return gulp.src(paths.html.src)
      .pipe(gih({
          'public': "./public/bizapp",      
          baseDir:'./src/pages/'
      }))
      .pipe(gulp.dest(paths.html.dest))
      .pipe(browserSync.reload({
        stream: true
      }));
});

gulp.task('styles', function () {
  return gulp.src(paths.css.src)
    .pipe(plumber())
    .pipe(less({
      plugins: [autoprefix]
    }))
    .pipe(groupMedia())
    .pipe(cleanCss({
      level: 2,
      format: 'beautify'
    }))
    .pipe(gulp.dest(paths.css.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('libsCSS', function () {
  return gulp.src(paths.css.libsCSS)
    .pipe(plumber())
    .pipe(gulp.dest(paths.css.dest));
});

gulp.task('scripts', function () {
  return gulp.src(paths.js.src)
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(gulp.dest(paths.js.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('libsJS', function () {
  return gulp.src(paths.js.libsJS)
    .pipe(plumber())
    .pipe(gulp.dest(paths.js.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('images', function () {
  return gulp.src(paths.images.src)
    .pipe(plumber())
    .pipe(imagemin())
    .pipe(rename({
      dirname: ''
    }))
    .pipe(gulp.dest(paths.images.dest));
});

gulp.task('icons', function () {
  return gulp.src(paths.icons.src)
    .pipe(plumber())
    .pipe(imagemin())
    .pipe(rename({
      dirname: ''
    }))
    .pipe(gulp.dest(paths.icons.dest));
});

gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: paths.dirs.build
    },
    reloadOnRestart: true,
    // tunnel: 'my-project-name'
  });

  const allBlocks = paths.html.blocks;
  gulp.watch(allBlocks).on('addDir', function() {
    var dirs = fs.readdirSync(allBlocks);
    for(i = 0; i < dirs.length;i++){
      if(fs.existsSync(allBlocks+'/'+dirs[i]+'/'+'_'+dirs[i]+'.html') === false && fs.existsSync(allBlocks+'/'+dirs[i]+'/'+'_'+dirs[i]+'.less') === false && fs.existsSync(allBlocks+'/'+dirs[i]+'/'+dirs[i]+'.js') === false){
        fs.appendFileSync(allBlocks+'/'+dirs[i]+'/'+'_'+dirs[i]+'.html', '//'+dirs[i]);
        fs.appendFileSync(allBlocks+'/'+dirs[i]+'/'+dirs[i]+'.js', '//'+dirs[i]);
        fs.appendFileSync(allBlocks+'/'+dirs[i]+'/'+'_'+dirs[i]+'.less', '//'+dirs[i]);
      }
      try {
        fs.statSync(allBlocks+'/'+dirs[i]+'/img');
      }
      catch (err) {
        if (err.code === 'ENOENT') {
          fs.mkdirSync(allBlocks+'/'+dirs[i]+'/img');
        }
      }
      try {
        fs.statSync(allBlocks+'/'+dirs[i]+'/icons');
      }
      catch (err) {
        if (err.code === 'ENOENT') {
          fs.mkdirSync(allBlocks+'/'+dirs[i]+'/icons');
        }
      }
    }
  });

  gulp.watch(paths.html.watch, gulp.parallel('html'));
  gulp.watch(paths.css.watch, gulp.parallel('styles'));
  gulp.watch(paths.icons.watch, gulp.parallel('icons'));
  gulp.watch(paths.js.watch, gulp.parallel('scripts'));
  gulp.watch(paths.js.watchPlugins, gulp.parallel('scripts'));
  gulp.watch(paths.images.watch, gulp.parallel('images'));
});


gulp.task('build', gulp.series(
  'clean',
  'html',
  'styles',
  'libsCSS',
  'scripts',
  'icons',
  'libsJS',
  'images'
));

gulp.task('dev', gulp.series(
  'build', 'server'
));

gulp.task('buildBlocks', gulp.series(
  'clean',
  'blocks',
  'blockCSS'
));