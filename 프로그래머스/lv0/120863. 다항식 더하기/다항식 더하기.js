function solution(polynomial) {
    const arr = polynomial.split(" + ");
    let xNum = 0;
    let num = 0;
    
    arr.forEach((v) => {
        if(v.includes("x")) {
            const value = v.replace("x", "") || 1;
            xNum += parseInt(value);
        }else {
            num += parseInt(v);
        }
    })
    
    let answer = [];
    
    console.log(xNum);
    if(xNum) {
        if(xNum === 1) {
            xNum = "";
        }
        answer.push(`${xNum}x`);
    }
    
    if(num) {
        answer.push(`${num}`);
    }
    
    return answer.join(" + ");

}