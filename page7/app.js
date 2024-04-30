let gap = prompt("Matnni kiriting: ");

let sozlar = 1; 

for (let i = 0; i < gap.length; i++) {
    if (gap[i] === ' ' && gap[i + 1] !== ' ') {
        sozlar++;
    }
}

document.write(sozlar);