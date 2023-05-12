function solution(s){
    const lowerS = s.toLowerCase();
    let cntP = 0;
    let cntY = 0;
    
    for (const i of lowerS) {
        if(i === 'p') {
            cntP++;
        }else if(i === 'y') {
            cntY++;
        }
    }
    
    return cntP === cntY ? true : false;

}