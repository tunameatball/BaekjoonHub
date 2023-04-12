function solution(people, limit) {
    let answer = 0;
    people = people.sort((a, b) => b - a);
    let frontIndex = 0;
    let backIndex = people.length - 1;
    while (frontIndex <= backIndex) {
        let weight = 0;
        
        while(frontIndex <= backIndex) {
            const person = people[frontIndex];
            if (weight + person > limit) {
                break;
            } else {
                weight += person;
                frontIndex += 1;
            }
        }
        
        while (frontIndex <= backIndex) {
            const person = people[backIndex];
            if (weight + person > limit) {
                break;
            } else {
                weight += person;
                backIndex -= 1;
            }
        }
        answer += 1;
    }
    return answer;
}