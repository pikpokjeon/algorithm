# 촌수계산 https://www.acmicpc.net/problem/2644

import sys 
from collections import deque

ppl = int(input())
person1, person2 = map(int, input().split())
relcount = int(input())

arr = [[] for _ in range(ppl+1)]

for i in range(relcount):
    a, b = map(int, input().split())
    arr[a].append(b)
    arr[b].append(a)
    print(a,b)

for i in arr:
    i.sort()

visited = [0] * (ppl+1)
def bfs(s):
    q = deque()
    q.append(s)
    visited[s] = 1
    print(s, end = ' ')
    while q:
        print(list(q))
        at = q.popleft()
        for w in arr[at]:
            if not visited[w]:
                visited[w] = 1
                q.append(w)
                print(w, end = ' ')
                print(list(q))



bfs(1)

