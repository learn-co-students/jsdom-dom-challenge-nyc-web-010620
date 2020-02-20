// [x] 1. As a user, I should see the timer increment every second once the page has loaded.
// [x] 2. As a user, I can manually increment and decrement the counter using the plus and minus buttons.
// [x] 3. As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
// [x] 4. As a user, I can pause the counter, which should 

//   * [x] pause the counter
//   * [x] disable all buttons except the pause button
//   * [x] the pause button should then show the text "resume."

//   [x] When 'resume' is clicked, it should restart the counter and re-enable the buttons.
// [x] 5. As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

let isPaused = true 
let startTime = new Date().getTime();

const counter = document.getElementById("counter")

let x = setInterval(function() {
   if (isPaused === true) {
      let now = new Date().getTime();
      counter.innerText = Math.floor((now - startTime)/1000)
   }
} ,1000)

const minusButton = document.getElementById("minus")
minusButton.addEventListener("click", function(event) {
   startTime += 1000
   counter.innerText = parseInt(counter.innerText) - 1
})

const plusButton = document.getElementById("plus")
plusButton.addEventListener("click", function(event) {
   startTime -= 1000
   counter.innerText = parseInt(counter.innerText) + 1
})

const likeButton = document.getElementById("heart")
likeButton.addEventListener("click", function(event) {
   const likesList = document.getElementById("likesList")
   const newLikesList = Array.from(likesList.children)
   let found = false 

   for (i=0; i < newLikesList.length; i++) {

      if (newLikesList[i].value === parseInt(counter.innerText)) {
         let newString = newLikesList[i].innerText
         let currentCount = newString.split(" ")[4]
         let newLikes = parseInt(currentCount) + 1
         newLikesList[i].innerText = `${newLikesList[i].value} has been liked ${newLikes} time` 

         found = true 
         //add likes to existing list
      }
   }
   if (found === false) {
      let newLi = document.createElement("li")
      newLi.value = parseInt(counter.innerText)
      newLi.innerText = `${counter.innerText} has been liked 1 time` 
      likesList.append(newLi)
   }
})

const pauseButton = document.getElementById("pause")
pauseButton.addEventListener("click", function(event) {
   if (isPaused === false) {
      pauseButton.innerText = "pause"
      plusButton.disabled = false
      minusButton.disabled = false
      likeButton.disabled = false
      isPaused = true 
   } 
   else if (isPaused === true) {
      pauseButton.innerText = "resume"
      plusButton.disabled = true
      minusButton.disabled = true
      likeButton.disabled = true
      isPaused = false
   }

})

const form = document.getElementById("comment-form")
form.addEventListener("submit", function(event) {
   event.preventDefault(); 
   const comment = document.getElementById("comment-input")
   const commentList = document.getElementById("list")
   const newLi = document.createElement("li")
   newLi.innerText = comment.value 
   commentList.append(newLi)
})