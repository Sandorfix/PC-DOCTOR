// ----------Extra Features JS-----------

// Back Up Button

const at_Px = 50
const backToTop = document.querySelector(".back-to-top")

const scrollCtn = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
    if (scrollCtn().scrollTop > at_Px) {
    backToTop.classList.remove("hidden")
    } else {
    backToTop.classList.add("hidden")
}
})

const up = () => {
    document.body.scrollIntoView();
};

backToTop.addEventListener("click", up)

// Audio onload 

const audio = document.getElementById("audio");

function playAudio() {
    audio.play();
}
