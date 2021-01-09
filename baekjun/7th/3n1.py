

N = int(input())
arr = [N]
def func (arr,i):
    if arr[i] == 1 :return print(i+1)
    if arr[i] % 2 == 0: #짝수일 때
        arr.append(arr[i] // 2)
        return func(arr, i+1)
    arr.append( 3 * arr[i] + 1 )
    return func(arr, i+1)


func(arr,0)