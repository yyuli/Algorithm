function solution(n) {
    let arr = new Array(n);
    
    for (let i = 0; i<arr.length; i++) {
        if(i % 2 === 0) {
            arr[i] = "수";
        }else {
            arr[i] = "박";
        }
    }
    
    return arr.join('');
}