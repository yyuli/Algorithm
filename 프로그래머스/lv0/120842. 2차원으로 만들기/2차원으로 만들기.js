function solution(num_list, n) {
    let answer = [];
    let currentArray = [];
    
    for (let i = 0; i<num_list.length; i++) {
        const item = num_list[i]
        currentArray.push(item)
        
        if(currentArray.length === n) {
            answer.push(currentArray);
            currentArray = [];
        }
    };
    
    
    return answer;
    
}