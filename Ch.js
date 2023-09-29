let myleads = []
const inputel = document.getElementById("input")
const Saveel = document.getElementById("saveel")
const ulEl = document.getElementById("ulel")
const Deleteel = document.getElementById("deleteel")
const Tab = document.getElementById("tab")
const leadsfromlocalvariable = JSON.parse(localStorage.getItem("myleads"))

if (leadsfromlocalvariable) {
    myleads = leadsfromlocalvariable
    render(myleads)
}

Tab.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myleads))
        render(myleads)
    })
})

function render(leads) {
    let listitem = ""
    for (let i = 0; i < leads.length; i++) {
        listitem += ` 
        <li> 
        <a target='_blank' href=${leads[i]}> 
        ${leads[i]}
        </a> 
        </li> `
    }
    ulEl.innerHTML = listitem
}

Saveel.addEventListener("click", function save() {
    myleads.push(inputel.value)
    inputel.value = " "
    localStorage.setItem("myleads", JSON.stringify(myleads))
    render(myleads)
})

Deleteel.addEventListener("click", function () {
    localStorage.clear()
    myleads = []
    render(myleads)
})
