function solution(seoul) {
    for (let i = 0; i<seoul.length; i++) {
        const item = seoul[i];
        if(item === "Kim") {
            return `김서방은 ${i}에 있다`
        }
    }
}