function solution(quiz) {
    var answer = [];
    let strTemp = String(quiz).split(/ |,/);
    let result = 0;
    let cnt = 4;
    
    for (let i = 0; i<strTemp.length; i++) {
        let item = strTemp[i]
        
        if(item === "-") {
            result = Number(strTemp[i-1]) - Number(strTemp[i+1]);
            
            if(result == strTemp[cnt]) {
                answer.push("O");
                cnt += 5;
            }else {
                answer.push("X");
                cnt += 5;
            }
            
        }else if(item === "+") {
            result = Number(strTemp[i-1]) + Number(strTemp[i+1]);
            
            if(result == strTemp[cnt]) {
                answer.push("O");
                cnt += 5;
            }else {
                answer.push("X");
                cnt += 5;
            }
            
            console.log(result);
        }
        

    }
    
    console.log(strTemp);
    console.log(strTemp.length);
    console.log(result);
    
    return answer;
    
}