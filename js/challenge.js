let counterVal = parseInt(document.getElementById("counter").innerText)

let disabled = false

function change(num){
    if(disabled){return}
    counterVal += num
    document.getElementById("counter").innerText = counterVal.toString()
}

document.querySelector("#plus").addEventListener("click", ()  => {
    change(1)
})

document.querySelector("#minus").addEventListener("click", ()  => {
    change(-1)
})

setInterval(function(){ change(1) }, 1000);

document.querySelector("#pause").addEventListener("click", () => {
    disabled = !disabled
    disabled ? document.querySelector("#pause").innerText = "resume" : document.querySelector("#pause").innerText = "pause"
})

document.querySelector("#heart").addEventListener("click", () => {
    

})