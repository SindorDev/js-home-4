let info = +prompt("Son kiriting va Winner bo'ling");
let random = Math.floor(Math.random() * 10);

if (info == random) {
     document.write("Winner");
}
else {
     document.write("Try Again " + random);
}