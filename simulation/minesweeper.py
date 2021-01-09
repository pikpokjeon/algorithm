# 지뢰찾기 https://www.acmicpc.net/problem/2140
# 시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
# 2 초	128 MB	1040	355	289	37.290%
# 문제
# 지뢰찾기는 N×N에서 이뤄지는 게임이다. 보드의 곳곳에는 몇 개의 지뢰가 숨겨져 있고, 지뢰가 없는 칸에는 그 칸과 인접(상하좌우 및 대각선)해 있는 8개의 칸들에 몇 개의 지뢰가 숨겨져 있는지에 대한 정보가 주어진다. 게이머는 게임을 진행하면서 보드의 칸을 하나씩 열게 된다. 만약 그 칸에 지뢰가 있다면 게임이 끝나고, 없는 경우에는 그 칸에 적혀있는 숫자, 즉 그 칸과 인접해 있는 8개의 칸들 중 몇 개의 칸에 지뢰가 있는지를 알 수 있게 된다.

# 이 문제는 보드의 테두리가 모두 열려있고, 그 외는 모두 닫혀있는 상태에서 시작한다. 예를 들어 다음과 같은 경우를 보자.

# 1	1	1	0	0
# 2	#	#	#	1
# 3	#	#	#	1
# 2	#	#	#	1
# 1	2	2	1	0
# #는 닫혀있는 칸을 나타낸다. 이러한 보드가 주어졌을 때, 닫혀있는 칸들 중 최대 몇 개의 칸에 지뢰가 묻혀있는지 알아내는 프로그램을 작성하시오. 위의 예와 같은 경우에는 다음과 같이 6개의 지뢰가 묻혀있을 수 있다.

# 1	1	1	0	0
# 2	*	 	 	1
# 3	*	*	*	1
# 2	*	*	 	1
# 1	2	2	1	0
# 입력
# 첫째 줄에 N(1≤N≤100)이 주어진다. 다음 N개의 줄에는 N개의 문자가 공백 없이 주어지는데, 이는 게임 보드를 의미한다.

# 출력
# 첫째 줄에 묻혀있을 수 있는 지뢰의 최대 개수를 출력한다.

from pprint import pprint

N = int(input())
mp = []
for _ in range(N):
    line = list(map(str,input()))
    for i in range(N):
        if line[i] != '#':
            line[i] = int(line[i])
    mp.append(line)
# print(N,mp,line)


#상하좌우대각선 방향 배열을 만든다
mv = [[1,-1],[1,0],[1,1],[0,-1],[0,1],[-1,-1],[-1,0],[-1,1]]
# 지뢰 맵 배열에서 0을 찾는다
def findZero():
    for y in range(N):
        for x in range(N):
            if mp[y][x] == 0:
                findEmpty(y,x)
    countStar()

# 0 근처 팔방 별들을 찾아본다
def findEmpty(y,x):
    for move in mv:
        dy = y + move[0]
        dx = x + move[1]
# 0을 기준으로 8방 부분에 별 부분을 _로 바꾼다
        if N>dy >= 0 and N> dx >= 0:
            if mp[dy][dx] == '#':
                mp[dy][dx] = ''
# 남아있는 별의 개수를 센다.
def countStar():
    count = 0
    for y in range(N):
        for x in range(N):
            if mp[y][x] == '#':
                count = count + 1
    print(count)

findZero()
# pprint(mp, width = N *10)
