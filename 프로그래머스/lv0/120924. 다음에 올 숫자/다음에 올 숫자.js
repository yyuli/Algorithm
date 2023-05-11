function solution(common) {
    let answer = 0;
    
    if(common[1] - common[0] === common[2] - common[1]) {
        answer = common[0] + ((common.length+1)-1)*(common[1] - common[0]);
    }else {
        answer = common[0] * ((common[1] / common[0]) ** ((common.length+1)-1))
    }
    
    return answer;
}