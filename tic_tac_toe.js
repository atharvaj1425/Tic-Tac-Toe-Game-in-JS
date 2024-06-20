const para = document.querySelector("#p");
const btn = document.querySelector("#btn");
const box = document.querySelectorAll(".col");
const cross_score = document.querySelector("#cross-score");
const circle_score = document.querySelector("#circle-score");
let setLock = true;
let currentPlayer = "X";
let crossScore = 0;
let circleScore = 0;
let array = Array(9).fill(null);

function checkWinner() {
    if(
        (array[0] !== null && array[0] === array[1] && array[1] === array[2]) ||
        (array[3] !== null && array[3] === array[4] && array[4] === array[5]) ||
        (array[6] !== null && array[6] === array[7] && array[7] === array[8]) ||
        (array[0] !== null && array[0] === array[3] && array[3] === array[6]) ||
        (array[1] !== null && array[1] === array[4] && array[4] === array[7]) ||
        (array[2] !== null && array[2] === array[5] && array[5] === array[8]) ||
        (array[0] !== null && array[0] === array[4] && array[4] === array[8]) ||
        (array[2] !== null && array[2] === array[4] && array[4] === array[6]) 
    ){
        console.log(array);
        para.innerHTML = `Congratulations winner is <img src="${currentPlayer === 'X' ? 'cross.png'  : 'circle.png'}" alt="${currentPlayer}" style="width: 2rem; margin-left: 12px"> !`;
        setLock = false;
        return;
    }
    if(!array.some(e => e === null)){
        para.innerText = `Its a Draw!!`;
        setLock = false;
        return;
    }
}
function handleClick (e){
    if(!setLock) return;
    const id = Number(e.id);
    if (array[id] !== null) return;
    array[id] = currentPlayer;
    e.innerHTML = `<img src="${currentPlayer === 'X' ? 'cross.png' : 'circle.png'}" alt="${currentPlayer}" style="width: 2rem;">`;
    //e.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}
// if(setLock === "true"){
//      handleClick (e);
// }
// setLock is a boolean, not a string. It should be checked as true or false, not "true".
// You are trying to call handleClick immediately after defining it, which doesn't make sense in this context. handleClick should be called in response to user interactions (i.e., clicks on the game board).
btn.addEventListener("click", (evt) => {
    setLock = true;
    array = Array(9).fill(null);
    console.log(array);
    box.forEach(cell => {
        cell.innerHTML = "";  // Clear the content of each cell
    });
    //box.innerHTML = ""; Type Mismatch: box is a NodeList, not a single element. Directly setting innerHTML on a NodeList (box) would not work because innerHTML is a property of individual elements, not NodeLists.
    currentPlayer = "X";
    para.innerHTML = "Tic-Tac-Toe Game in <span>JS</span>"
})
