function solution(t, p) {
    let answer = 0;
    
    for (let i = 0; i<t.length; i++) {
        const slicedT = t.slice(i, p.length + i);
        if(slicedT.length === p.length) {
            if(parseInt(slicedT) <= parseInt(p)) {
                answer += 1;
            }
        }
    }
    
    return answer;
}