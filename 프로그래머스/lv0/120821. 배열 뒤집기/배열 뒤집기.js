function solution(num_list) {
    let newArray = [];
    
    
    for (let i = num_list.length-1; i >= 0; i--) {
    newArray.push(num_list[i])
    };
    console.log(num_list.length);
    return newArray;
}