function solution(s) {
    var answer = 0;
    let arr = s.split(" ");
    
    for (let i in arr) {
        if (arr[i] !== "Z") {
            answer += parseInt(arr[i]);
        }else {
            answer -= parseInt(arr[i-1]);
        }
    }
    
    return answer;
}