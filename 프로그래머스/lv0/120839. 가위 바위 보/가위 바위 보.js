function solution(rsp) {
    let obj = {
        "2" : "0",
        "0" : "5",
        "5" : "2"
    }
    
    let answer = "";
    
    for (let i = 0; i<rsp.length; i++) {
        let item = rsp[i];
        answer += obj[item]; 
    }
    
    return answer;
}