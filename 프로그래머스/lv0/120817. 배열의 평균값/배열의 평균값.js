function solution(numbers) {
    let sum = 0;
    let answer = 0;
    
    for (let i = 0; i<numbers.length; i++) {
        let item = numbers[i];
        sum += item;
    }
    
    answer = sum / numbers.length;
    
    return answer;
}