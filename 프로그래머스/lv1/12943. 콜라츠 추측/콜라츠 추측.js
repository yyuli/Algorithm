function solution(num) {    
    if(num === 1) {
        return 0;
    }
    
    let arr = [];
    while (num > 1) {
        if(num % 2 === 0) {
            num = num / 2;
            arr.push(num);
        }else {
            num = num * 3 + 1;
            arr.push(num);
        }
    }
    
    if(arr.length >= 500) {
        return -1
    }else {
        return arr.length;
    }
}