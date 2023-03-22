function solution(before, after) {
    const beforeList = before.split('');
    const afterList = after.split('');
    beforeList.forEach(value => {
        const index = afterList.indexOf(value);
        if (index != -1) {
            afterList.splice(index, 1);
        }
    });
    return afterList.length > 0 ? 0 : 1;
}