function solution(n) {
    if(n % 7 === 0) {
        return Math.floor(n / 7);
    }else {
        return Math.floor(n / 7) + 1;
    }
}