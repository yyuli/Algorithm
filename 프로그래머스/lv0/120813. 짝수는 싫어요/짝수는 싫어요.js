function solution(n) {
    let result = [];
    for (let i = 1; i<=n; i+=2) {
        result.push(i);
    }
    // result.sort((a,b)=>a-b);
    return result;
}