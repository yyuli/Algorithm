function solution(score) {
    const average = score.map((item) => (item[0] + item[1])/2);
    const isSorted = [...average].sort((a,b)=>b-a);
    return average.map((item)=>isSorted.indexOf(item)+1)
}