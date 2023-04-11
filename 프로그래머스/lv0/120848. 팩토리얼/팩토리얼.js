function solution(n) {
    var answer = 1;
    
    for (let i = 2; i <= 10; i++) {
        answer *= i;
        if (answer > n) {
            return i - 1;
        }else if (answer === n){
            return i;
        }
    }

}