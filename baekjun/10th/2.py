

A, B = map(int,input().split())
# 이진수를 더한다
# 앞 자리 올려야 할 수 있어서 미리 0을 넣은채로 배열로 만들어준다
plus = list(map(int,'000'+str(A + B)))
# 더한 값의 길이만큼 돈다
# 배열 맨 뒤 인덱스부터 시작한다
for i in range(len(plus)-1 ,-1,-1):
# 2인 경우 그자리를 0으로 바꾸고 그전 인덱스를 1더해준다
    if plus[i] == 2:
        plus[i] = 0
        plus[i-1] += 1
    elif plus[i] == 3:
        if i == 0: 
            plus = [0,0]+ plus
            plus[i] = 1
            plus[i-1] += 2
        plus[i] = 1
        plus[i-1] += 2
    elif plus[i] == 4:
        if not plus[i-1]: 
            plus = [0,0]+ plus
            plus[i] = 0
            plus[i-1] += 2
        plus[i] = 0
        plus[i-1] += 2
    print(plus)
print(plus)
for z in range(len(plus)):
    if plus[z] == 1: break
    elif plus[z] == 0:
        plus[z] == ''
print(''.join(map(str,plus)))