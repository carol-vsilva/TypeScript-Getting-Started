"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreBoard = void 0;
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
exports.ScoreBoard = ScoreBoard;
//# sourceMappingURL=scoreboard.js.map