# YandexFrontDevCreativeTask
Сайт-визитка, создан на React JS 

### Запуск стандартный:
Переход в директорию client.
Запуск npm скрипта:
````
cd clinet
npm i
npm run start
````

### Устройство проекта:
Устройство проекта простое. В корне лежит директория 
client, в ней находится весть код фронтенда. Директория "src" содержит 
исходные файлы. "src/Pages" находятся страницы и их стили. Для стилей
использованы css модули В "src/Pages/Items"
React компоненты, которые переиспользуются.
Для анимации используется ```animejs```: https://animejs.com

### Почему именно React?

+ React сейчас это один из самых востребованых фронтенд фреймворков => много 
материалов для учебы.
+ Синтаксис React достаточно прост.
+ На этом фреймворке можно разрабатывать как маленькие приложения, так и 
большие сервисы.
+ React отлично уживатся с разными другими фреймворками и подходами.

### Имитация работы с api и рендеринг данных:
````
// Из src/Pages/SecondPage.js файла
const api_array = [
        {
            id: 1,
            title: "Первое знакомство. Изучение Python",
            des: "Структура кода, циклы, функции"
        },
        {
            id: 2,
            title: "Framework Django ",
            des: "Python ООП, классы. Основы Html, CSS"
        }
       ]
       
       ... // строки кода упущены
       
       const items = api_array.map((item) => {
        return item.id === 6 ? (
            <MapPoint title={item.title} des={item.des} key={item.id}/>
        ): (
            <div className="item" key={item.id + 100}>
                <MapPoint title={item.title} des={item.des} key={item.id}/>
                <Points />
            </div>
        )
    })
       
````

### Реализация поэкранной прокрутки:
Для реалзации этой функциональности нужен только css. Используя ````scroll snap````
можно достигнуть такого результата. Ссылка на mdn: https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type

