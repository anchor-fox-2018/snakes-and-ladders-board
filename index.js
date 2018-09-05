function generateBoard(angka){
    let isiArray = angka*angka;
    let hasil = [];
    let untukI = 0;
    let untukPanjang = 0;
    if(angka%2== 0){
        untukI = 0;
        untukPanjang = angka
    }else{
        untukI = 1;
        untukPanjang = angka+1
    }
    for(let i = untukI;i < untukPanjang;i++){
        let isi = [];
        if(i % 2 !== 0){
            let genap = isiArray-angka
            //console.log('==',genap)
            //isiArray-angka
            for(let j = 0;j < angka;j++){
                isi.push(genap+1);
                genap++;
                isiArray--
            }
        }else{
            
            for(let k = 0;k < angka;k++){
                isi.push(isiArray);
                isiArray--
            }
        }
        hasil.push(isi);
    }
    return hasil
}
console.log(generateBoard(15))