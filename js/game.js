"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var utility_1 = require("./utility");
var scoreboard_1 = require("./scoreboard");
var Game = (function () {
    function Game(player, problemCount, factor) {
        this.player = player;
        this.problemCount = problemCount;
        this.factor = factor;
        this.scoreboard = new scoreboard_1.ScoreBoard();
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
            var answer = Number((0, utility_1.getValue)('answer' + i));
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
exports.Game = Game;
//# sourceMappingURL=game.js.map