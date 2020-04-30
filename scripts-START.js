let countdown;


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
    console.log(seconds);
    
}//end displayTimeLeft function


