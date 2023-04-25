function solution(array, height) {
    let answer = 0;
    
    array.sort((a,b) => a-b);
    
    for (let i of array) {
        if(i>height) {
            answer += 1;
        }
    }
    
    return answer;
}