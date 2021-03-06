//tableau des objets anomyme items
const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  
  //cible de renvoie de code html dynamique
  const sectionCenter = document.querySelector('.section-center');

  //cible DOM pour les cat??goris
  const filterBtns = document.querySelectorAll('.filter-btn');
 

  //prend un tableau menu en param et renvoie du code html dynamique
  const displayMenuItems = (menuItem) =>{
    //item r??pr??sente chaque objet  du tableau menu 
    //.map  r??pr??sente l'it??ration de cl??s/valeurs permettant ainsi d'extraire les donn??es cl??s/valeur d'un tableau 
    let displayMenu = menuItem.map((item) => {
        //affichage dynamique 
        return `<article class="menu-item">
        <img src="${item.img}" alt="${item.title}" class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}
          </p>
        </div>
      </article>`;
      });
      // cr??e et renvoie une nouvelle cha??ne de caract??res en concat??nant tous les ??l??ments d'un tableau Exe : const elements = ['Fire', 'Air', 'Water']; console.log(elements.join(''));
// expected output: "FireAirWater"//
      displayMenu = displayMenu.join("");
      //ajouter le code dynamique au code html au cible de la classe ".section-center"
      sectionCenter.innerHTML = displayMenu;
  };

  //permet d'afficher les r??sultats du scrip sur le console et permet de d??boguer le code 
window.addEventListener("DOMContentLoaded", () => {
    //appelle de la fonction displayMenuItem avec le tableau menu en param 
    displayMenuItems(menu);

    filterBtns.forEach((btn) => {
        btn.addEventListener('click', (element) => {
            //La propri??t?? HTMLElement.dataset fournit un acc??s en mode lecture et ??criture, ?? tous les attributs de donn??es sur mesure (data-*) d??finis sur l'??l??ment.
            //r??cup??rer le data-id d'un ??l??ment cible DOM
            //console.log(element.currentTarget.dataset.id);
            const category = element.currentTarget.dataset.id;
            //filter permet d'affiner le r??sultat de l'it??ration 
            const menuCategory = menu.filter( (menuItem) => {
                //si la cat??gorie de l'item courant est ??gale ?? categorie on affiche tout
                if (menuItem.category === category) {
                    //comme param de filtrage 
                    return menuItem;
                }
            });
            if (category === "all") {
                displayMenuItems(menu);    
            } else 
            {
                displayMenuItems(menuCategory);
            }
        })
    });
});

