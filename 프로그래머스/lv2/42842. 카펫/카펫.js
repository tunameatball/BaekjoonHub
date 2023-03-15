function solution(brown, yellow) {
    const rect = brown + yellow;
    let length;
    for (length = Math.ceil(Math.sqrt(rect)); length > 0; length--) {
        if (rect % length == 0) {
            if ((rect/length + length) == (brown + 4) / 2) {
                return [ rect / length , length ].sort((a, b) => b - a);
            }
        }
    }
    return null;
}