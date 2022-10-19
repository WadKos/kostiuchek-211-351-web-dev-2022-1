let vec1={
    x:5,
    y:30,
    z:20,
}
let vec2={
    x:50,
    y:15,
    z:10,
}
function sum(vec1, vec2){
    let result = {
        x:vec1.x+vec2.x,
        y:vec1.y+vec2.y,
        z:vec1.z+vec2.z,
    };
    return result;
}
function multy(vec1, vec2){
    let result = {
        x:vec1.x*vec2.x,
        y:vec1.y*vec2.y,
        z:vec1.z*vec2.z,
    };
    return result;
}
function diff(vec1, vec2){
    let result = {
        x:vec1.x-vec2.x,
        y:vec1.y-vec2.y,
        z:vec1.z-vec2.z,
    };
    return result;
}
function multyK(vec1, k){
    let result = {
        x:vec1.x*k,
        y:vec1.y*k,
        z:vec1.z*k,
    };
    return result;
}
function length(vector){
    return((vector.x**2+vector.y**2+vector.z**2)**0.5)
}
function scalar(vec1, vec2){
    return(vec1.x*vec2.x+vec1.y*vec2.y+vec1.z*vec2.z);
}
console.log(length(vec1).toFixed(2));
console.log(sum(vec1, vec2));
console.log(multy(vec1, vec2));
console.log(diff(vec1, vec2));
console.log(multyK(vec1, 10));
console.log(scalar(vec1, vec2));