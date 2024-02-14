const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
playedKeys = [],
currentVolume = 0.5;


const playTune = (key) => {

    let audio = new Audio(`notes/${key}.mp3`); 
    audio.volume = currentVolume;
    audio.play(); 
    playedKeys.push(key);
    

    var sliced = playedKeys.slice(playedKeys.length - 6, playedKeys.length),
    comb = ['t', 't', 'y', 't', 'i', 'u'],
    dre = ['i', 'p', 'c'];

    if (sliced.toString() === comb.toString()) {
        play();
    } else if (playedKeys.slice(playedKeys.length - 3, playedKeys.length).toString() === dre.toString()) {
        playDre();
    }

    const clickedKey = document.querySelector(`[data-key="${key}"]`); 
    clickedKey.classList.add("active");

   
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 100);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); 

   
    key.addEventListener("click", () => playTune(key.dataset.key));
});

function delayDispatchKeyboardEvent(key, delay) {
    setTimeout(function() {
        document.dispatchEvent(new KeyboardEvent("keydown", {
            key: key
        }));
        playedKeys = [];
    }, delay);
}

const pressedKey = (e) => {
    
    if (allKeys.includes(e.key)) playTune(e.key);
}

const handleVolume = (e) => {
    
    currentVolume = e.target.value; 
}

const showHideKeys = () => {

    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const play = () => {
    delayDispatchKeyboardEvent("t", 300);
    delayDispatchKeyboardEvent("t", 600);
    delayDispatchKeyboardEvent("y", 1000);
    delayDispatchKeyboardEvent("t", 1500);
    delayDispatchKeyboardEvent("o", 2000);
    delayDispatchKeyboardEvent("i", 2500);
    delayDispatchKeyboardEvent("t", 3000);
    delayDispatchKeyboardEvent("t", 3300);
    delayDispatchKeyboardEvent("x", 3700);
    delayDispatchKeyboardEvent("p", 4200);
    delayDispatchKeyboardEvent("i", 4600);
    delayDispatchKeyboardEvent("u", 5000);
    delayDispatchKeyboardEvent("y", 5450);
    delayDispatchKeyboardEvent("z", 6000);
    delayDispatchKeyboardEvent("z", 6300);
    delayDispatchKeyboardEvent("p", 6800);
    delayDispatchKeyboardEvent("i", 7400);
    delayDispatchKeyboardEvent("o", 7900);
    delayDispatchKeyboardEvent("i", 8500);
}


const playDre = () => {
    let time = 600;

    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < 8; i++) {
            delayDispatchKeyboardEvent("i", time);
            delayDispatchKeyboardEvent("p", time);
            delayDispatchKeyboardEvent("c", time);
            time += 300;
        }

        for (let i = 0; i < 3; i++) {
            delayDispatchKeyboardEvent("u", time);
            delayDispatchKeyboardEvent("p", time);
            delayDispatchKeyboardEvent("c", time);
            time += 300;
        }
        
        for (let i = 0; i < 5; i++) {
            delayDispatchKeyboardEvent("u", time);
            delayDispatchKeyboardEvent("p", time);
            delayDispatchKeyboardEvent("x", time);
            time += 300;
        }
    }
}


document.addEventListener("keydown", pressedKey);
volumeSlider.addEventListener("input", handleVolume);
keysCheckbox.addEventListener("click", showHideKeys);


