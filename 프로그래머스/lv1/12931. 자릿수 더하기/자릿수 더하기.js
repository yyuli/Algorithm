function solution(n) {
    const str = n.toString();
    let answer = 0;
    
    for (const i of str) {
        answer += parseInt(i);
    }

    return answer;
}