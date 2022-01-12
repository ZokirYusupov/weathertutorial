let search = document.querySelector('.search-box');
let searchIcon = document.querySelector('#saerch-icon');

console.log(searchIcon);
searchIcon.addEventListener('click',() => {
      search.classList.toggle('active')
})

const box = document.querySelector('.box');
// let n = 8
// for(let i = 1; i <= n; i++){
//       for(let d = 1; d <= i; d++){
//             document.write(i)
//       }
//       document.write("<br>");
// }
// const obj = {alpha: 10, beta: 20, gamma: 30};  
// document.write(Object.getOwnPropertyNames(obj)); 