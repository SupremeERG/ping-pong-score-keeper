const p1adder = $("#p1adder");
const p2adder = $("#p2adder");
const reset = $("#reset");
let winningScoreSelect = $("#playto");
const score = {
    p1: 0,
    p2: 0,
    winningScore: parseInt(winningScoreSelect.val()),
    isGameOver: false,
};



winningScoreSelect.on("change", function () {
    score.winningScore = parseInt(this.value);
    resetGame();
})
reset.on("click", resetGame);


p1adder.on("click", () => {
    if (!score.isGameOver) {

        score.p1 += 1;
        if (score.p1 === score.winningScore) {
            score.isGameOver = true;
            $("#p1score").addClass('winning');
            $("#p2score").addClass('losing');
        }
        $("#p1score").text(score.p1);

    }
})

p2adder.on("click", () => {
    if (!score.isGameOver) {

        score.p2 += 1;
        if (score.p2 === score.winningScore) {
            score.isGameOver = true;
            $("#p2score").addClass('winning');
            $("#p1score").addClass('losing');
        }
        $("#p2score").text(score.p2);

    }
})



function resetGame() {
    score.p1 = 0;
    score.p2 = 0;
    score.isGameOver = false;
    $("#p1score").text(score.p1);
    $("#p2score").text(score.p2);
    $("#p1score").removeClass(['winning', 'losing']);
    $("#p2score").removeClass(['winning', 'losing']);

};