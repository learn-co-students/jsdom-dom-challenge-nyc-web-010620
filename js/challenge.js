document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    
    let body = document.querySelector("body")
    let heart = document.getElementById("heart")

    body.addEventListener("click", function(event){
        switch (event.target.id){
            case "plus":
                incTime();
                break;
            case "minus":
                decTime();
                break;
            case "heart":
                likes();
                break;
            case "pause":
                stop();
                heart.disabled = true
                break;
            case "resume":
                startUp = setInterval(incTime, 1000)
                //setting more disables is just busy work
                heart.disabled = false
                event.target.innerText = "pause"
                event.target.id = "pause"
                break;
            case "submit":
                addComment();
                break;
        }
    })
});

function incTime(){
    let counter = document.getElementById("counter")
    counter.innerText = parseInt(counter.innerText) + 1
}

function decTime(){
    let counter = document.getElementById("counter")
    counter.innerText = parseInt(counter.innerText) - 1
}

function likes(){
    let likesWall = document.querySelector("ul")
    let counter = document.getElementById("counter")
    let currentPost = document.getElementById(`${counter.innerText}`)
    
    if (currentPost){
        currentPost["count"] = currentPost["count"] + 1
        currentPost.innerHTML = `${counter.innerText} is liked ${currentPost["count"]} times`
    }else{
        let likePost = document.createElement("li")
        likePost.id = counter.innerHTML
        likePost["count"] = 1
        likePost.innerHTML= `${counter.innerText} is liked ${likePost["count"]} times`
        likesWall.append(likePost)
    }
}

let startUp = setInterval(incTime, 1000)

function stop(){
    clearInterval(startUp)
    let stopTime = document.getElementById("pause")
    event.target.id = "resume"
    stopTime.innerText = "resume"
}

function addComment(){
    event.preventDefault();
    let input = document.getElementById("comment-input")
    let commentWall = document.getElementById("list")
    let comment = document.createElement("li")

    comment.innerText = input.value

    commentWall.append(comment)

    input.value = ""
}
