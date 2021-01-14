# 문제 설명
# 각각의 용량이 a, b, c 리터인 비커가 있습니다. 다음 조건에 따라 d 리터를 만들고 싶습니다.

# 정해진 3개의 비커 이외에 다른 비커는 사용할 수 없습니다.
# 사용할 수 있는 액체의 양은 무한합니다.
# 비커에는 액체를 넘치지 않게 가득 채우거나 담겨있는 액체를 모두 버리는 행동만 가능하고, 동시에 할 수는 없습니다.
# 비커끼리 액체를 이동시킬 수 있고, 이 상황에서도 다른 비커를 넘치지 않게 완전히 채우던가, 넘치지 않는다면 지금 비커를 완전히 비우는 행동만 가능합니다.
# 한번에 한가지 행동만 할 수 있습니다.
# d리터는 어느 비커에 담겨 있어도 상관이 없습니다.
# 비커의 용량 a, b, c와 만들어야 할 d리터가 매개변수로 주어질 때, d 리터를 만들기 위한 행동의 최소 횟수를 return 하는 solution 함수를 완성해주세요.

# 제한 사항
# 비커의 용량은 100 이하의 자연수입니다.
# 만들어야 할 용량 d는 100 이하의 자연수입니다.
# 만약 d 리터를 만들 수 없다면, -1을 return 해주세요.
# 입출력 예
# a	b	c	d	result
# 3	5	7	1	4
# 3	6	9	4	-1
def solution(a, b, c, d):
    answer = -1
    to = d
    count = 0
    r = [a,b,c]
    a = []

    for i in r:
        a.append(i)
        a.append(i*-1)
    memo = [0]*len(a)*2
    
    def find(arr, n , d):
        nonlocal answer
        if len(arr) == len(r): 
            if sum(arr) == d:
                answer = len(arr) +1
                
                return
            elif len(arr) == 0: 
                answer = -1 
                return
        for k in range(len(a)):
            if not memo[k]:
                memo[k] = 1
                arr.append(a[k])
                find(arr, n +1,d)
                arr.pop()
                memo[k] = 0
                # print(arr)
        
    find([],0,d)
    print(answer)
    return answer



        
        
        
