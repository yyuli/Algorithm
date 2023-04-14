function solution(n) {
    
    let answer = [];
    let i = 2;
    
    while (n>=i) {
        if (n % i === 0) {
            if(!answer.includes(i)) {
                answer.push(i);
            }
            n = Math.floor(n/i);
        }else {
            i++;
        }
    }
    return answer;
}