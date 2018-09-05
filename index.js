function generateBoard(size) {
  let angkaTerbesar = size * size
  let result = [];
  for (var i = 0; i < size; i++) {
    result.push([])
  }

  for (let i = 0; i < size; i++) {
    if (i % 2 === 0 && size % 2 === 0 || i % 2 !== 0 && size % 2 !== 0) {
      for (let j = 0; j < size; j++) {
        result[i].push(angkaTerbesar);
        angkaTerbesar--;
      }
    } else {
      for (let k = (angkaTerbesar - size); k < angkaTerbesar; k++) {
        result[i].push(k+1);
      }
      angkaTerbesar -= size
    }
  }
  return result
}
console.log(generateBoard(10));
