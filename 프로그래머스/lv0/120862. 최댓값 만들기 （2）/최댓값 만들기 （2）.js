function solution(numbers) {
    var answer = 0;
    let arrnew = numbers.sort((a,b)=>a-b);
    
    let item1 = arrnew[0]*arrnew[1];
    let item2 = arrnew[arrnew.length-1]*arrnew[arrnew.length-2];
    
    if(item1 > item2) {
        answer = item1;
    }else {
        answer = item2;
    }
    
    return answer;
}