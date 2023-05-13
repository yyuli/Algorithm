function solution(n, m) {
    var answer = [];
    
    if(n < m) {
        for (let i = n; i>=1; i--) {
            if(n % i === 0 && m % i === 0) {
                answer.push(i);
                break;
            }
        }
    }else {
        for (let i = m; i>=1; i--) {
            if(n % i === 0 && m % i === 0) {
                answer.push(i);
                break;
            }
        }
    }
    answer.push(answer [0] * Math.floor(n / answer[0]) * Math.floor(m / answer[0])); 
    
    return answer;
}