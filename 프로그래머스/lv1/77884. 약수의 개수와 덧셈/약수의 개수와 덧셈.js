function solution(left, right) {
    var answer = 0;
    let cnt = [];
    
    for (let i = left; i<=right; i++) {
        for (let j = 1; j<=i; j++) {
            if(i % j === 0) {
                cnt.push(j);
                if(i === j) {
                    if(cnt.length % 2 === 0) {
                        answer += i;
                    }else {
                        answer -= i;
                    }
                    cnt = [];
                }
            }
            
        }
    }
    
    return answer;
}