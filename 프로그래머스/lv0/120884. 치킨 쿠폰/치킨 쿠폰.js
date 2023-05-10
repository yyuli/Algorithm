function solution(chicken) {
    let answer = 0;
    let coupon = chicken;
    
    while (Math.floor(coupon / 10) > 0) {
        answer += Math.floor(coupon / 10);
        coupon = Math.floor(coupon / 10) + coupon % 10;
        console.log("answer",answer);
        console.log("coupon",coupon);
    }
    
    return answer;

}