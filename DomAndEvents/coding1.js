document.querySelector('.again').addEventListener('click', function(){
    let score = 20;
    let secretNumber = Math.floor(Math.random()*20) +1;
//     3. Restore the initial conditions of the message, number, score and guess input
// fields
    document.querySelector('.message').textContent="Start guessing ...";
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value  = '';

// 4. Also restore the original background color (#222) and number width (15rem)

    document.querySelector('body').style.backgroundColor='#222'
    document.querySelector('.number').style.width='15rem'
})