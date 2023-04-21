function solution(num, k) {
    let answer = 0;
    let cnt = 0;
    const str = String(num);
    
    for (let i = 0; i<str.length; i++) {
        const item = parseInt(str[i]);
        if(item === k) {
            answer = i+1;
            break;
        }else {
            answer = -1;
        }
    }
    
    return answer;
}