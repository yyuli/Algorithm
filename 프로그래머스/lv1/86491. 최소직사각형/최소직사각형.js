function solution(sizes) {
    let arr = [];
    
    for (let i of sizes) {
        i.sort((a,b)=>a-b);
        arr.push(i);
    }
    const arr1 = [...arr].sort((a,b)=>a[0]-b[0]);
    const arr2 = [...arr].sort((a,b)=>a[1]-b[1]);
    
    return arr1[arr1.length-1][0] * arr2[arr2.length-1][1];
}