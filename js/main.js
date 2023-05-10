import { elements } from "./elements.js"
import { Controls } from "./controls.js"
import { Timer } from "./timer.js"
import { Cards } from "./cards.js"
import { Sounds } from "./sounds.js"
import { DarkMode } from "./darkmode.js"

const { 
    btnPlay,
    btnPause,
    btnStop,
    btnIncrease,
    btnDecrease,
    btnToggleSetTheMinutes,
    btnSetMinutes,
    btnForest,
    btnRain,
    btnCoffeeShop,
    btnFireplace,
    btnDarkMode,
    dialMinutes,
    dialSeconds,
    sliderForest,
    sliderRain,
    sliderCoffeeShop,
    sliderFireplace
} = elements

const darkmode = DarkMode({
    btnDarkMode,
})

const sounds = Sounds()

const cards = Cards ({
    btnForest,
    btnRain,
    btnCoffeeShop,
    btnFireplace,
    stopSounds: sounds.stopSounds,
    playSoundForest: sounds.playSoundForest,
    playSoundRain: sounds.playSoundRain,
    playSoundCoffeeShop: sounds.playSoundCoffeeShop,
    playSoundFireplace: sounds.playSoundFireplace
})

const timer = Timer ({
    dialMinutes,
    dialSeconds,
    btnPlay,
    btnPause,
    soundKichenTimer: sounds.soundKichenTimer
})

const controls = Controls({
    btnPlay,
    btnPause,
    getTimer: timer.getTimer,
    checkingTimer: timer.checkingTimer,
    setTimer: timer.setTimer,
    startTimer: timer.startTimer,
    pauseTimer: timer.pauseTimer,
    stopTimer: timer.stopTimer,
    resetTimer: timer.resetTimer,
    increaseTimer: timer.increaseTimer,
    decreaseTimer: timer.decreaseTimer,
    soundButtonPress: sounds.soundButtonPress
})

btnPlay.addEventListener("click", controls.play)
btnPause.addEventListener("click", controls.pause)
btnStop.addEventListener("click", controls.stop)
btnIncrease.addEventListener("click", controls.increase)
btnDecrease.addEventListener("click", controls.decrease)
btnToggleSetTheMinutes.addEventListener("click", controls.toggleSetTheMinutes)
btnSetMinutes.addEventListener("click", controls.setMinutes)
btnDarkMode.addEventListener("click", darkmode.toogleDarkMode)

btnForest.addEventListener("click", cards.buttonForest)
btnRain.addEventListener("click", cards.buttonRain)
btnCoffeeShop.addEventListener("click", cards.buttonCoffeeShop)
btnFireplace.addEventListener("click", cards.buttonFireplace)

function removeCardEvent() {
    btnForest.removeEventListener("click", cards.buttonForest)
    btnRain.removeEventListener("click", cards.buttonRain)
    btnCoffeeShop.removeEventListener("click", cards.buttonCoffeeShop)
    btnFireplace.removeEventListener("click", cards.buttonFireplace)
}

function addCardEvent() {
    btnForest.addEventListener("click", cards.buttonForest)
    btnRain.addEventListener("click", cards.buttonRain)
    btnCoffeeShop.addEventListener("click", cards.buttonCoffeeShop)
    btnFireplace.addEventListener("click", cards.buttonFireplace)
}

sounds.soundForest.volume = 0.5
sounds.soundRain.volume = 0.5
sounds.soundCoffeeShop.volume = 0.5
sounds.soundFireplace.volume = 0.5

sliderForest.addEventListener("mouseover", removeCardEvent)
sliderForest.addEventListener("mouseout", addCardEvent)
sliderForest.addEventListener("change", function(e) { sounds.soundForest.volume = e.currentTarget.value / 100; })

sliderRain.addEventListener("mouseover", removeCardEvent)
sliderRain.addEventListener("mouseout", addCardEvent)
sliderRain.addEventListener("change", function(e) { sounds.soundRain.volume = e.currentTarget.value / 100; })

sliderCoffeeShop.addEventListener("mouseover", removeCardEvent)
sliderCoffeeShop.addEventListener("mouseout", addCardEvent)
sliderCoffeeShop.addEventListener("change", function(e) { sounds.soundCoffeeShop.volume = e.currentTarget.value / 100; })

sliderFireplace.addEventListener("mouseover", removeCardEvent)
sliderFireplace.addEventListener("mouseout", addCardEvent)
sliderFireplace.addEventListener("change", function(e) { sounds.soundFireplace.volume = e.currentTarget.value / 100; })