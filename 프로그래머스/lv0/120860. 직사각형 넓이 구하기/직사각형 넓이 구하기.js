function solution(dots) {
    var answer = 0;
    let arr1 = [];
    let arr2 = [];
    let num = 0;
    let num2 = 0;
    
    for (let i = 0; i<dots.length; i++) {
        arr1.push(dots[i][0]);
    }
    
    for (let i = 0; i<dots.length; i++) {
        arr2.push(dots[i][1]);
    }
    
    for (let i = 0; i<arr1.length; i++) {
        for (let j = 1; j<arr1.length; j++) {
            if(arr1[i] !== arr1[j] && arr1[i] > arr1[j]) {
                num = arr1[i] - arr1[j];
                break;
            }else if (arr1[i] !== arr1[j] && arr1[i] < arr1[j]) {
                num = arr1[j] - arr1[i];
                break;
            }
        }
    }
    
    for (let i = 0; i<arr2.length; i++) {
        for (let j = 1; j<arr2.length; j++) {
            if(arr2[i] !== arr2[j] && arr2[i] > arr2[j]) {
                num2 = arr2[i] - arr2[j];
                break;
            }else if (arr2[i] !== arr2[j] && arr2[i] < arr2[j]) {
                num2 = arr2[j] - arr2[i];
                break;
            }
        }
    }
    
    answer = num * num2;
    
    return answer;
}