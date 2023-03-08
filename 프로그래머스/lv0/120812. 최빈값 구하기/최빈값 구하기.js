function solution(array) {
    array.sort((a,b)=>a-b);
    
    let beforeNum = -1;
    let repeatCnt = 0;
    let mode = -1;
    let repeatMode = 0;
    let isDuplicated = false;
    
    for (let i = 0; i<array.length; i++) {
        if(array[i] !== beforeNum) {
            repeatCnt = 1;
        }else {
            repeatCnt += 1;
        }
        
        if(repeatCnt === repeatMode && array[i] !== mode) {
            isDuplicated = true;
        }
        
        if(repeatCnt > repeatMode) {
            repeatMode = repeatCnt;
            mode = array[i];
            isDuplicated = false;
        }
        beforeNum = array[i];
    }
    
    if(isDuplicated) {
        return -1;
    }
    
    return mode;
}