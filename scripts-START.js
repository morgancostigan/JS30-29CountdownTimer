function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000; //now is in milliseconds, hence the *1000
    // console.log({now, then });
    setInterval(() => {
        const secondsLeft = (then - Date.now()) / 1000; //dividing by milliseconds to get seconds
        console.log(secondsLeft);
        
    }, 1000);//end setInterval
    
};//end timer function

timer();
