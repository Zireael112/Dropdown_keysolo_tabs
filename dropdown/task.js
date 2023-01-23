let list = document.querySelector('.dropdown__list')
let btn = document.querySelector('.dropdown__value')
let links = Array.from(document.querySelectorAll('a.dropdown__link'))

function addDropDown() {
    if (list.className === 'dropdown__list dropdown__list_active') {
        list.className = 'dropdown__list'
    } else {
        list.className = 'dropdown__list dropdown__list_active'
    }   
}

btn.addEventListener('click', addDropDown)

links.forEach(function (link) {
    link.onclick = function () {
        document.querySelector('div.dropdown__value').textContent = link.textContent;
        return false;
    }
    link.addEventListener('click', addDropDown)
})