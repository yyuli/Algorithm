function solution(my_string) {
    var answer = '';
    let lowstring = my_string.toLowerCase();
    let arr = [];
    
    for (let i = 0; i<lowstring.length; i++) {
        arr.push(lowstring[i]);
    }
    
    arr.sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0));
    
    for (let j = 0; j<arr.length; j++) {
        answer += arr[j];
    }
    
    console.log(arr);
    console.log(lowstring);
    
    return answer;
}