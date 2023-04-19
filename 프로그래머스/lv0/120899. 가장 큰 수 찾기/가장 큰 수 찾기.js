function solution(array) {
    let answer = [];
    let arrNew = [...array].sort((a,b)=>b-a);
    answer.push(arrNew[0]);
    
    for (let i = 0; i<array.length; i++) {
        if(answer[0] === array[i]) {
            answer.push(i);
        }
    }
    
    return answer;
}