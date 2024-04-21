document.getElementById("submit").addEventListener("click", function() {
    var userInput = document.getElementById("input").value;
    var result = calculateResult(userInput);
    if (result === 7 || userInput.length === 7) {
        document.getElementById("congrats").classList.remove("hidden");
        document.getElementById("die").classList.add("hidden");
        document.getElementById("form").style.backgroundColor='rgba(0,0,0,0)';
        showVideos();
        playAudio();
    } else {
        document.getElementById("congrats").classList.add("hidden");
        document.getElementById("die").classList.remove("hidden");
        document.getElementById("form").style.backgroundColor='rgb(21,128,61)';
        hideVideos();
        pauseAudio();
    }
});

function calculateResult(input) {
    var sum = 0;
    for (var i = 0; i < input.length; i++) {
        if (!isNaN(parseInt(input[i]))) {
            sum += parseInt(input[i]);
        }
    }
    return sum;
}

function showVideos() {
    var videos = document.querySelectorAll("video");
    videos.forEach(function(video) {
        video.classList.remove("hidden");
    });
}

function hideVideos() {
    var videos = document.querySelectorAll("video");
    videos.forEach(function(video) {
        video.classList.add("hidden");
    });
}

function playAudio() {
    var audio = document.getElementById("audio");
    audio.play(); 
}

function pauseAudio() {
    var audio = document.getElementById("audio");
    audio.pause(); 
}