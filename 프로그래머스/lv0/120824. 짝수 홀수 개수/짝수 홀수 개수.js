function solution(num_list) {
    let answer = [];
    let evenCnt = 0;
    let oddCnt = 0;
    
    for (let i = 0; i<num_list.length; i++) {
        let item = num_list[i];
        if(item % 2 === 0) {
            evenCnt += 1;
        }else {
            oddCnt += 1;
        }
    }
    
    answer.push(evenCnt);
    answer.push(oddCnt);
    
    return answer;
}