# Стартовый шаблон
-------

```sh
# Установка всех независимостей
npm install

# Проверка и изменение (обновление) версий пакетов в package.json
ncu -u

# Если есть обновленные пакеты, то установить их
npm install

# Запуск таск-менеджера
gulp dev
```

### Структура файлов

Структура проекта:

<pre>
src/
|--/blocks/
|----/block-name/
|------/icons/
|------/img/
|------/_block-name.html
|------/_block-name.less
|------/block-name.js

|--/libsJS/
|----/*.js

|--/pages/
|----/*.html

|--/styles/
|----/global/
|------/_base.less
|------/_form.less
|------/_typo.less
|----/libs/
|------/_libs-rewrite.less
|------/_libs.less
|------/other-libs.css
|----/vars/
|------/_vars.less
|----/style.less

|--/partials/
|----/_head.html
|----/_scripts.html
</pre>

### Чтобы создать новый блок, достаточно создать в папке (src/blocks/) папку с названием блока, после чего внутри автоматически создаются файлы (html/less/js) и папки (icons/img)
-------
### Подключение HTML блоков (в html страницах)

<pre>
  @@include('../blocks/block-name/_block-name.html')
</pre>

### Подключение LESS блоков (в src/styles/style.less)

<pre>
  @import '../blocks/block-name/_block-name';
</pre>