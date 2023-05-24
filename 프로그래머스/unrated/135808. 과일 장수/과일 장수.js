function solution(k, m, score) {    
    score.sort((a,b)=>b-a);
    
    let arr = [];
    let sum = 0;
    // while(score.length >= m) {
    //     const arr = score.splice(0, m);
    //     sum += arr[arr.length - 1] * arr.length;
    // }
    
    for (let i = 0; i<score.length; i+=m) {
        const arr = score.slice(i, i+m);
        if(arr.length === m) {
            sum += arr[arr.length - 1] * arr.length;
        }
    }
    
    return sum;

}