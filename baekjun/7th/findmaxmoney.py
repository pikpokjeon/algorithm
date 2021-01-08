
# while True:
#     try:
#         a, b = map(int, sys.stdin.readline().split())
#         print(a + b)
#     except:
#         break


# while True:
#     try:
#         line = map(int, input())
#         print(list(line))
#     except:
#         break

# n = int(input())
# mv = 0
# def hanoi(n,start,inter,end):
#     global mv 
#     if n == 0: return
#     hanoi(n-1,start,end,inter)
#     mv += 1
#     print(f' {start},{end},{mv}')
#     hanoi(n-1, inter,start, end)

# hanoi(n,1,2,3)
import math
 
percent = [5/100, 20/100, 35/100] 
initMoney, initYear =  map(int, input().split())
maxMoney = -1

def calcYear (year, money):
    global maxMoney 
    if year < 0:return 
    if year == 0: maxMoney = max(money, maxMoney)
    calcYear(year - 5, math.trunc(money * 1.35))
    calcYear(year - 3, math.trunc(money * 1.2 ))
    calcYear(year - 1, math.trunc( money * 1.05))

calcYear(initYear,initMoney)
print(math.trunc(maxMoney))