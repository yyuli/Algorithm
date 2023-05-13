function solution(s) {
    const str = s.split(' ');
    let arr = [];
    let answer = '';
    
    for (let i = 0; i<str.length; i++) {
        for (let j = 0; j<str[i].length; j++) {
            if(j % 2 === 0) {
                answer += str[i][j].toUpperCase();
            }else {
                answer += str[i][j].toLowerCase();
            }
            
            if(answer.length === str[i].length) {
                arr.push(answer);
                answer = '';
            }
        }
        if(str[i] === '') {
            arr.push('');
        }
    }
    
    console.log(arr);
    return arr.join(' ');
}