function solution(numer1, denom1, numer2, denom2) {
    
    const numer = numer1 * denom2 + numer2 * denom1;
    const denom = denom1 * denom2;
    let minNum;
    
    if(numer > denom) {
        minNum = denom
    }else {
        minNum = numer
    }
    
    for(let i = minNum; i >= 1; i--) {
        if(numer % minNum === 0 && denom % minNum === 0) {
            return [Math.floor(numer/minNum), Math.floor(denom/minNum)];
        }else {
            minNum --;
        }
    }
}