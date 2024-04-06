// Home score

let homeScoreEl = document.getElementById("home-score");
let homeScore = 0;

let homePlus1Btn = document.getElementById("home-plus1-btn");
function incrementHomeScore1(){;
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
    updateGameStatus();
}

let homePlus2Btn = document.getElementById("home-plus2-btn");
function incrementHomeScore2(){
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
    updateGameStatus();
}

let homePlus3Btn = document.getElementById("home-plus3-btn");
function incrementHomeScore3(){
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
    updateGameStatus();
}

// Guest score

let guestScoreEl = document.getElementById("guest-score");
let guestScore = 0;

let guestPlus1Btn = document.getElementById("guest-plus1-btn");
function incrementGuestScore1(){
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
    updateGameStatus();
}

let guestPlus2Btn = document.getElementById("guest-plus2-btn");
function incrementGuestScore2(){
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
    updateGameStatus();
}

let guestPlus3Btn = document.getElementById("guest-plus3-btn");
function incrementGuestScore3(){
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
    updateGameStatus();
}

  // Reset scores

function resetCounters() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.innerHTML = homeScore;
    guestScoreEl.innerHTML = guestScore;
    updateGameStatus();
    document.getElementById("home-title").className = "";
    document.getElementById("guest-title").className = "";
}

// Update game status

function updateGameStatus() {
    let homeId = document.getElementById("home-title");
    let guestId = document.getElementById("guest-title");

    homeId.classList.remove("win", "lose", "draw");
    guestId.classList.remove("win", "lose", "draw");

    if (homeScore > guestScore) {
        homeId.classList.add("win");
        guestId.classList.add("lose");
    } else if (homeScore < guestScore) {
        homeId.classList.add("lose");
        guestId.classList.add("win");
    } else {
        homeId.classList.add("draw");
        guestId.classList.add("draw");
    }
}