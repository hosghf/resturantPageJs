export default function initMenuPage() {
  const menuItems = [
    {
      title: 'special pasta', 
      description: 'is is a greate our special pasta with delicious sos',
      price: '30$',
      image: require('./menuImages/lazania.jpg')
    },
    {
      title: 'meat pizza', 
      description: 'this meat pizza is a greate berget with khardal sos',
      price: '25$',
      image: require('./menuImages/pizza.jpg')
    },
    {
      title: 'meat berger', 
      description: 'this meat berger is a greate berget with khardal sos',
      price: '20$',
      image: require('./menuImages/berger.jpg')
    }
  ]

  const container = document.createElement('div')
  container.classList.add('menu-container')
 
  menuItems.forEach((item) => {
    const menuItem = document.createElement('div')
    menuItem.classList.add('menu-item')
    
    // making food text section
    const textSection = document.createElement('div')
    textSection.classList.add('text-section')
    
    const foodTitle = document.createElement('h3')
    foodTitle.innerText = item.title
    
    const foodDescription = document.createElement('p')
    foodDescription.innerText = item.description
    
    const foodPrice = document.createElement('p')
    foodPrice.innerHTML = `<strong> ${item.price} </strong>`

    textSection.appendChild(foodTitle)
    textSection.appendChild(foodDescription)
    textSection.appendChild(foodPrice)
    // end food making text section

    // making image food
    const foodImage = new Image()
    foodImage.src = item.image
    // end making image food
      
    menuItem.appendChild(textSection)
    menuItem.appendChild(foodImage)
    container.appendChild(menuItem)
  })

  return container
}