let countdown;
const timerDisplay = document.querySelector('.display__time-left'); //timer on the DOM
 


function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000; //now is in milliseconds, hence the *1000
    // console.log({now, then });
    displayTimeLeft(seconds);//to show initial time
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000); //dividing by milliseconds to get seconds rounded to the second
        // vvv check if we should stop the function vvv
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return; //this return is required to prevent -0 after 1 
        }//end IF
        // vvv display vvv
        displayTimeLeft(secondsLeft); //to show time remaining
        
    }, 1000);//end setInterval
    
};//end timer function

function displayTimeLeft(seconds) {
    let secondsLeft = seconds

    const hours = Math.floor(seconds / 3600); //Math.floor cuts off anything after a decimal
    seconds = seconds % 3600; //% is 'mod' or 'modulus', gives you the remainder

    const minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;

    const display = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timerDisplay.textContent = display;
    
}//end displayTimeLeft function


