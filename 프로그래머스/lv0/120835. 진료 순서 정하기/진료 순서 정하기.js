function solution(emergency) {
    const arrayNew = [...emergency].sort((a,b)=>b-a);
    return emergency.map(item => arrayNew.indexOf(item)+1);
}