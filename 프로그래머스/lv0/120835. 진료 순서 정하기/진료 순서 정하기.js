function solution(emergency) {
    let newEmergency = [];
    
    for (let cnt = 0; cnt < emergency.length; cnt++) {
        newEmergency.push({value: emergency[cnt], idx:cnt});  
    };
    newEmergency.sort((a,b) => b.value-a.value)
    console.log(newEmergency);
    
    var answer = new Array(emergency.length);
    
    for (cnt = 0; cnt<newEmergency.length; cnt++) {
        let item = newEmergency[cnt]
        answer[item.idx] = cnt + 1;
    }
    
    
    return answer;
}