// grab the count-el element, store it in a countEl variable

let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.innerText = count

    // set countEl's innerText to the count
}

function incrementByTen() {
    count += 10
    countEl.innerText = count
}


function save() {
    let saveMsg = `You hit pity at: ${count} wishes`
    saveEl.textContent = saveMsg
    count = 0
    countEl.innerText = count
}
