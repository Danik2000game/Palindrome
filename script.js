
const inputTxt = document.querySelector('.inputs input')
const btn = document.querySelector('button')
const infoTxt = document.querySelector('.info-txt')
let filterTxt 

inputTxt.addEventListener('keyup', () => {
    filterTxt = inputTxt.value.toLowerCase().replace(/[^A-Z0-9]/ig, '')
    if(filterTxt) {
     return btn.classList.add('active')
    }
    btn.classList.remove('active')
    infoTxt.style.display = 'none'
})

btn.addEventListener('click', () => {
    let reverseTxt = filterTxt.split('').reverse().join('')
    infoTxt.style.display = 'block'
    if(reverseTxt != filterTxt) {
        return infoTxt.innerHTML = `NO, <span>${inputTxt.value}</span>, is not Palindrome`
    }
    return infoTxt.innerHTML = `Yes, <span>${inputTxt.value}</span> is Palindrome`
})
