function solution(arr1, arr2) {
    let temp = [];
    let arr = []
   
    for(let i = 0; i<arr1.length; i++) {
        for(let j = 0; j<arr1[i].length; j++) {
            temp.push(arr1[i][j]+arr2[i][j]);
            if(temp.length === arr1[0].length) {
                arr.push(temp);
                temp = [];
            }
        }
    }
    return arr;
}