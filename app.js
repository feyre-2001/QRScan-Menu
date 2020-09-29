const menu = [
  {
    id: 1,
    title: "Mexican Nachos",
    category: "starters",
    price: 'Rs. 199/-',
    img: "./images/item-1.jpeg",
    desc: `Half baked cruncy nachos, cheese sauce, mexican bean sauce with vegetables and parsley`,
  },
  {
    id: 2,
    title: "Kung Pao Paneer",
    category: "starters",
    price: 'Rs.259/-',
    img: "./images/item-2.jpg",
    desc: `Paneer tossed in our house special gravy kung pao, mixed pepperand onion, topped with sesame seeds.`,
  },
  {
    id: 3,
    title: "Sweet Chilli Barbeque Bowl",
    category: "main course",
    price: 'Rs.299/-',
    img: "./images/item-3.jpg",
    desc: `[Noodles/Rice] Carrot, onion, mushroom, cabbage, fresh coriander and caramelized onions`,
  },
  {
    id: 4,
    title: "Italian Pizza Wrap",
    category: "main course",
    price: 'Rs.209/-',
    img: "./images/item-4.jpg",
    desc: `Pizza sauce, olives, onions, mixed pepper, mozzarella and italian herbs`,
  },
  {
    id: 5,
    title: "Rejuvenate",
    category: "shakes",
    price: 'Rs.189/-',
    img: "./images/item-5.jpg",
    desc: `Bluebrry, Zespri(Kiwi), peach and pineapple`,
  },
  {
    id: 6,
    title: "Thai Green Curry",
    category: "main course",
    price: 'Rs.289/-',
    img: "./images/item-6.jpg",
    desc: `Coconut milk, thai paste, brocolli, mixed pepper, basil and zucchini`,
  },
  {
    id: 7,
    title: "Arabita Pasta",
    category: "main course",
    price: 'Rs.279/-',
    img: "./images/item-7.jpg",
    desc: `Penne pasta, mixed pepper, brocolli and parmesan cheese`,
  },
  {
    id: 8,
    title: "Dry Fruit Cream",
    category: "desserts",
    price: 'Rs.219/-',
    img: "./images/item-8.jpg",
    desc: `Whip cream topped with cashew, almond and rasin`,
  },
  {
    id: 9,
    title: "Strawberry Cream with fruits",
    category: "desserts",
    price: 'Rs.219/-',
    img: "./images/item-9.jpg",
    desc: `Freshly made yummy strawberry cream topped with seasonal fruits`,
  },
  {
    id: 10,
    title: "Berry Berry",
    category: "shakes",
    price: 'Rs.219/-',
    img: "./images/item-10.png",
    desc: `Strawberry, blueberry, cranberry, raspberry, blackberry and black currant`,
  },
];

const sectionCenter = document.querySelector('.section-center');
const containerbtn= document.querySelector('.btn-container');

window.addEventListener("DOMContentLoaded",function(){
    displayMenuItems(menu);
    displayMenuButtons();
});


function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){
    //console.log(item);
    return `<article class="menu-item">
      <img src=${item.img} class="photo" alt="${item.title}"/>
      <div class="item-info">
        <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
        </header>
        <p>${item.desc}</p>
     </div>
    </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML=displayMenu;
}

function displayMenuButtons() {
  const categories=menu.reduce(
    function(values,item){
    if(!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },['all']);
  const categoryBtns = categories.map(function(category
  ){
    return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
  }).join("");
  containerbtn.innerHTML= categoryBtns;

  const filterBtns =  document.querySelectorAll('.filter-btn');

  filterBtns.forEach(function(btn)
  {

    btn.addEventListener('click',function(e)
    {
      const category= e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function(menuItem)
      {
        if(menuItem.category===category)
        {
         return menuItem;
       }
      }
    );
      if(category==='all')
      {
        displayMenuItems(menu);
      }
      else
      {
        displayMenuItems(menuCategory);
      }
    });
  });
}
