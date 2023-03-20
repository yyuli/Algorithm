

function solution(n) {
    let answer = 0;
    
    if(n % 6 === 0) {
        answer = Math.floor(n / 6);
    }else if(n % 2 === 0) {
        answer = Math.floor(n / 2);
    }else if(n % 3 === 0) {
        answer = Math.floor(n / 3);
    }else {
        answer = n;
    }
    
    return answer;
}