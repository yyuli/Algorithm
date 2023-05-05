function solution(a, b) {
    let num = 0;
    let denom = 0;
    
    if(a === b) {
        return 1;
    }
    
    const min = (a > b) ? b : a;
    
    for (let i = min; i>0; i--) {
        if(a % i === 0 && b % i === 0) {
            num = Math.floor(a / i);
            denom = Math.floor(b / i);
            break;
        }
    }
    
    let arr = [];
    
    let i = 2;
    
    while (denom>=i) {
        if (denom % i === 0) {
            if(!arr.includes(i)) {
                arr.push(i);
            }
            denom = Math.floor(denom/i);
        }else {
            i++;
        }
    }
    
    const hasOtherNumbers = arr.some(num => num !== 2 && num !== 5);
    
    if(hasOtherNumbers) {
        return 2;
    }else {
        return 1;
    }
}