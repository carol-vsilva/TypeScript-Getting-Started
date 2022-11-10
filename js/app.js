function startGame() {
    var playerName = 'Carol';
    logPlayer(playerName);
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MultiMath! Starting new game...';
}
function logPlayer(name) {
    console.log("New game starting for player: ".concat(name));
}
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map