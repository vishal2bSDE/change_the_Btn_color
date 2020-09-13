var all_btns = document.getElementsByTagName("button");
console.log(all_btns);
var copyAllBtns = [];
for (let i = 0; i < all_btns.length; i++) {
    copyAllBtns.push(all_btns[i].classList[1]);
}
console.log(copyAllBtns[0].className);
function buttonColorChange(btn) {
    console.log(btn.value);
    if (btn.value === "red")
        btnRed();
    else if (btn.value === "green")
        btnGreen();
    else if (btn.value === "reset")
        btnReset();
    else
        btnRandom();
}
function btnRed(){
    for(let i=0;i<all_btns.length;i++){
        all_btns[i].classList.remove(all_btns[i].classList[1]);
        all_btns[i].classList.add("btn-danger");
    }
}
function btnGreen(){
    for(let i=0;i<all_btns.length;i++){
        all_btns[i].classList.remove(all_btns[i].classList[1]);
        all_btns[i].classList.add("btn-success");
    }
}
function btnReset(){
    for(let i=0;i<all_btns.length;i++){
        all_btns[i].classList.remove(all_btns[i].classList[1]);
        all_btns[i].classList.add(copyAllBtns[i]);
    }
}
function btnRandom(){
    var choices =  ["btn-info","btn-secondary","btn-warning","btn-success","btn-danger","btn-primary"];
    var random=Math.floor(Math.random()* choices.length);
    for(let i=0;i<all_btns.length;i++){
        all_btns[i].classList.remove(all_btns[i].classList[1]);
        all_btns[i].classList.add(choices[Math.floor(Math.random()* choices.length)]);
    }
}