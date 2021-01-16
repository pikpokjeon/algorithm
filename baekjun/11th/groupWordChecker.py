# https://www.acmicpc.net/problem/1316

# ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, 
# kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, 
# aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.

N = int(input())
count = 0
for _ in range(N):
    word = input()
    a = list(set(word))
    arr = [0]*len(word)
    repeat = [0]*len(word)
    curr = ''
    for i in range(len(word)):
        if not word[i] in arr:
            arr[i]=(word[i])
            repeat[i]=word.index(word[i])
        elif word[i] in arr:
            arr[i] = word.index(word[i])
            repeat[i]=word[i]
    
    # if arr.indexOf()

    print(arr,repeat)
        