function solution(phone_number) {
    let answer = '';
    
    for (let i = 0; i<phone_number.length; i++) {
        if(i >= phone_number.length - 4 && i <= phone_number.length -1) {
            answer += phone_number[i];
        }else {
            answer += "*"
        }
    }
    
    return answer;
}