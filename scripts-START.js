let countdown;
const timerDisplay = document.querySelector('.display__time-left'); //timer on the DOM
const endTimeDisplay = document.querySelector('.display__end-time'); //end time on the DOM
const buttons = document.querySelectorAll('[data-time]'); //selects all the elements from the HTML with the data-time attribute 
 


function timer(seconds) {
    
    clearInterval(countdown);// clear any existing timers

    const now = Date.now();
    const then = now + seconds * 1000; //now is in milliseconds, hence the *1000
    // console.log({now, then });
    displayTimeLeft(seconds);//to show initial time
    displayEndTime(then);
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
    document.title = display; //updates the text on the window tab
    timerDisplay.textContent = display; //updates the DOM
    
}//end displayTimeLeft function

function displayEndTime(timestamp) {
    const end = new Date(timestamp); //sets the endtime in a Date format 
    const hour = end.getHours(); 
    const minute = end.getMinutes();
    endTimeDisplay.textContent = `Ends at ${hour > 12 ? hour - 12 : hour}:${minute < 10 ? '0' : ''}${minute}`;
}//end displayEndTime function 

function startTimer() {
    // console.log(this);
    const seconds = parseInt(this.dataset.time);
    timer(seconds); //starts timer based on the button clicked
}//end startTimer function

buttons.forEach(button => button.addEventListener('click', startTimer)); //run startTimer each time a button is clicked 
document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();//prevents page reload 
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset(); //clears form
    
});


