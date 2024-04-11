// export const myPosts = 
//   [
//     {id: 1, title: 'Яндекс Директ', body: 'Контекстная реклама в поисковой системе Яндекс и её рекламной сети.'},
//     {id: 2, title: 'Google Ads', body: 'Реклама в поисковой системе Google и на сайтах партнерах сети Ads.'},
//     {id: 3, title: 'Рамблер', body: 'Это вам не нужно. Вот прям совсем не нужно. Лучше используйте таргетированную рекламу в ВК.'} ,
//     {id: 4, title: 'ВКонтакт', body: 'Таргетированная реклама. Когда нет спроса на ваш продукт в поисковых системах.'} ,
//   ];


export const myPosts = await fetch("https://jsonplaceholder.typicode.com/posts")
  .then(data => data.json());
                  