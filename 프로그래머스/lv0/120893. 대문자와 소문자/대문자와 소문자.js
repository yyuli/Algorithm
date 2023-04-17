function solution(my_string) {
    let answer = '';
    
    for (let i of my_string) {
        if(i.charCodeAt()>=65 && i.charCodeAt()<=90) {
            answer += i.toLowerCase();
        }else {
            answer += i.toUpperCase();
        }
    }
    
    return answer;
}