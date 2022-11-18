import createHomePage from './pages/homePage.js'
import createMenuPage from './pages/menuPage.js'
import createContactPage from './pages/contactPage.js'
import renderTabSelection from './renderTabSelection.js'
import './style.css'

const content = document.querySelector('#content')
const homePage = createHomePage()
const menuPage = createMenuPage()
const contactPage = createContactPage()

content.appendChild(homePage)

renderTabSelection(content, { homePage, menuPage, contactPage })