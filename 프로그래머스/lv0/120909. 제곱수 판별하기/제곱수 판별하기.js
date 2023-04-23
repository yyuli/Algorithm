function solution(n) {
    if(Math.floor(n ** 0.5) ** 2 === n) {
        return 1;
    }else {
        return 2;
    }
}