function solution(nums) {
    let answer = 0;
    let arr = [];
    
    for (const i of nums) {
        if(!arr.includes(i)) {
            arr.push(i);
        }
    }
    console.log(arr);
    
    if(arr.length >= nums.length / 2) {
        return nums.length / 2;
    }else {
        return arr.length;
    }
}