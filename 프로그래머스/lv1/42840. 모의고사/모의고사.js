function solution(answers) {
    let answer = [];
    let arr = [];
    let count = 0;
    
    const map = new Map([
        ['1번', [1, 2, 3, 4, 5]],
        ['2번', [2, 1, 2, 3, 2, 4, 2, 5]],
        ['3번', [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]],
    ])
    
    map.forEach(item=>{
        for (let i = 0; i<answers.length; i++) {
            if(item[i % item.length] === answers[i]) {
                count += 1;
            }
        }
        arr.push(count);
        count = 0;
    });

    for (let i = 0; i<arr.length; i++) {
        if(arr[i] === Math.max(...arr)) {
            answer.push(i+1);
        }
    }
    return answer;
}