function solution(spell, dic) {
    var answer = 0;
    let arr = [];
    
    dic.forEach(function(word) {
        let cnt = 0;
        spell.forEach(function(item) {
            if(word.includes(item)) {
                cnt += 1;
            }
        })        
        if(cnt === spell.length) {
            arr.push(word);
        }
    });
    
    if(arr.length === 0) {
        answer = 2;
    }else {
        answer = 1;
    }
    
    return answer;
}
