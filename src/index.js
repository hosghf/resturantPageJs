import createHomePage from './homePage.js'
import manageTabSelection from './manageTabSelection'
import createMenuPage from './menuPage'
import createContactPage from './contactPage'
import './style.css'

const content = document.querySelector('#content')
const homePage = createHomePage()
const menuPage = createMenuPage()
const contactPage = createContactPage()

content.appendChild(homePage)

manageTabSelection(content, { homePage, menuPage, contactPage })