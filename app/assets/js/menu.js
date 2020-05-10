const menu = {
  menuList: [
    {
      name: "Siew Mai",
      category: "dimsum",
      image: "siew_mai.jpeg",
      price: 19
    },
    {
      name: "Sup Asparagus Kepiting",
      category: "appetizer",
      image: "sup_asparagus_kepiting.jpg",
      price: 26
    }
  ]
};







const templateElement = document.getElementById('menu-template-handlebars');

let templateSource = templateElement.innerHTML;

let template = Handlebars.compile(templateSource);

let compiledHtml = template(menu);

document.getElementById('menu_images').innerHTML = compiledHtml;
console.log("bayi");
console.log(compiledHtml);