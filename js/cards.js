let isSelected = ""

function changeCard () {
    switch(isSelected) {
        case "forest":
            document.querySelector("#btnForest").classList.add("cardSelected")
            document.querySelector("#btnRain").classList.remove("cardSelected")
            document.querySelector("#btnCoffeeShop").classList.remove("cardSelected")
            document.querySelector("#btnFireplace").classList.remove("cardSelected")
            break;
        case "rain":
            document.querySelector("#btnForest").classList.remove("cardSelected")
            document.querySelector("#btnRain").classList.add("cardSelected")
            document.querySelector("#btnCoffeeShop").classList.remove("cardSelected")
            document.querySelector("#btnFireplace").classList.remove("cardSelected")
            break;
        case "coffeeshop":
            document.querySelector("#btnForest").classList.remove("cardSelected")
            document.querySelector("#btnRain").classList.remove("cardSelected")
            document.querySelector("#btnCoffeeShop").classList.add("cardSelected")
            document.querySelector("#btnFireplace").classList.remove("cardSelected")
            break;
        case "fireplace":
            document.querySelector("#btnForest").classList.remove("cardSelected")
            document.querySelector("#btnRain").classList.remove("cardSelected")
            document.querySelector("#btnCoffeeShop").classList.remove("cardSelected")
            document.querySelector("#btnFireplace").classList.add("cardSelected")
            break;
        default:
            document.querySelector("#btnForest").classList.remove("cardSelected")
            document.querySelector("#btnRain").classList.remove("cardSelected")
            document.querySelector("#btnCoffeeShop").classList.remove("cardSelected")
            document.querySelector("#btnFireplace").classList.remove("cardSelected")
            break;
    }
}

export function Cards({
    stopSounds,
    playSoundForest,
    playSoundRain,
    playSoundCoffeeShop,
    playSoundFireplace
}) {
    function buttonForest() {
        if(isSelected === "forest") {
            isSelected = ""
            stopSounds()
            changeCard()
            return
        }
        isSelected = "forest"
        changeCard()
        playSoundForest()
    }

    function buttonRain() {
        if(isSelected === "rain") {
            isSelected = ""
            stopSounds()
            changeCard()
            return
        }
        isSelected = "rain"
        changeCard()
        playSoundRain()
    }

    function buttonCoffeeShop() {
        if(isSelected === "coffeeshop") {
            isSelected = ""
            stopSounds()
            changeCard()
            return
        }
        isSelected = "coffeeshop"
        changeCard()
        playSoundCoffeeShop()
    }

    function buttonFireplace() {
        if(isSelected === "fireplace") {
            isSelected = ""
            stopSounds()
            changeCard()
            return
        }
        isSelected = "fireplace"
        changeCard()
        playSoundFireplace()
    }

    return {
        buttonForest,
        buttonRain,
        buttonCoffeeShop,
        buttonFireplace
    }
}