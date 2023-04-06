function solution(numbers) {
    var answer = 0;
    let string = '';
    
    for (let i = 0;i<numbers.length;i+=1) {
        string += numbers[i];
        if (string.includes("one")) {
            answer += "1";
            string = '';
        }
        if (string.includes("two")) {
            answer += "2";
            string = '';
        }
        if (string.includes("three")) {
            answer += "3";
            string = '';
        }
        if (string.includes("four")) {
            answer += "4";
            string = '';
        }
        if (string.includes("zero")) {
            answer += "0";
            string = '';
        }
        if (string.includes("five")) {
            answer += "5";
            string = '';
        }
        if (string.includes("six")) {
            answer += "6";
            string = '';
        }
        if (string.includes("seven")) {
            answer += "7";
            string = '';
        }
        if (string.includes("eight")) {
            answer += "8";
            string = '';
        }
        if (string.includes("nine")) {
            answer += "9";
            string = '';
        }
        
        
        
        };
    return Number(answer);
}