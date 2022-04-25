function solution(A) {
    A.sort(function(a,b){
       return a - b; 
    });
    var count = 0;
    for(i = 0; i < A.length; i++){
        if(A[i] === i+1){
            count++;
        } else {
            break;
        }
     } 
    if(count === A.length){
     return 1;   
    }
    else {
     return 0;   
    } 
}
console.log(solution([1, 4, 1]));
