function solution(dots) {
    dots.sort((a,b)=>a[0] - b[0]);

    const x = Math.abs(dots[2][0] - dots[0][0]);
    const y = Math.abs(dots[0][1] - dots[1][1]);
    
    return x*y;
}