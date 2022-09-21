
for (let i=0; i<10; i++){
const newPara = document.createElement('p')
newPara.textContent = 'This is new text'
newPara.classList.add ('generated-text')
document.body.prepend = (newPara)

let i=0

function addTextToTop() {  
    if (i % 2 === 0) {
        newPara.style.setProperty ('color', 'red')
    }
     else {
        newPara.style.setProperty ('color', 'blue')
    }
    i++
}

function addButton (buttonText, onClick){
    const button = document.createElement('button')
    button.textContent = 'buttonText'
    document.body.prepend(button)
    button.addEventListener('click', addTextToTop)
}

addButton ('Add Text', addTextToTop)

addButton ('Remove Text', () => {
    let paras = document.querySelectorAll('.generated-text')
    for (let para of paras){
        para.remove
    }
}