function solution(hp) {
    var answer = 0;
    let boss = 5;
    let middle = 3;
    let work = 1;
    
    answer += Math.floor(hp/boss);
    hp = hp % boss;
    
    answer += Math.floor(hp/middle);
    hp = hp % middle;
    
    answer += Math.floor(hp/work);
    
    return answer;
}