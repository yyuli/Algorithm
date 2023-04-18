function solution(s) {
    let obj = {};
    
    for (let i = 0; i<s.length; i++) {
        let item = s[i];
        if(obj[item]) {
            obj[item] += 1;
        }else {
            obj[item] = 1;
        }
    }
    
    const objArr = Object.entries(obj);
    let arr = [];
    
    for (let i = 0; i<objArr.length; i++) {
        const num = objArr[i][1];
        if(num === 1) {
            arr.push(objArr[i][0]);
        }
    }
    
    arr.sort();
    
    return arr.join('');
}