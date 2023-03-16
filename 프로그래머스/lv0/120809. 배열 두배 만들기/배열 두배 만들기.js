function solution(numbers) {
    let answer = [];
    
    for (let i=0; i<numbers.length; i++) {
        let item = numbers[i];
        answer.push(item*2);
    }
    
    return answer;
}