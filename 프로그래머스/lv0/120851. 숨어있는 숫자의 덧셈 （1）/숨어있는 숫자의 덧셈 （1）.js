function solution(my_string) {
    var answer = 0;
    
    for (let i of my_string) {
        if(i.charCodeAt() >= 48 && i.charCodeAt() <= 57) {
            answer += parseInt(i);
        }
    }
    
    return answer;
}