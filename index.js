function board(size) {
    let angkaTerbesar = size * size;
    let result = [];
    let column = [];
    for (let i = 1; i <= angkaTerbesar; i++) {
        if (column.length < size) {
            column.push(i);
        }
        else {
            result.push(column);
            column = [i];
        }
    }
    result.push(column);
    //return result;//.reverse();
    let AX = [];
    let columnReverse = [];
    for (let i = result.length - 1; i >= 0; i--) {
        for (let j = result[i].length - 1; j >= 0; j--) {
            columnReverse.push(result[i][j]);
        }
    }
    // balikdari 64,63,62 ... ke bentuk array
    let buffer = [];
    for (let i = 0, k = -1; i < columnReverse.length; i++) {
        if (i % size ===0) {
            k++;
            buffer[k] = [];
        }
        buffer[k].push(columnReverse[i]);
    }
    return buffer;
}
console.log(board(8));