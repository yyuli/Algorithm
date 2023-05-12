function solution(x) {
    let num = 0;
    
    for (let i = 0; i<x.toString().length; i++) {
        const item = x.toString()[i];
        num += parseInt(item);
    }
    
    return x % num === 0 ? true : false
}