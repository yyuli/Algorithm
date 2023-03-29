function solution(age) {
    let answer = '';
    let numStr = age.toString();
    
    for (let i = 0; i<numStr.length; i++) {
        let item = numStr[i];
        let temp = item.charCodeAt() + 49;
        answer += String.fromCharCode(temp);
    }
    
    return answer;
}