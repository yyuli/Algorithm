function solution(food) {
    let answer = '';
    
    for (let i = 1; i<food.length; i++) {
        const item = food[i];
        answer += String(i).repeat(Math.floor(item / 2));
    }
    
    answer += 0;
    
    for (let j = answer.length - 2; j>=0; j--) {
        const item = answer[j];
        answer += item;
    }
    
    return answer;
}