function solution(n, k) {
    let answer = 0;
    let service = 0;
    
    if(n>=10) {
        service = Math.floor(n/10);
    }
    
    if(k>=service) {
        answer = 12000 * n + 2000 * (k - service);
    }else {
        answer = 12000 * n;
    }
    
    return answer;
}