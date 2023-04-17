function solution(numbers) {
    let answer = '';
    const numArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    numArray.forEach((nums, index) => {
        numbers = numbers.replaceAll(nums, index);
    });
    
    return parseInt(numbers);
}