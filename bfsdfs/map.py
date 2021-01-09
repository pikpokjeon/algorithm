

N = int(input())
G = [[0]*N for _ in range(N+1)]

for i in range(N):
    place = list(input())

    for idx, val in enumerate(place):
        G[i][idx] = int(val)
        # print(place) 
        # if place[a] == '1':
        #     G[i].append(a)

print(G)

visit = [[0]*N for _ in range(N)]

# 총 단지수/ 각 단지내 집의 수를 오름차순으로.

answer = [[]for _ in range(N)] 
# x 랑 ys
move = [[0,1],[0,-1],[1,0],[-1,0]]
def dfs(y,x,idx):
    # 방문표시
    visit[y][x] = idx
    G[y][x] = 0
    # print('start',visit)

   
        # 주변 움직일 좌표 탐색
    for mv in move:
        
        moveX = mv[1] + x
        moveY = mv[0] + y
        print(x,y,mv)
        if (moveX < 0 or moveX > N - 1 or moveY < 0 or moveY > N - 1): continue
        if G[moveY][moveX] == 1 and not visit[moveY][moveX]: 
            # print('x',moveX,'y', moveY, 'idx', idx)
            dfs(moveY,moveX,idx)

# N 번 만큼 가로 세로 돌기
def repeat(n):
    idx = max(map(max, visit)) + 1  # 구역번호
    for y in range(n):
        for x in range(n):
            if G[y][x] != 0 and not visit[y][x]:
                dfs(y,x,idx)
                return 

# def find():




          
repeat(N)
from pprint import pprint
pprint(visit, width=70)
pprint(G, width=70)