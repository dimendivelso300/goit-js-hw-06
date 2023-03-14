const categoriesLi = document.querySelectorAll('.item');
console.log(`number of categories: ${categoriesLi.length}`);

for(element of categoriesLi){
    console.log(`Categiry: ${element.querySelector('h2').textContext}`);
    console.log(`Elements: ${element.querySelectorAll('li').length}`);
}