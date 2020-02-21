counter = document.getElementById('counter')
number = parseInt(counter.innerText) 
likeCount = 0

let enabled = true

function movingCount(){
    if (enabled === true){
    let score = parseInt(counter.innerText)
        let updatedScore = score +1
        counter.innerText = updatedScore.toString()
    }
}

moving = setInterval(movingCount, 1000);

const plusbutt = document.getElementById('plus')
    plusbutt.addEventListener('click', function() {
        if (enabled === true){
        let score = parseInt(counter.innerText)
        let updatedScore = score +1
        counter.innerText = updatedScore.toString()
        }
    })

const minusbutt = document.getElementById('minus')
    minusbutt.addEventListener('click', function() {
        if (enabled === true){
        let score = parseInt(counter.innerText)
        let updatedScore = score -1
        counter.innerText = updatedScore.toString()
        }
    })

const heartbutt = document.getElementById('heart')
    heartbutt.addEventListener('click', function() {
        if (enabled === true){
            if (likeCount){
                likeCount++
                newNumber = likeCount
                let li = document.getElementById(`${counter.innerText}`)
                li.innerText = `${counter.innerText} has been liked ${newNumber} times`
            } else {
                let likes = document.getElementById('likes')
                let li = document.createElement('li')
                li.id = document.getElementById(`${counter.innerText}`)
                likeCount = 1
                li.innerText = `${li.id} is liked 1 time`
                likes.append(li)
            }       
        }
    });

const resumeButt = document.createElement('button')
    resumeButt.innerText = 'resume'
    resumeButt.addEventListener('click', function() {
        enabled = true
        document.body.replaceChild(pauseButt, resumeButt)
    })

const pauseButt = document.getElementById('pause')
    pauseButt.addEventListener('click', function() {
        enabled = false
        document.body.replaceChild(resumeButt, pauseButt)
    })

    const comment_sub = document.getElementById('submit')
    comment_sub.addEventListener('click', function() {
        if (enabled === true){
            event.preventDefault()
            let input = document.getElementById('comment-input')
            let comment = document.createElement('li')
            let commentList = document.getElementById('list')

            comment.innerText = input.value

            commentList.append(comment)

            input.value = ''
        }
    })



