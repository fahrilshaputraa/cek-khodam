let scoreA = 0;
let scoreB = 0;

document.addEventListener("DOMContentLoaded", function() {
    const scoreAElement = document.getElementById('scoreA');
    const scoreBElement = document.getElementById('scoreB');
    const marker = document.getElementById('marker');

    const socket = io("https://livetiktok.dev-sti-group.biz.id");

    socket.on('connect', function() {
        console.log("Connected to WebSocket server");
    });

    socket.on('new_comment', function(data) {
        handleComment(data.comment);
    });

    function handleComment(comment) {
        console.log(comment); // Log the comment being handled
        if (comment === 'A') {
            scoreA++;
            scoreAElement.textContent = scoreA;
        } else if (comment === 'B') {
            scoreB++;
            scoreBElement.textContent = scoreB;
        }
        updateRopePosition();
    }

    function updateRopePosition() {
        const totalScore = scoreA + scoreB;
        const percentageA = totalScore ? (scoreA / totalScore) * 100 : 50; // Avoid division by zero
        const markerPosition = 50 - (percentageA - 50);
        marker.style.left = `${markerPosition}%`;
    }
});
