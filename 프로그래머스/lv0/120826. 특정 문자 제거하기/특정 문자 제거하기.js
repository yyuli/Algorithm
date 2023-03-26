function solution(my_string, letter) {
    var answer = '';
    
    for (let i=0; i<my_string.length; i++) {
        let item = my_string[i];
        if(item !== letter) {
            answer += item;
        }
    }
    
    return answer;
}