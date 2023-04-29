function solution(my_string) {
    let answer = 0;
    const arr = my_string.match(/[0-9]+/g);
    
    if(!arr) {
        return 0;
    }
    
    for (let i of arr) {
        answer += parseInt(i);
    }
    
    return answer;
}