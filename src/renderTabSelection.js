export default function renderTabSelection(content, pages) {
  const tabs = document.querySelectorAll('.tab')
    
  tabs.forEach((tab) => {
    tab.addEventListener('click', toggleSelected)
  })
    
  function toggleSelected() {
    tabs.forEach((tab) => {
      tab.classList.remove('tab-selected')
    })
    
    this.classList.add('tab-selected')
  
    if(this.getAttribute('id') === 'home'){
      content.innerHTML = ''
      content.appendChild(pages.homePage)
    } else if(this.getAttribute('id') === 'menu') {
      content.innerHTML = ''
      content.appendChild(pages.menuPage)
    } else if(this.getAttribute('id') === 'contact') {
      content.innerHTML = ''
      content.appendChild(pages.contactPage)
    }
  }
}