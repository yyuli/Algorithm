function solution(quiz) {
    let answer = [];
    let sum = 0;
    
    for (let i = 0; i<quiz.length; i++) {
        let arr = quiz[i].split(" ");
        if(arr[1] === "-") {
            sum = parseInt(arr[0]) - parseInt(arr[2]);
            if(sum === parseInt(arr[4])) {
                answer.push("O");
            }else {
                answer.push("X");
            }
         }else if(arr[1] === "+") {
            sum = parseInt(arr[0]) + parseInt(arr[2]);
            if(sum === parseInt(arr[4])) {
                answer.push("O");
            }else {
                answer.push("X");
            }
             
        }
    }
    
    
    return answer;
}