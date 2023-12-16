const array = Number = [1, 2, 3, 34, 10, 90, 100,]
const jup = Number = []
const taq = Number = []

for (var i = 0; i <= array.length; i++) {
    
    if (array[i] % 2 == 1) {
        taq.push(array[i])
    } 

    else if (array[i] % 2 == 0) {
        jup.push(array[i])
    }
}

console.log(`Massiv 2n:  ${jup}`)
console.log(`Massiv 2n+!:   ${taq}`)

