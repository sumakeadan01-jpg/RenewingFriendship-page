function answer() {
    showOverlay("CONGRATS YOU HAVE RENEWED OUR FRIENDSHIP", false);
}

function answerElse() {
    showOverlay("HAHAHHAHAHAAH!! YOU RENEWED IT ANYWAY, SUCKAAAAAAAAAA", true);
}

function showOverlay(message, showCat) {
    const overlay = document.getElementById("messageOverlay");
    const messageText = document.getElementById("overlayMessageText");
    const catImg = document.getElementById("catMeme");
    const fireworksContainer = document.getElementById("fireworksContainer");

    // Set text and show overlay
    messageText.textContent = message;
    overlay.classList.remove("hidden");

    // Show/hide cat image
    if(showCat){
        catImg.src = "MEMECAT.png";
        catImg.style.display = "block";
    } else {
        catImg.style.display = "none";
    }

    // Clear old fireworks
    fireworksContainer.innerHTML = "";

    // Launch fireworks
    for(let i=0; i<20; i++){
        createFirework(fireworksContainer);
    }
}

// Firework function
function createFirework(container){
    const fw = document.createElement("div");
    fw.className = "firework";

    const x = (Math.random() - 0.5) * 200 + "px";
    const y = (Math.random() - 0.5) * 200 + "px";
    fw.style.setProperty("--x", x);
    fw.style.setProperty("--y", y);

    fw.style.background = `hsl(${Math.random()*360}, 100%, 50%)`;

    container.appendChild(fw);

    setTimeout(() => fw.remove(), 800);
}
