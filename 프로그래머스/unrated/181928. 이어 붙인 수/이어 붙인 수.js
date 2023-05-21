function solution(num_list) {
    let even = '';
    let odd = '';
    let answer = 0;
    
    for (const i of num_list) {
        if(i % 2 === 0) {
            even += i;
        }else {
            odd += i;
        }
    }
    
    answer += parseInt(even) + parseInt(odd);
    
    return answer;
}