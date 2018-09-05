function generateBoard (input) {
    let result = []
    for (let i = 0; i < input; i++) {
        let tempResult = [];
        for (let c = 0; c < input; c++) {
            if (i % 2 === 0) {
                tempResult.push((c+1)+(i*input));
            }
            else {
                tempResult.push((c+1)+(i*input));
            }
        }
        if (i % 2 === 1) {
            tempResult.reverse();
        }
        result.push(tempResult);
    }
    return result;
}

console.log(generateBoard(15));
console.log(generateBoard (8));