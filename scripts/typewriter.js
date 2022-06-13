let allAdjectives = document.querySelectorAll(".adjective");
let currentAdjective = allAdjectives[0];
currentAdjective.style.display = "block";
currentAdjective.classList.add("active");
let nextAdjectiveIndex = 1;

const interval = setInterval(() => {
    allAdjectives.forEach(adjective => {
        if (adjective.style.display === "block") adjective.style.display = "none";
        if (adjective.classList.value.indexOf('active') > -1) adjective.classList.remove("active");
    })
    var r = document.querySelector(':root');
    currentAdjective = allAdjectives[nextAdjectiveIndex];
    let currentAdjectiveText = currentAdjective.innerText;
    r.style.setProperty('--steps', Array.from(currentAdjectiveText).length);
    currentAdjective.style.display = "block";
    currentAdjective.classList.add("active");
    if (nextAdjectiveIndex < (allAdjectives.length - 1)) {
        nextAdjectiveIndex = nextAdjectiveIndex + 1;
    } else {
        currentAdjective = allAdjectives[nextAdjectiveIndex];
        nextAdjectiveIndex = 0;
    }
}, 3200)