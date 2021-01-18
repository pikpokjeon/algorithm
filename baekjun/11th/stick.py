# https://www.acmicpc.net/problem/1094

stick = [64]
X = int(input())
count = 0
total = 64
# 지민이가 가지고 있는 막대의 길이를 모두 더한다. 
# 처음에는 64cm 막대 하나만 가지고 있다. 이때, 합이 X보다 크다면, 
# 아래와 같은 과정을 반복한다.
def jegui (s):
    global X
    global count

    half = stick[0] // 2
    total = sum(stick) 
    if total == X : return
    elif half == 0: return

# 가지고 있는 막대 중 길이가 가장 짧은 것을 절반으로 자른다.
    temp = stick.pop(0) // 2
 
    if total - temp >= X: # 만약, 위에서 자른 막대의 절반 중 하나를 버리고 남아있는 막대의 길이의 합이 X보다 크거나 같다면,
        stick.append(temp) # 위에서 자른 막대의 절반 중 하나를 버린다.
    else: # 합이 적다면 막대를 가지고 있는다
        stick.append(temp)
        stick.append(temp)

    stick.sort()
    # 이제, 남아있는 모든 막대를 풀로 붙여서 Xcm를 만든다.
    s = sum(stick)

    jegui(s)
# 몇 개의 막대를 풀로 붙여서 Xcm를 만들 수 있는지 구하는 프로그램을 작성하시오. 

jegui(stick[0])
print(len(stick))
