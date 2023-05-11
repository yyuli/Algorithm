function solution(num, total) {
    const arr = new Array(num);
    
    if(num % 2 !== 0) {
        const middle = Math.floor(total / num);
        arr[0] = middle - Math.floor(arr.length / 2);
        for (let i = 1; i<arr.length; i++) {
            arr[i] = (arr[0]+i);
        }
    }else {
        arr[arr.length/2 -1] = Math.floor(total / num);
        arr[0] = arr[arr.length/2 -1] - (arr.length/2 -1);
        for (let i = 1; i<arr.length; i++) {
            arr[i] = (arr[0]+i);
        }
        
    }
    
    return arr;
}