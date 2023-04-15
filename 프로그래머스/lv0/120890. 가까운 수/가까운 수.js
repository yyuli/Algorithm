function solution(array, n) {
    const minDiff = Math.min(...array.map((v)=>Math.abs(v-n)));
    
    const answer = array.sort((a,b)=>a-b).find((a)=>Math.abs(a-n) === minDiff);
    
    return answer;
    
}