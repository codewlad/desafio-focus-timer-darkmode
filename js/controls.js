export function Controls({
    btnPlay,
    btnPause,
    getTimer,
    checkingTimer,
    setTimer,
    startTimer,
    pauseTimer,
    stopTimer,
    increaseTimer,
    decreaseTimer,
    soundButtonPress
}) {
    function play() {
        getTimer()
        soundButtonPress.play()

        if(!checkingTimer()) {
            alert("Defina os minutos antes de iniciar o temporizador.")
            return
        }

        document.querySelector("#setTheMinutes").classList.add("hide")
        btnPlay.classList.toggle("hide")
        btnPause.classList.toggle("hide")

        startTimer()
    }

    function pause() {
        btnPlay.classList.toggle("hide")
        btnPause.classList.toggle("hide")
        pauseTimer()
        soundButtonPress.play()
    }

    function stop() {
        stopTimer()
        soundButtonPress.play()
        if(btnPlay.classList.contains("hide")) {
            btnPlay.classList.toggle("hide")
            btnPause.classList.toggle("hide")
        }
    }

    function increase() {
        increaseTimer()
        soundButtonPress.play()
    }

    function decrease() {
        decreaseTimer()
        soundButtonPress.play()
    }

    function toggleSetTheMinutes() {
        document.querySelector("#setTheMinutes").classList.toggle("hide")
        soundButtonPress.play()
    }

    function setMinutes() {
        if(inputMinutes.value <= 0 || inputMinutes.value > 60) {
            alert("Informe um número entre 1 e 60")
            return
        }

        setTimer()
        soundButtonPress.play()
    }

    return {
        play,
        pause,
        stop,
        increase,
        decrease,
        toggleSetTheMinutes,
        setMinutes
    }
}

