// √get the timer
// √implement come kind of automatic counting

window.addEventListener("DOMContentLoaded", function(e){
    const counter = document.getElementById('counter')
    const likeCount = {}
  
    let timer = setInterval(function(){
      // √get the number/text
      // √increment it by 1
      // √replace the text
    
      const number = parseInt(counter.innerText)
      const newNumber = number + 1
      counter.innerText = newNumber
    }, 1000)
  
    document.addEventListener('click', function(e){
      let number = parseInt(counter.innerText)
      let newNumber
  
      switch (e.target.id) {
        case 'minus':
          // get the counter
          // decrement it
          // replace the text
          
          newNumber = number - 1
          counter.innerText = newNumber
  
          break
        case 'plus':
          newNumber = number + 1
          counter.innerText = newNumber
  
          break
        case 'heart':
          // get the number
          // figure out if the number has been liked before
          // if not, render "Number has been liked" to the page
          // keep track of the like somewhere
          // if number has already liked, render "Number has been liked x times"
          // update the tracking of the like count
  
          if (likeCount[number]){
            // number has already been liked
            // update the like count
            // update the existing li with a new message
  
            likeCount[number]++
            newNumber = likeCount[number]
            const li = document.querySelector(`[data-number="${number}"]`)
            li.innerText = `${number} has been liked ${newNumber} times!!! 🧟‍♀️`
  
          } else {
            // number hasn't been liked yet
            // instantiate the likeCount
            // render the corresponding message
  
            const likes = document.getElementById('likes')
            likeCount[number] = 1
            const li = document.createElement('li')
            li.dataset.number = number
            li.innerText = `${number} has been liked 1 time!! 🚀`
            likes.append(li)
          }
  
          break
        case 'pause':
          // pause the counter
          // disable buttons
          // change button text to resume
  
          clearInterval(timer)
  
          document.getElementById('minus').disabled = true
          document.getElementById('plus').disabled = true
          document.getElementById('heart').disabled = true
          document.getElementById('submit').disabled = true
  
          e.target.id = 'resume'
          e.target.innerText = 'resume'
          
          break
        case 'resume':
          timer = setInterval(function() {
            number = parseInt(counter.innerText)
            newNumber = number + 1
            counter.innerText = newNumber
          }, 1000)
  
          document.getElementById('minus').disabled = false
          document.getElementById('plus').disabled = false
          document.getElementById('heart').disabled = false
          document.getElementById('submit').disabled = false
  
          e.target.id = 'pause'
          e.target.innerText = 'pause'
  
          break
        case 'submit':
          e.preventDefault()
          // get text out of form
          // create a p tag for each comment
          // render to the page
          // clear the form
  
          const commentText = e.target.parentNode.comment.value
          const p = document.createElement('p')
          p.innerText = commentText
          document.getElementById('list').append(p)
  
          e.target.parentNode.reset()
  
          break
        default:
          break
      }
    })
  
  })
  