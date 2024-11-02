// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const categories = document.querySelectorAll("#categories li.item");
console.log("Number of categories: ",categories.length); //Порахує й виведе в консоль кількість категорій 

categories.forEach(el=> 
    console.log(el.firstElementChild.textContent, " : ",
        el.querySelectorAll("ul li").length)    
);

