## Список технологий проекта: // List of project technologies:  
* react - _JavaScript-библиотека для создания пользовательских интерфейсов_ // _JavaScript library for creating user interfaces_  
* typesript - _позволяет указать типы данных, передаваемых в коде, и имеет возможность сообщать об ошибках, когда типы не совпадают_ // _allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match_  
* axios - _для запроса на сервере используя Google Книг API_ // _to query the server using the Google Books API_  
* react-dom - _Для создания нашего виртульного DOM дерева_ // _for creating virtual DOM_  
* react-router-dom - _для перемещения между CentralPage и BookPage_ // _for moving between CentralPage and BookPage_  
* react-loader-spinner  - _для установки загрузчика в загрузке_ // _for set loader in loading_  
* react-bootstrap - _стилизуем наше прилложение_ // _styling for app_  
* mobx: - _создает наше(наши) глобальное хранилище с действиемя и переменнымми_  //  _create our(ours) Store for global action with action and variables_  
* mobx-react-lite - _дает нам отслеживание изменений глобальных переменных (достаточно небольшой размер пакета)_ // _gives an observer to monitor changes in global variables (package small size for using)_

# Приложения для отображения списока Goggle Books // Applications to display a list of Goggle Books
    Включается в себя поиск определенным запросам; // Includes search for specific queries;  
    Совместный поиск с определенными категориями; // Joint search with certain categories;  
    Сортировка по актуальности, новизне; // Sorting by relevance, newest;  
    Поиск по категориям; // Search by category;  
    Пагинацию на запрос дополнительных книг в низу страницы; // Pagination to request additional books at the bottom of the page;  
    При нажатии на выбранную книгу открывает полную информацию о данной книге; //  When you click on the selected book, it opens full information about this book;  


## Список команд для запуска // List of commands to run

### `docker-compose up` [server_build localhost:80](http://localhost:80)
Компилируем полностью финальную сборку и запускаем сервер (docker-compose using 80:80 localhost:80)// We compile the complete final assembly and start the server(docker-compose using localhost:80)
### `npm run react-client`  
Запуск нашего react-client в режиме разработки // Running our react-client in development mode
### `npm run build-react`  
Создаём наше приложение в режиме разработки // Create our application in development mode
### `build-docker-prod-nginx`  
Собираем финальную версию в докере, используя образ nginx // Build the final version in docker using image nginx => search-for-books:1.0.0-prod  
### `dockerServer`  
Запускаем на локальном хосте наш образ FinalBuild => image(search-for-books:1.0.0-prod)(требуется сборка build-docker-prod-nginx) // run on localhost our finalBuild image(search-for-books:1.0.0-prod)(requires build-docker-prod-nginx build)  

Очень рекомендую почитать статьи для Docker сборки и посмотреть видео // I highly recommend reading articles for Docker builds
[Базовый DockerFile // Basic DockerFile](https://javascript.plainenglish.io/how-to-serve-a-react-app-with-nginx-in-a-non-root-docker-container-cbc4c6acc177)  
[Оптимизация nginx.config//nginx.config optimization](https://itnext.io/nginx-create-react-app-gzip-tripple-your-lighthouse-performance-score-in-5-minutes-627465c3f445)  
[Docker Build: Containerizing](https://www.youtube.com/watch?v=8VHheCkw-7k&t=3304s)

TypeScript:
[import images to use inside a React component with TypeScript](https://stackoverflow.com/questions/52759220/importing-images-in-typescript-react-cannot-find-module)

Jest configuration ts-jest:
for resolve problem svg using jest --silent mod
for init jest.config file => npx ts-jest config:init  
[axios fix](https://stackoverflow.com/questions/74940474/jest-encountered-an-unexpected-token)
[jestjs.io](https://jestjs.io/docs/getting-started#using-typescript)
npm i -D ts-jest @types/jest  
npm install --save-dev @babel/preset-typescript
npm install --save-dev @types/jest || npm install --save-dev @jest/globals  
npm install --save-dev jest @types/jest @babel/preset-typescript  
npm i -D ts-node  
[Stackoverflow jest css|less|scss syntax](https://stackoverflow.com/questions/39418555/syntaxerror-with-jest-and-react-and-importing-css-files)  
[jest-dom TypeError: expect(...).toBeInTheDocument](https://github.com/nrwl/nx/issues/9140)  
[wrap our tests in context Proivder](https://stackoverflow.com/questions/75728532/uncaught-typeerror-cannot-destructure-property-basename-of-react2-usecontext)  
[react tests js-dom](https://stackoverflow.com/questions/56547215/react-testing-library-why-is-tobeinthedocument-not-a-function)  
[ssl-config](https://ssl-config.mozilla.org/)

## Ремарка подключения fonts and Optimizing images
[Таким образом, браузеры, поддерживающие предварительную загрузку, будут предварительно загружать woff2 // So browsers that support preloading will preload woff2
](https://stackoverflow.com/questions/1330825/preloading-font-face-fonts)
[connect fonts](https://www.youtube.com/watch?v=GwA0BN5RgB0)  
В файле fontface.css описываем подключаемые шрифты для разных систем  
экспортируем к нашему центральному App.css и  
объявляем на глобальном уровне именно этот font  //  
In the fontface.css file, we describe the included fonts for different systems
export to our central App.css and
we declare at the global level exactly this font  serif for default
```
*{
font-family: Rubik-Regular, serif;}
```

for optimize images =>
use resolution picture 1920 1280 or on choice author  
changing in any redactor of picture   
=>
compress (reduce 50-90% size) our image [compresspng.com](https://compresspng.com/)  
=>  
for better optimaztion ready image use | recommended WEBP format of picture [squoosh](https://squoosh.app/) 

для отдельных изображений для ускорения подгрузки лучше использовать loading="lazy"[loading="lazy"](https://stackoverflow.com/questions/69054825/how-should-i-implement-lazy-loading-for-my-images-in-react)  

```
<img className="book_image"
     src={TakeDataBookComponent("imageBook",book)}
     alt={""}
     loading="lazy"
/>
```
