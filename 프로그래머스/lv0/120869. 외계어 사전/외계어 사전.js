function solution(spell, dic) {
    let arr = [];
    
    dic.forEach((word)=>{
        let cnt = 0;
        spell.forEach((item) => {
            if(word.includes(item)) {
                cnt += 1;
            }
            
            if(cnt === spell.length) {
                arr.push(word);
            }
        })
    })
    
    return arr.length > 0 ? 1 : 2;
    
}