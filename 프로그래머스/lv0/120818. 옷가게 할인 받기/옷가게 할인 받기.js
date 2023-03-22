function solution(price) {
    var answer = 0;
    
    if(price >= 500000) {
        answer = Math.floor(price * 0.8);
    }else if(price >= 300000) {
        answer = Math.floor(price * 0.9);
    }else if(price >= 100000) {
        answer = Math.floor(price * 0.95);
    }else {
        answer = price;
    }
    
    return answer;
}