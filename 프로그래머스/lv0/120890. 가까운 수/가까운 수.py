def solution(array, n):
    answer = 0
    array.append(n)
    array.sort()
    index = array.index(n)
    
    before = abs(n - array[index - 1]) if index > 0 else 100
    after = abs(n - array[index + 1]) if index < len(array) - 1 else 100
    
    return array[index - 1] if before <= after else array[index + 1]