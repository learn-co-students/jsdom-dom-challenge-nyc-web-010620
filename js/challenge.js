// incrementing using +/- buttons
let pause = false
let counter = document.getElementById("counter")

function addOne() {
    if(pause){return}
    if(parseInt(counter.innerText) >= 10){return counter.innerText = "0"}
    let int = parseInt(counter.innerText)
    int += 1
    counter.innerText = int.toString()    
}

let plusButton = document.getElementById("plus")
plusButton.addEventListener("click", addOne)


let minusButton = document.getElementById("minus")
minusButton.addEventListener("click", function(){
    if(pause){return}
    let int = parseInt(counter.innerText)
    int > 0 ? int -= 1 : int
    counter.innerText = int.toString()
})

// counter that auto-increments
setInterval(addOne,1000)

// pause counter action

let pauseButton = document.getElementById('pause')
pauseButton.addEventListener("click", function(){
    pause = !pause
    pause ? pauseButton.innerText = "resume" : pauseButton.innerText = "pause"
})

// comments
function valid(input){
    if(input.match(/[@$0-9]/)){return false}
    if(input.match(/^\w{0,2}$/)){return false}
    if(input.match(/^\w{101,}$/)){return false}
    if(input.match(/(\w{20,})/)){return false}
    return true
}

let submit = document.getElementById("submit")
submit.addEventListener("click", function(e) {
    e.preventDefault()
    let comment = document.getElementById("comment-input").value
    if(!valid(comment)){return}
    let li = document.createElement("li")
    li.textContent = comment
    let ul = document.getElementById("list")
    ul.appendChild(li)
})

// --- //

// reset button - sets counter to zero
let reset = document.getElementById("reset")
reset.addEventListener("click", function resetCounter() {
    if (pause){return}
    counter.innerText = "0"
})

// LIKES
let likeButton = document.getElementById("heart")
let likes = document.querySelector("ul.likes")
likeButton.addEventListener("click",function(){
    let num = document.getElementById("counter").innerText
    let ul = document.querySelector("ul.likes")
    //let li = undefined
    if (document.getElementById(num) != null) {
        let li = document.getElementById(num)
        let int = parseInt(li.innerText.match(/\d*\s\w{4,5}$/)[0])
        li.innerText = `Number: ${num} : ${(int + 1).toString()} likes`
    } else {
        let li = document.createElement("li")
        li.setAttribute('id',num)
        li.innerText = `Number: ${num} : 1 like`
        ul.appendChild(li)
    }
})