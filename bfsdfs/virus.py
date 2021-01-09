import sys
from collections import deque
input = sys.stdin.readline

# 깊이 우선탐색
answer = []
def dfs(s):
    visit[s] = 1
    for w in G[s]:
        if not visit[w]:
            answer.append(w)
            dfs(w)
    
        
# 정점갯수, 간선개수, 탐색시작 정점 번호
v = int(input())
e = int(input())
# range 에 +1 을 하는 이유?? 
# 정점의 개수만큼 2차원배열 원소를 만들어준다
G = [[] for _ in range(v+1)]        
# 간선의 갯수만큼 인풋을 받는다
for i in range(e):                  
    # 노드 2개
    a, b = map(int, input().split())
    # 양방향이라 둘을 이여준다 1 2 의 경우 1배열에 2를, 2배열에 1을
    G[a].append(b)
    G[b].append(a)

# 정점의 개수만큼 배열 원소를 가진 2차원 배열내부 원소배열들을 오름차순으로
for i in G: 
    i.sort()
# 정점의 개수만큼 방문배열 원소를 만들어준다
visit = [0] * (v+1)
# 탐색시작 번호를 파라메터로
dfs(1) 
print(len(answer))
