function solution(i, j, k) {
    var answer = 0;
    
    for (let cnt = i; cnt<=j; cnt++) {
        const item = cnt.toString();
        for (let cnt2 = 0; cnt2<item.length; cnt2++) {
            if(item[cnt2] === String(k)) {
                answer += 1;
            }
        }
    }
    
    return answer;
}