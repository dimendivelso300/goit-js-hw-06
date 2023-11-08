const categoriesLi = document.querySelectorAll('.item');
console.log(`number of categories: ${categoriesLi.length}`);

categoriesLi.forEach(element => {
    console.log(`Categiry: ${element.querySelector('h2').textContent}`);
    console.log(`Elements: ${element.querySelectorAll('li').length}`);
    
});
