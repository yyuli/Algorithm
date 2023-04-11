function solution(box, n) {
    var answer = 0;
    
    let box1 = Math.floor(box[0] / n);
    let box2 = Math.floor(box[1] / n);
    let box3 = Math.floor(box[2] / n);
    
    answer = box1 * box2 * box3;

    return answer;
}
