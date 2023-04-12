

export const closeAfterSubmitSearch =() => {
    const delay = 200
    const limitDelay = 10000 //10 sec

    let currentWaitingTime = 0

    const retryLoop = () => {
        if (document.getElementById("open_search_block") !== null) {
            document.getElementById("open_search_text_button")!.click()
            clearInterval(insideInterval);
        }
        else if(currentWaitingTime === limitDelay){
            clearInterval(insideInterval);
        }
        else{
            currentWaitingTime+=delay
        }
    };

    let insideInterval = setInterval(retryLoop, delay);
}