

# 666 - 1666 - 2666 순으로 증가해야함

N = int(input())
six = '666'
num = 0
arr = []
for i in range(N):
    num+=1

    if num < 10:
        arr.append(int(f'{num}{six}'))
    # if num == 9:
    #     num=1
    #     six+= '6'
    #     arr.append(int(f'{num}{six}'))      
    elif num == 10:
        num=1
        six+= '6'
        arr.append(int(f'{num-1}{six}'))

# for i in range(10000):
    
print(arr)