const categoriesLi = document.querySelectorAll('.item');
console.log(`number of categories: ${categoriesLi.length}`);

for(let element of categoriesLi){
    console.log(`Categiry: ${element.querySelector('h2').textContent}`);
    console.log(`Elements: ${element.querySelectorAll('li').length}`);
}