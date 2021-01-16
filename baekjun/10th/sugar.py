# 문제
# 상근이는 요즘 설탕공장에서 설탕을 배달하고 있다. 상근이는 지금 사탕가게에 설탕을 정확하게 N킬로그램을 배달해야 한다. 설탕공장에서 만드는 설탕은 봉지에 담겨져 있다. 봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다.

# 상근이는 귀찮기 때문에, 최대한 적은 봉지를 들고 가려고 한다. 예를 들어, 18킬로그램 설탕을 배달해야 할 때, 3킬로그램 봉지 6개를 가져가도 되지만, 5킬로그램 3개와 3킬로그램 1개를 배달하면, 더 적은 개수의 봉지를 배달할 수 있다.

# 상근이가 설탕을 정확하게 N킬로그램 배달해야 할 때, 봉지 몇 개를 가져가면 되는지 그 수를 구하는 프로그램을 작성하시오.

# 입력
# 첫째 줄에 N이 주어진다. (3 ≤ N ≤ 5000)

# 출력
# 상근이가 배달하는 봉지의 최소 개수를 출력한다. 만약, 정확하게 N킬로그램을 만들 수 없다면 -1을 출력한다.

# 그리디 알고리즘

from itertools import combinations
# 배달 키로수
N = int(input())
# five = 0
# frest = 0
# tree = 0
# frest = 0

# N으로 만들수 있는 각각 5.3키로 봉투 조합을 구한다.
# ALL = []

# 조합에 다른 숫자가 있는경우 무조껀 -1 프린트
# 조합에서 5 와 3의 갯수를 비교하고, 가장 작은 봉투 갯수가 정답

# 그렇다면 몫과 나머지를 각각저장
# 나머지가 3으로 나누어 떨어지는가?
# 그렇다면 몫을 저장, 아니면 -1출력
# 떨어지는 경우 5,3 몫을 더해서 출력



# nums = [5,3]*5
# range(start, stop, step) step 은 간격
# result = [ n for i in range(len(nums),0,-1) for n in combinations(nums,i) if sum(n) == N]

# s = set()
# result = list(map(sorted,set([ n for i in range(len(nums),0,-1) for n in combinations(nums,i) if sum(n) == N])))
# print(result)

# 저 배열의 원소로만  더해서 N이 되도록 배열을 만들어 본다
def Run (arrK, target, parts=[], sum=0):
    if sum == target:
        yield  parts
    if sum >= target: return 
    for i,val in enumerate(arrK):
        remains = arrK[i + 1:]
        yield from Run(remains,target,parts+[val], sum+val)

a = list(Run([5,3],N))
print(a)

# N = int(input())
# dibi = N // 5
# N %= 5
# res = 0
# while dibi > -1:
#     if N % 3 == 0:
#         res = N // 3
#         N = N % 3
#         break
    
#     dibi -= 1
#     N += 5
# print((N==0) and (res+dibi) or -1)