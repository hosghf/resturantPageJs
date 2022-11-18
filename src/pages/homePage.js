export default function initPageContent() {
  const container = document.createElement('div')
  container.classList.add('home-container')
  
  const heding = document.createElement('h1')
  heding.innerText = "Home page of our resturant. this is a test one"
  container.appendChild(heding)

  const paragraphHeading = document.createElement('h2')
  paragraphHeading.innerText = "what we serve?"
  container.appendChild(paragraphHeading)

  const introductionParagraph = document.createElement('p')
  introductionParagraph.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  introductionParagraph.classList.add('home-page-paragraph')

  container.appendChild(introductionParagraph)

  return container
}

