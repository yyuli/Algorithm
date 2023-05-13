function solution(s) {
    const str = s.toLowerCase()
    const regex = /[a-z]/g;
    if(regex.test(str)) {
        return false;
    }else {
        if(str.length === 4 || str.length === 6) {
            return true;
        }else {
            return false;
        }
    }
    
}