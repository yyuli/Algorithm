function solution(sides) {
    let answer = 0;
    
    sides.sort((a,b)=>b-a);
    console.log(sides);
    
    for (let i = sides[0]; i>sides[0]-sides[1]; i--) {
        answer += 1;
    }
    
    for (let i = sides[0]+1; i<sides[0]+sides[1]; i++) {
        answer += 1;
    }
    
    return answer;
}