
from pprint import pprint
N = int(input())
arr = []
for _ in range(N):
    arr.append(list(map(int,input().split())))

MAX = 5
mv = [[0,1],[0,-1],[1,0],[-1,0]]

def cube ():
    global MAX
    if MAX == 0: return
    # 상하좌우에 같은 숫자가 있는지 확인한다
    for _ in range(4):
        rotate(4)       
newArr = [[]for _ in range(N)]
fArr = [[]for _ in range(N)]
def push ():
    for y in range(N):
        for x in range(N-1,-1,-1):
            if 0 <= x < N:
                
                if  arr[y][x] == arr[y][x-1]:
                    arr[y][x] = arr[y][x-1] + arr[y][x]
                    arr[y][x-1] = 0
                num = arr[y].pop()
                zero = 0
                
                if num != 0:
                    newArr[y].append(num)
                elif num == 0:
                    zero += 1
                print(newArr)
                print('*' * 49)
                # pprint(arr, width= N * 10)
                # pprint(newArr, width= N * 10)
                for n in range(zero):
                    fArr[y].append(0)
                    pprint(fArr, width = N * 10)

                
                for _ in range(len(newArr[y])):
                    fArr[y].append(newArr[y].pop())
                print('x',x,'y',y)
    removeZero()
                # pprint(fArr, width = N * 10)
def removeZero ():
    for y in range(N):
        for x in range(N-1,-1,-1):
            if fArr[y][x-1] == 0 and fArr[y][x]>0: 
                
                print(y,x-1)
            

def rotate (c):
    if c < 0 :
        MAX =- 1
        return
    push()
    return rotate(c-1)

    # 같은 숫자가 있는경우 1번 이동
    # 이동방향에 있는 겹쳐진 숫자를 갱신해준다
    # 겹쳐진 숫자로 이동한 경우 그 자리를 0으로 만들어 준다
    # 반복한다.



cube()
print(max(map(max,arr)))

