# Приложения для отображения списока Goggle Books // Applications to display a list of Goggle Books
    Включается в себя поиск определенным запросам; // Includes search for specific queries;  
    совместный поиск с определенными категориями; // joint search with certain categories;  
    сортировка по актуальности, новизне; // sorting by relevance, newest;  
    поиск по категориям; // search by category;  
    Пагинацию на запрос дополнительных книг в низу страницы; // Pagination to request additional books at the bottom of the page;  
    При нажатии на выбранную книгу открывает полную информацию о данной книге; //  When you click on the selected book, it opens full information about this book;  

## Список технологий проекта: // List of project technologies:  
* react - _JavaScript-библиотека для создания пользовательских интерфейсов // JavaScript library for creating user interfaces_  
* typesript - _позволяет указать типы данных, передаваемых в коде, и имеет возможность сообщать об ошибках, когда типы не совпадают // allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match_  
* axios - _для запроса на сервере используя Google Книг API // to query the server using the Google Books API_  
* react-dom - _Для создания нашего виртульного DOM дерева // for creating virtual DOM_  
* react-router-dom - _для перемещения между CentralPage и BookPage // for moving between CentralPage and BookPage_  
* react-loader-spinner  - _для установки загрузчика в загрузке // for set loader in loading_  
* react-bootstrap - _стилизуем наше прилложение // styling for app_  
* mobx: - создает наше(наши) глобальное хранилище с действиемя и переменнымми  //create our(ours) Store for global action with action and variables  
* mobx-react-lite - дает нам отслеживание изменений глобальных переменных (достаточно небольшой размер пакета) // gives an observer to monitor changes in global variables (package small size for using)

## Список команд для запуска // List of commands to run

Запуск нашего react-client в режиме разработки // Running our react-client in development mode  
### `npm run react-client`
Создаём наше приложение в режиме разработки // Create our application in development mode
### `npm run build-react`
Собираем финальную версию в докере, используя образ nginx // Build the final version in docker using image nginx => search-for-books:1.0.0-prod
### `build-docker-prod-nginx`
Запускаем на локальном хосте наш образ FinalBuild => image(search-for-books:1.0.0-prod)(требуется сборка build-docker-prod-nginx) // run on localhost our finalBuild image(search-for-books:1.0.0-prod)(requires build-docker-prod-nginx build)  
### `dockerServer`
Компилируем полностью финальную сборку и запускаем сервер (docker-compose using)// We compile the complete final assembly and start the server(docker-compose using)
### `docker-compose up`

Очень рекомендую почитать статьи для Docker сборки // I highly recommend reading articles for Docker builds
[Базовый DockerFile // Basic DockerFile](https://javascript.plainenglish.io/how-to-serve-a-react-app-with-nginx-in-a-non-root-docker-container-cbc4c6acc177)
[Оптимизация nginx.config//nginx.config optimization](https://itnext.io/nginx-create-react-app-gzip-tripple-your-lighthouse-performance-score-in-5-minutes-627465c3f445)