function solution(nums) {
    let answer = 0;
    let sumArr = [];
    
    for (let i = 0; i<nums.length; i++) {
        for (let j = i+1; j<nums.length; j++) {
            for (let k = j+1; k<nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                sumArr.push(sum);
            }
        }
    }
    
    console.log(sumArr);
    
    let arr = [];
    for (let i of sumArr) {
        let num = 2;
        while(i >= num) {
            if(i % num === 0) {
                arr.push(num);
                i = Math.floor(i / num);
            }else {
                num++;
            }
        }
        if(arr.length === 1) {
            answer += 1;
            arr = [];
        }
        arr = [];
    }
    
    return answer;
}