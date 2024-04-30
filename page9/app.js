let name = prompt("Ismingizni kiriting");
let result = name[name.length -1];

if(result === result.toUpperCase()) {
     console.log(result.toLowerCase())
}
else if(result === result.toLowerCase()) {
     console.log(result.toUpperCase())
}
else {
     console.log("Xato")
}