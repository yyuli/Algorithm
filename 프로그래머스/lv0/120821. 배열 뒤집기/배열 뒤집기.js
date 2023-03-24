function solution(num_list) {
    let answer = [];
    
    for (let i = num_list.length - 1; i>=0; i--) {
        let item = num_list[i];
        answer.push(item);    
    }
    
    return answer;
}