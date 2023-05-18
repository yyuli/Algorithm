function solution(name, yearning, photo) {
    let answer = [];
    let sum = 0;
    
    for (let i = 0; i<photo.length; i++) {
        for (let j = 0; j<name.length; j++) {
            if(photo[i].includes(name[j])) {
                sum += yearning[j];
            }
        }
        answer.push(sum);
        sum = 0;
    }
    
    return answer;
}