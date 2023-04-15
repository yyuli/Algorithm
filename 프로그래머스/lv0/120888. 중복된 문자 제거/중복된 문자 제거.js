function solution(my_string) {
    var answer = my_string[0];
    
    for (let i of my_string) {
        if(!answer.includes(i)) {
            answer += i;
        }
    }
    
    return answer;
}