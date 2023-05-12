function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i<absolutes.length; i++) {
        const item = absolutes[i];
        const sign = signs[i];
        if(sign === true) {
            answer += item;
        }else {
            answer -= item;
        }
    }
    return answer;
}