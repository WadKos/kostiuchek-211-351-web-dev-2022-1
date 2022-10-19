function task3(matrix){
    let tempResult = [];
    for (let i = 0; i<matrix.length; i++){
        tempResult.push(Math.min.apply(Math,matrix[i]));
    }
    return Math.max.apply(Math,tempResult);
}
let matr=[
    [3,1,6],
    [1,5,3],
    [7,12,2],
    [2,5,8],
    [12,543,12],
]
console.log(task3(matr));