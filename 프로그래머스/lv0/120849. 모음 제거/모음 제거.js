function solution(my_string) {
    let answer = '';
    
    for (let i = 0; i<my_string.length; i++) {
        const item = my_string[i];
        if (item === "a" || item === "e" || item === "i" || item === "o" || item === "u") {
            continue;
        }else {
            answer += item;
        }
    }
    
    return answer;
}