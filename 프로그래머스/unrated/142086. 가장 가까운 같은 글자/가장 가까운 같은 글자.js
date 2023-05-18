function solution(s) {
    let answer = [];
    let alphabet = [];
    
    for (let i = 0; i<s.length; i++) {
        const item = s[i];
        if(!alphabet.includes(item)) {
            alphabet.push(item);
            answer.push(-1);
        }else {
            answer.push(i - alphabet.lastIndexOf(item));
            alphabet.push(item);
        }
    }

    return answer;
}