let yourName = "Caitlin Studer" // called in credit.textContent to change name

let gb = 0 // gingerbread cookies
let cc = 0 // chocolate chip cookies
let sugar = 0 // sugar cookies
let total = 0 // total quantity of cookies

const credit = document.querySelector('#credit') // selects the element needed to change name

// functions for updating the quantity of each cookies and the total
function updateGb(displayGb){
    let gb = document.querySelector('#qty-gb')
    gb.innerHTML = displayGb
}

function updateCc(displayCc){
    let cc = document.querySelector('#qty-cc')
    cc.innerHTML = displayCc
}

function updateSugar(displaySugar){
    let sugar = document.querySelector('#qty-sugar')
    sugar.innerHTML = displaySugar
}

function updateTotal(displayTotal){
    let total = document.querySelector('#qty-total')
    total.innerHTML = displayTotal
}

// selecting each button element 
const gbPlusBtn = document.querySelector('#add-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')

const gbMinusBtn = document.querySelector('#minus-gb')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// actually changes the name
credit.textContent = `Created by ${yourName}`

// event listeners for gingerbread buttons
gbPlusBtn.addEventListener('click', function(e){
    gb++
    total++
    updateGb(`${gb}`)
    updateTotal(`${total}`)
})

gbMinusBtn.addEventListener('click', function(e){
    if (gb > 0){
        gb--
        total--
    } else {
        window.alert('You have no more gingerbread cookies in your cart')
    }
    updateGb(`${gb}`)
    updateTotal(`${total}`)
})

// event listeners for chocolate chip buttons
ccPlusBtn.addEventListener('click', function(e){
    cc++
    total++
    updateCc(`${cc}`)
    updateTotal(`${total}`)
})

ccMinusBtn.addEventListener('click', function(e){
    if (cc > 0){
        cc--
        total--
    } else {
        window.alert('You have no more chocolate chip cookies in your cart')
    }
    updateCc(`${cc}`)
    updateTotal(`${total}`)
})

// event listeners for sugar buttons
sugarPlusBtn.addEventListener('click', function(e){
    sugar++
    total++
    updateSugar(`${sugar}`)
    updateTotal(`${total}`)
})

sugarMinusBtn.addEventListener('click', function(e){
    if (sugar > 0){
        sugar--
        total--
    } else {
        window.alert('You have no more sugar cookies in your cart')
    }
    updateSugar(`${sugar}`)
    updateTotal(`${total}`)
})



