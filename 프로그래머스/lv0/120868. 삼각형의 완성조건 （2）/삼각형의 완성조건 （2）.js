function solution(sides) {
    sides.sort((a,b)=>b-a);
    
    const max = sides[0];
    const min = sides[1];
    
    let answer = 0;
    
    for (let i = max; i>max-min; i--) {
        answer += 1;
    }
    
    for (let i = max+1; i<max+min; i++) {
        answer += 1;
    }
    
    return answer;
}