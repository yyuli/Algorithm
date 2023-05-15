function solution(s) {
    let answer = '';
    let str = '';
    
    const obj = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    }
    
    for (let i = 0; i < s.length; i++) {
        if(s[i].charCodeAt() >= 48 && s[i].charCodeAt() <= 57) {
            answer += s[i];
        }else {
            str += s[i];
        }
        for (let j = 0; j<Object.keys(obj).length; j++) {
            if(str === Object.keys(obj)[j]) {
                answer += obj[str];
                str = '';
            }
        }
    }
    
    return parseInt(answer);
}