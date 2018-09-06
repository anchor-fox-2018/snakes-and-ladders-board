
function generateBoard(){
    let size = 10;
    let max = size*size;

    let board = [];
    for(let i = 0; i < size; i++){
        let col = []
        if(i%2 == 1){
            let odd = 9;;
            for(let j = 0; j < size/2; j++){
                col.push(max-odd);
                odd -= 2;
                max--;
            }
            odd += 2
            // console.log(odd);
            for(let j = size/2; j < size; j++){
                col.push(max+odd);
                odd += 2;
                max--
            }
        } else {
            for(let j = 0; j < size; j++){
                col.push(max);
                max--;
            }
        }
        board.push(col);
    }
    return board;
}

console.log(generateBoard());
// console.log(0%2);