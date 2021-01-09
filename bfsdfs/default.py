import sys
from collections import deque
input = sys.stdin.readline

# 깊이 우선탐색
def dfs(s):
    visit[s] = 1
    print(s, end=' ')
    for w in G[s]:
        if not visit[w]:
            dfs(w)
        
            
# 너비 우선탐색
def bfs(s):
    # 양방향 큐인 덱을 생성해서 첫째 노드를 추가
    q= deque();q.append(s)
    # 첫째 노드 방문
    visit[s] = 1
    # 시작노드 처음 출력
    print(s, end=' ')
    # 댁에 요소가 있는경우
    while q:
        # 앞에서 빠진 원소가 현재 위치
        here = q.popleft()
        # 현재 노드 번째 배열에서
        for w in G[here]:
            # 현재노드에 있는 원소번째들이 방문을 하지 않은 경우
            if not visit[w]:
                # 방문으로 표시
                visit[w] = 1
                # 댁에 추가
                q.append(w)
                print(w, end=' ')

# 정점갯수, 간선개수, 탐색시작 정점 번호
v, e, s = map(int, input().split()) 
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
dfs(s) 
print( )
visit = [0] * (v+1)
bfs(s)