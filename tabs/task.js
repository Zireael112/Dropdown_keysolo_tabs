let tabPage = Array.from(document.querySelectorAll('.tab'))
let tabContent = Array.from(document.querySelectorAll('.tab__content'))

function switchPage() {

	for (let tab of tabPage) {
		tab.className = "tab"
	}

	for (let content of tabContent) {
		content.className = "tab__content"
	}

	let index = tabPage.indexOf(this)

	tabPage[index].className = "tab tab_active"
	tabContent[index].className = "tab__content tab__content_active"

}

for (let tab of tabPage) {
	tab.onclick = switchPage
}