let countdown;


function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000; //now is in milliseconds, hence the *1000
    // console.log({now, then });
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000); //dividing by milliseconds to get seconds rounded to the second
        // vvv check if we should stop the function
        if(secondsLeft <= 0) {
            clearInterval(countdown);
            return; //this return is required to prevent -0 after 1
        }
        console.log(secondsLeft);
        
    }, 1000);//end setInterval
    
};//end timer function


