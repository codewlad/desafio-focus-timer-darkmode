const soundForest = new Audio("./assets/sounds/forest.wav")
const soundRain = new Audio("./assets/sounds/rain.wav")
const soundCoffeeShop = new Audio("./assets/sounds/coffeeshop.wav")
const soundFireplace = new Audio("./assets/sounds/fireplace.wav")
const soundButtonPress = new Audio("./assets/sounds/audios_button-press.wav")
const soundKichenTimer = new Audio("./assets/sounds/kitchentimer.wav")

export function Sounds() {
    function stopSounds() {
        soundForest.pause()
        soundRain.pause()
        soundCoffeeShop.pause()
        soundFireplace.pause()
    }

    function playSoundForest() {
        stopSounds()
        soundForest.play()
        soundForest.loop = true
    }

    function playSoundRain() {
        stopSounds()
        soundRain.play()
        soundRain.loop = true
    }

    function playSoundCoffeeShop() {
        stopSounds()
        soundCoffeeShop.play()
        soundCoffeeShop.loop = true
    }

    function playSoundFireplace() {
        stopSounds()
        soundFireplace.play()
        soundFireplace.loop = true
    }

    return {
        playSoundForest,
        playSoundRain,
        playSoundCoffeeShop,
        playSoundFireplace,
        stopSounds,
        soundButtonPress,
        soundKichenTimer,
        soundForest,
        soundRain,
        soundCoffeeShop,
        soundFireplace
    }
}