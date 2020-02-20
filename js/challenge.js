// As a user, I should see the timer increment every second once the page has loaded.

//what tag we will use, assign a variable
// the text html goes up every 1 sec
// console.log("loaded")

document.addEventListener("DOMContentLoaded", function(){
      let counter = document.getElementById('counter')
      let body = document.getElementsByTagName('body')[0]
      let ul = document.getElementsByClassName('likes')[0]
    //   let button = document.getElementById('heart')

     setInterval(function increment(){
     counter.innerHTML= parseInt(counter.innerHTML) + 1}, 
     1000);

     body.addEventListener('click', function(event){
        // debugger
        let li = document.createElement('li')
        if (event.target.id === 'minus'){
            counter.innerHTML= parseInt(counter.innerHTML) - 1
        } else if (event.target.id === 'plus'){
            counter.innerHTML= parseInt(counter.innerHTML) + 1  
        } else if (event.target.id === 'heart'){
            console.log('got to heart')
        li.innerText =`${counter.innerHTML} has been liked 1 time`
        ul.append(li)
        }

        
        
    });

    //  button.addEventListener('click', function(event){
    //     let li = document.createElement('li')
    //     li.innerText =`${counter.innerHTML} has been liked 1 time`
    //     ul.append(li)
    // })

})


// As a user, I can manually increment and decrement the counter using the plus and minus buttons.

//identify the element
//create an event listener with a click
// innertext of counter to go down on click

// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
//identify the ul
//create a new li - child of ul
//connect it with click event
// assign li to a string
//append to ul
