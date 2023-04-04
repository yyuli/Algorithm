function solution(balls, share) {
    
    let num = 1;
    let denom = 1;
    
    for (let i = balls; i>=balls-share+1; i--) {
        num *= i;
        console.log(num);
    }
    
    for (let i = share; i>=1; i--) {
        denom *= i;
        console.log(denom);
    }
    
    return Math.floor(num / denom);
}