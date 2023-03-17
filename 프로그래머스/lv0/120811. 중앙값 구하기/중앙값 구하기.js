function solution(array) {
    let item = Math.floor(array.length/2);
    array.sort((a,b)=>a-b);
    return array[item];   
}

