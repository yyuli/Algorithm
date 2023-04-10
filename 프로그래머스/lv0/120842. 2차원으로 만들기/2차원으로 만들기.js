function solution(num_list, n) {
    let tempArr = [];
    var answer = [];
    
    for (let i of num_list) {
        tempArr.push(i);
        if(tempArr.length === n) {
            answer.push(tempArr);
            tempArr = [];
        }
    }
    
    return answer;
}