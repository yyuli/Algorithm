function solution(s, n) {
    let result = '';
    
    for (let j = 0; j<n; j++) {
        result = '';
        for (let i = 0; i<s.length; i++) {
            if(s[i] === ' ') {
                result += ' ';
            }else if(s[i] === 'z') {
                result += 'a';
            }else if(s[i] === 'Z') {
                result += 'A';
            }else {
                result += (String.fromCharCode(s[i].charCodeAt()+1))
            }
        }
        s = result;
    }
    
    return result;
}