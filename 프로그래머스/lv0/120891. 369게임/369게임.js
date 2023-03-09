function solution(order) {
    let answer = 0;
    let stringNum = order.toString();
    
    for (let i = 0; i<stringNum.length; i++) {
        if(stringNum[i] === "3" || stringNum[i] === "6" || stringNum[i] === "9") {
            answer += 1;
        }
    }
    
    return answer;
}