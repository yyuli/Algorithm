function solution(n) {
    const reverse = n.toString(3).split('').reverse().join('');
    return parseInt(reverse, 3);
}