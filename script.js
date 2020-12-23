window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "aliceblue",
        "pink",
        "salmon",
        "mediumaquamarine",
        "lightgoldenrodyellow",
        "lavender"
    ]

    //click for sounds
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });


    //keypad

      function keypad(e) {
        if (e.keyCode === 49) {
          sounds[0].currentTime = 0;
          sounds[0].play();
        } else if (e.keyCode === 50) {
            sounds[1].currentTime = 0;
            sounds[1].play();
        } else if (e.keyCode === 51) {
            sounds[2].currentTime = 0;
            sounds[2].play();
        } else if (e.keyCode === 52) {
            sounds[3].currentTime = 0;
            sounds[3].play();
        } else if (e.keyCode === 53) {
            sounds[4].currentTime = 0;
            sounds[4].play();
        } else if (e.keyCode === 54) {
            sounds[5].currentTime = 0;
            sounds[5].play();
        }
      };

    document.addEventListener('keyup', keypad);


    //function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationend", function(){
            visual.removeChild(this);
        });
    };
});

