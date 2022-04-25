function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    if (A === B) {
        if (A % K === 0) {
            return 1
        }
        else {
            return 0
        }
    }
    
    leftLimit = Math.ceil(A/K)
    rightLimit = Math.floor(B/K)
    
    return (rightLimit - leftLimit + 1)
}
console.log(solution(6, 12, 2)); //6 8 10
console.log(Math.ceil(3.2));
