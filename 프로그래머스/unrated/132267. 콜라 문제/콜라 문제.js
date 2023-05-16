function solution(a, b, n) {
    let coke = n;
    let service = 0;
    let temp = 0;
    
    while(Math.floor(coke / a) > 0) {
        temp = Math.floor(coke / a) * b + (coke % a);
        service += Math.floor(coke / a) * b;
        console.log(temp);
        coke = temp;
    }
    
    return service;
}