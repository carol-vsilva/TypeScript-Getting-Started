var Player = (function () {
    function Player() {
    }
    Player.prototype.formateName = function () {
        return this.name.toUpperCase();
    };
    return Player;
}());
var Utility = (function () {
    function Utility() {
    }
    Utility.getInputValue = function (elementID) {
        var inputElement = document.getElementById(elementID);
        return inputElement.value;
    };
    return Utility;
}());
var ScoreBoard = (function () {
    function ScoreBoard() {
        this.results = [];
    }
    ScoreBoard.prototype.addResult = function (newResult) {
        this.results.push(newResult);
    };
    ScoreBoard.prototype.updateScoreBoard = function () {
        var output = '<h2>Scoreboard</h2>';
        for (var i = 0; i < this.results.length; i++) {
            var result = this.results[i];
            output += "<h4>".concat(result.playerName, ": ").concat(result.score, "/").concat(result.problemCount, " for factor ").concat(result.factor, "</h4>");
        }
        var scoresElement = document.getElementById('scores');
        scoresElement.innerHTML = output;
    };
    return ScoreBoard;
}());
var Game = (function () {
    function Game(player, problemCount, factor) {
        this.player = player;
        this.problemCount = problemCount;
        this.factor = factor;
        this.scoreboard = new ScoreBoard();
    }
    Game.prototype.displayGame = function () {
        var gameForm = '';
        for (var i = 1; i <= this.problemCount; i++) {
            gameForm += "<div class=\"form-group\"><label for=\"answer".concat(i, "\" class=\"col-sm-2 control-label\"> ").concat(String(this.factor), " x ").concat(i, " = </label> <div class=\"col-sm-1\"><input type=\"text\" class=\"form-control\" id=\"answer").concat(i, "\" size=\"5\" /></div></div>'");
        }
        var gameElement = document.getElementById('game');
        gameElement.innerHTML = gameForm;
        document.getElementById('calculate').removeAttribute('disabled');
    };
    Game.prototype.calculateScore = function () {
        var score = 0;
        for (var i = 1; i <= this.problemCount; i++) {
            var answer = Number(Utility.getInputValue('answer' + i));
            if (i * this.factor === answer) {
                score++;
            }
        }
        var result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };
        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreBoard();
        document.getElementById('calculate').setAttribute('disabled', 'true');
    };
    return Game;
}());
var newGame;
document.getElementById('startGame').addEventListener('click', function () {
    var player = new Player();
    player.name = Utility.getInputValue('playername');
    var problemCount = Number(Utility.getInputValue('problemCount'));
    var factor = Number(Utility.getInputValue('factor'));
    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});
document.getElementById('calculate').addEventListener('click', function () {
    newGame.calculateScore();
});
//# sourceMappingURL=app.js.map