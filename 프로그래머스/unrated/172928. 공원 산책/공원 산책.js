function solution(park, routes) {
    let startX, startY = -1;
    const oper = {
        'E': location => [location[0], location[1] + 1],
        'W': location => [location[0], location[1] - 1],
        'N': location => [location[0] - 1, location[1]],
        'S': location => [location[0] + 1, location[1]],
    };
    
    for (let rowIndex = 0; rowIndex < park.length; rowIndex++) {
        const startIndex = park[rowIndex].indexOf('S');
        if (startIndex >= 0) {
            startX = rowIndex;
            startY = startIndex;
            break;
        }    
    }
    
    routes.forEach(route => {
        const [op, move] = route.split(' ');
        let tempLocation = [startX, startY];
        let isSuccess = true;
        for (let i = 0; i < move; i++) {
            tempLocation = oper[op](tempLocation);
            if (tempLocation[0] < 0 || tempLocation[0] >= park.length
               || tempLocation[1] < 0 || tempLocation[1] >= park[0].length) {
                isSuccess = false;
                break;
            }
            
            let nowLocation = park[tempLocation[0]][tempLocation[1]]
            if (nowLocation == undefined || nowLocation == 'X') {
                isSuccess = false;
                break;
            }
        }
        if (isSuccess) {
            startX = tempLocation[0];
            startY = tempLocation[1];
        }
    })
    
    return [startX, startY];
}