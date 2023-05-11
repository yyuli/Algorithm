function solution(M, N) {
    var answer = 0;
    
    if(M < N) {
        answer = (M - 1) + (N - 1) * M;
    }else {
        answer = (N - 1) + (M - 1) * N;
    }
    
    return answer;
}