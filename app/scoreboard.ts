/// <reference path="result.ts" />

class ScoreBoard {

    private results: Result [] = [];

    addResult(newResult: Result): void {
        this.results.push(newResult);
    }

    updateScoreBoard(): void {
        let output: string = '<h2>Scoreboard</h2>';

        for (let i = 0; i < this.results.length; i++) {
            const result: Result = this.results[i];
            output += `<h4>${result.playerName}: ${result.score}/${result.problemCount} for factor ${result.factor}</h4>`
        }

        const scoresElement: HTMLElement = document.getElementById('scores')!;
        scoresElement.innerHTML = output;
    }
}
