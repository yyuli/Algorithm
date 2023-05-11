function solution(A, B) {
    if(A === B) {
        return 0;
    }
    
    const arrA = A.split('');
    const arrB = B.split('');
    let answer = 0;
    
    for (let i = 0; i < arrA.length; i++) {
        const save = arrA.pop(arrA[arrA.length-1]);
        arrA.unshift(save)
        answer += 1;
        if(arrA.join('') === arrB.join('')) {
            return answer;
        }
    }
    
    return -1;
}