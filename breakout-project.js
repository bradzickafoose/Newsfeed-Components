// <div class="card">
//   <h2>Octavius Kraken</h2>
//   <h3 class="subtitle">Escape Artist</h3>
//   <div class="desc">Super powers: can shape-shift, instantly change color, communicate using light displays generated on his skin, taste things by touching them, squirt ink and use tools</div>
// <img src="https://images.unsplash.com/photo-1564261331932-ea97c182f705?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="">
//   </div>
const cardData = [
    {
      title: "Octavius Kraken",
      subtitle: "Escape Artist",
      content: "Super powers: can shape-shift, instantly change color, communicate using light displays generated on his skin, taste things by touching them, squirt ink and use tools",
      imgsrc: "https://images.unsplash.com/photo-1564261331932-ea97c182f705?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      },
    {
     title: "Leonardo ",
      subtitle: "Surfer / Pizza lover",
      content: "Super powers: Decelerated Aging, Dermal Armor/Shell Formation, Enhanced Bite, Enhanced Durability., Enhanced Endurance, Retractable Head, Night Vision, Speed Swimming.",
      imgsrc: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
     title: "Captain Nemo",
      subtitle: "Comedian",
      content: "Super powers: Live in a sea anenome away from predators. Has a slimy mucus covering his body that protects him from the sea anemone. Tells good Dad jokes",
     imgsrc: "https://images.unsplash.com/photo-1536168032936-9ce3b4b3165c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
  ]
  
  // Grabbing our container so we can append the card component to it.
  const container = document.querySelector('.container');
  
  // container.appendChild(createCard('hi rosie', 'best cat award'))
  
  
  // looping through our data to create multiple card components and appending to the container
  cardData.forEach(data => {
    console.log('creating panel:', data.title)
    container.appendChild(createCard(data.title, data.subtitle, data.content, data.imgsrc))
  })
  
  
  // reusuable card component with parameters we will use to pull in our data
  function createCard(title, subtitle, content, imgsrc) {
    // define new elements
    const card = document.createElement('div');
    const cardTitle = document.createElement('h2');
    const cardSubtitle = document.createElement('h3');
    const cardContent = document.createElement('p');
    const cardImg = document.createElement('img');
  
  
    
    // Setup structure of elements
    card.appendChild(cardTitle)
    card.appendChild(cardSubtitle)
    card.appendChild(cardContent)
    card.appendChild(cardImg)
    
    // set class names
    card.classList.add('card')
    cardSubtitle.classList.add('subtitle')
    cardContent.classList.add('desc')
   
    // set text content
    cardContent.textContent = content
    cardTitle.textContent = title
    cardSubtitle.textContent = subtitle
    cardImg.src = imgsrc;
    
    return card
  }