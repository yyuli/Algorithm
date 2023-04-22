function solution(n) {
    let answer = 0;
    
    let str = String(n);
    
    for (let i of str) {
        answer += parseInt(i);
    }
    
    return answer;
}