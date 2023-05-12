function solution(x, n) {
    let answer = [];
    
    
    for (let i = x; ; i+=x) {
        answer.push(i);
        if(answer.length === n) break;
    }
    
    return answer;
}