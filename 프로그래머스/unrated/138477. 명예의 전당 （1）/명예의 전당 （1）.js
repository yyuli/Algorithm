function solution(k, score) {
    let arr = [];
    let lowest = [];
    
    for (let i = 0; i<score.length; i++) {
        if(i < k) {
            arr.push(score[i])
            arr.sort((a,b)=>a-b);
            lowest.push(arr[0]);
        }else {
            if(arr[0]>score[i]) {
                lowest.push(arr[0]);
            }else {
                arr.shift();
                arr.unshift(score[i]);
                arr.sort((a,b)=>a-b);
                lowest.push(arr[0]);
            }
        }
    }
    return lowest;
}