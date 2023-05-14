function solution(n, arr1, arr2) {
    let answer = [];
    let str = '';
    
    for (let i = 0; i<arr1.length; i++) {
        const num1 = arr1[i].toString(2).padStart(n, '0');
        const num2 = arr2[i].toString(2).padStart(n, '0');

        for(let j = 0; j<num1.length; j++) {
           if(num1[j] === "1" || num2[j] === "1") {
               str += '#';
           }else {
               str += ' ';
           }
            
            if(str.length === n) {
                answer.push(str);
                str = '';
            }
        }
        
    }
    
    return answer;
}