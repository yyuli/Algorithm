function solution(n) {
    let answer = 0;
    
    for (let i = n; i >= 1; i--) {
        let isCount = false;
        for (let j = 2; j <= i-1; j++) {
            if (i % j === 0) {
                isCount = true;
            }
        }
        
        if (isCount) {
            answer += 1;
        }
        
    }
    
    return answer;
}