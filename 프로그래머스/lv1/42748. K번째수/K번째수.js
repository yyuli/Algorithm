function solution(array, commands) {
    let answer = [];
    
    for(let i = 0; i < commands.length; i++) {
        let splicedArr;
        if(commands[i][0] === commands[i][1]) {
            splicedArr = [...array].splice(commands[i][0]-1, 1)
        }else {
            splicedArr = [...array].slice(commands[i][0]-1, commands[i][1]);
        }
        splicedArr.sort((a,b)=>a-b);
        answer.push(splicedArr[commands[i][2]-1])
    }
    
    return answer;
}