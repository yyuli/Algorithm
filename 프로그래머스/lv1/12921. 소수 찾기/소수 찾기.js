function solution(n) {
    const prime = [];
    const arr = new Array(n).fill(0);
    
    for(let i = 2; i <= n; i++){
        arr[i] = i;
    }
    
    for (let i = 2; i<=n; i++) {
        if (arr[i] === 0) continue;
        prime.push(i);
        arr[i] = 0;
        
        for (let j = i * 2; j<=n; j+=i) {
            if (arr[j] === 0) continue;
            arr[j] = 0;
        }
    }

    return prime.length;
}