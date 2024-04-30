let a = +prompt("Listening kiriting");
let b = +prompt("Reading kiriting");
let c = +prompt("Speaking kiriting");
let d = +prompt("Writing kiriting");

let result = (a + b + c + d) / 4;

if(result === 5) {
     document.write("average " + result);
}
else if(result === 6) {
     document.write("Good " + result);
}
else if(result === 7) {
     document.write("Very Good " + result);
}
else if(result === 8) {
     document.write("Excellent " + result);
}
else if(result === 9) {
     document.write("very Excellent " + result);
}
else {
     document.write("Yaxshiroq shug'ullaning " + result);
}