// function arrayShift(arr, k){
//     let arr2 = new Array();
//     Object.assign(arr2, arr);
//     for (let i = 0; i < arr.length; i++){
//         arr[(i + arr.length - (k % arr.length)) % arr.length] = arr2[i];

//     }
//     return arr;
// }

function arrayShift(arr, k){
    let arr2 = [];
    for (let i = 0; i < arr.length; i++){
        //arr[(i + arr.length - (k % arr.length)) % arr.length] = arr2[i];
        arr2.push(arr[(i + k) % arr.length]);
    }
    return arr2;
}


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13 ,14, 15];
let k = 2;
console.log(arrayShift(arr, k));