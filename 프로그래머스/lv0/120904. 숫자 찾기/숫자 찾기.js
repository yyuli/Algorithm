function solution(num, k) {
    let str = num.toString();
    let strK = k.toString();
    
    if(!str.includes(strK)) {
        return -1;
    }else {
        for (let i = 0; i<str.length; i++) {
            if(str[i] === strK) {
                return i+1;
            }
        }
    }
}