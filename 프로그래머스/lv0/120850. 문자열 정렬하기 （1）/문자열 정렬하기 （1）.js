function solution(my_string) {
    var answer = [];
    
    for (let i of my_string) {
        if(i.charCodeAt() >= 48 && i.charCodeAt() <= 57) {
            answer.push(parseInt(i));
        }
    }
    
    answer.sort((a,b)=>a-b);
    
    return answer;
}