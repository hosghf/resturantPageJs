export default function createContactPage() {
  const container = document.createElement('div')
  container.classList.add('contact-us-container')

  const heading = document.createElement('h1')
  heading.innerText = 'Contact Us'

  const tel = document.createElement('p')
  tel.innerHTML = '<strong>tel</strong>: 234234234234'

  const email = document.createElement('p')
  email.innerHTML = '<strong>Email</strong>: demo@demoo.com'

  const address = document.createElement('p')
  address.innerHTML = '<strong>address</strong>: somewhere in this world we are waiting for you'

  container.appendChild(heading)
  container.appendChild(tel)
  container.appendChild(email)
  container.appendChild(address)

  return container
}