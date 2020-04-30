function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000; //now is in milliseconds, hence the *1000
    // console.log({now, then });
    setInterval(() => {
        
    }, 1000);//end setInterval
    
};//end timer function

timer();
