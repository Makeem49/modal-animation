let modal = document.querySelector('#modal')
let fab = document.querySelector('#fab')
let formList = document.querySelector('#attendee-form')
let inputName = document.querySelector('#attendee-name')
let attendees = document.querySelector('ul#list')


fab.addEventListener('click', event => {
    toggleModal()
})

const toggleModal = () => {
    modal.classList.toggle('show')
    fab.classList.toggle('rotate')
}


formList.addEventListener('submit', (event) => {
    event.preventDefault()
    toggleModal()
    if (inputName.value === '') {
        throw new Error('Input a name')
    }
    attendees.insertAdjacentHTML('afterbegin', `<li class='deletable' tabindex='0'>${inputName.value}</li>`)
    inputName.value = ''
})

document.addEventListener('keyup', (event) => {
    // console.log(event.key)
    if (event.key === 'n') {
        modal.classList.add('show')
    } else if (event.key === 'Escape' && (modal.classList.contains('show'))) {
        toggleModal()
    }
})


let search = document.querySelector('#app-search')
let list = document.querySelectorAll('#list li')



// search.addEventListener('keyup', event => {
//     let toSearch = search.value.trim()

//     let allAttendees = [...list]

//     let filteredList = allAttendees.filter((attendee) => {
//         return attendee.textContent.includes(toSearch)
//     })

//     attendees.innerHTML = '';
//     console.log(filteredList)
//     filteredList.forEach(name => {
//         attendees.insertAdjacentHTML('beforebegin', `<li class="deletable" tabindex="0">${name}</li>`)
//     })
// })

