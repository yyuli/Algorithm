function solution(before, after) {
    const arr1 = before.split('');  
    const str1 = arr1.sort().join('');
    
    const arr2 = after.split('');  
    const str2 = arr2.sort().join('');

    if(str1 === str2) {
        return 1;
    }else {
        return 0;
    }

}