function solution(num_list) {
    let plus = 0;
    let multiply = 1;
    
    for (let i of num_list) {
        plus += i;
    }
    plus = plus**2;
    
    for (let j of num_list) {
        multiply *= j;
    }
    
    if(multiply>plus) {
        return 0;
    }else {
        return 1;
    }
    
}