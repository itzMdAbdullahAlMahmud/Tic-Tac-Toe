let resetButton = document.querySelector("#reset-button-id");
let newGame = document.querySelector("#new-game");
let boxs = document.querySelectorAll(".box");
let turn = true;
let msg = document.querySelector("#msg");

let winState = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6]
];

newGame.addEventListener("click", () => {
    for (box of boxs) {
        box.innerText = "";
        box.disabled = false;
        msg.classList.add("hidden");
        box.classList.remove("Ored", "Xblue");
    }
})
resetButton.addEventListener("click", () => {
    for (box of boxs) {
        box.innerText = "";
        box.disabled = false;
        msg.classList.add("hidden");
        box.classList.remove("Ored", "Xblue");
    }
})
boxs.forEach(
    (box) => {
        box.addEventListener("click", () => {
            if (turn === true) {
                box.classList.add("Ored");
                box.innerText = "O";
                turn = false;
                box.disabled = true;
            }
            else {
                box.classList.add("Xblue");
                box.innerText = "X";
                turn = true;
                box.disabled = true;
            }
            checkWinState();
        })
    }
)

function checkWinState() {

    for (pattern of winState) {
        let pos1val = boxs[pattern[0]].innerText;
        let pos2val = boxs[pattern[1]].innerText;
        let pos3val = boxs[pattern[2]].innerText;
        if (pos1val !== '' && pos2val !== '' && pos3val !== '') {
            if (pos1val === pos2val && pos2val === pos3val) {
                msg.innerText = `Winner is ${pos1val}`;
                msg.classList.remove("hidden");
                for (box of boxs) {
                    box.disabled = true;
                }
            }
            else {
                msg.innerText = `Match is Draw`;
            }
        }
        
    }
}