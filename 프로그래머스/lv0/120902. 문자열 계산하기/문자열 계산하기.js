function solution(my_string) {    
    let strArr = my_string.split(" ");
    let answer = parseInt(strArr[0]);
    
    for (let i = 1; i<strArr.length; i++) {
        if(strArr[i] === "+") {
            answer += parseInt(strArr[i+1]);
        }else if(strArr[i] === "-") {
            answer -= parseInt(strArr[i+1]);
        }
    }

    return answer;
}