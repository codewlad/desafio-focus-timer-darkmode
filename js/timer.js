let minutes = 0, seconds, timerTimeOut, newMinute = 0

export function Timer({
    dialMinutes,
    dialSeconds,
    btnPlay,
    btnPause,
    soundKichenTimer,
}) {

    function getTimer() {
        minutes = Number(dialMinutes.textContent)
        seconds = Number(dialSeconds.textContent)
    }
    
    function checkingTimer() {
        return (minutes == 0 && seconds == 0) ? false : true
    }
    
    function setTimer() {
        stopTimer()
        minutes = inputMinutes.value
        newMinute = inputMinutes.value
        seconds = 0
        dialMinutes.textContent = String(minutes).padStart(2, "0")
        dialSeconds.textContent = String(seconds).padStart(2, "0")
    }
    
    function startTimer() {
        timerTimeOut = setTimeout(function() {
            if(seconds <=0) {
                seconds = 5
    
                minutes--
                dialMinutes.textContent = String(minutes).padStart(2, "0")
            }
            seconds--
            dialSeconds.textContent = String(seconds).padStart(2, "0")
    
            if(minutes <= 0 && seconds <= 0) {
                resetTimer()
                soundKichenTimer.play()
                return 
            }

            startTimer()      
        }, 1000)
    }

    function increaseTimer() {
        if(minutes >= 55) {
            minutes = 60
            newMinute = minutes
            dialMinutes.textContent = String(minutes).padStart(2, "0")
            dialSeconds.textContent = String(0).padStart(2, "0")
            return
        }
        minutes = Number(minutes) + 5
        newMinute = minutes
        dialMinutes.textContent = String(minutes).padStart(2, "0")
    }

    function decreaseTimer() {
        if(minutes < 5) {
            minutes = 0
            newMinute = 0
            stopTimer()
            return
        }

        minutes = Number(minutes) - 5
        newMinute = minutes
        dialMinutes.textContent = String(minutes).padStart(2, "0")
    }
    
    function pauseTimer() {
        clearInterval(timerTimeOut)
    }

    function stopTimer() {
        pauseTimer()
        resetTimer()
    }

    function resetTimer () {
        minutes = newMinute
        seconds = 0
        dialMinutes.textContent = String(newMinute).padStart(2, "0")
        dialSeconds.textContent = String(seconds).padStart(2, "0")
        btnPlay.classList.remove("hide")
        btnPause.classList.add("hide")
    }

    return {
        getTimer,
        checkingTimer,
        setTimer,
        startTimer,
        pauseTimer,
        stopTimer,
        resetTimer,
        increaseTimer,
        decreaseTimer
    }
}
