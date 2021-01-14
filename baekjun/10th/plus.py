N = int(input())

# a+b = aa   ba => b+a =cc   ac
cycle = 0

# N 이 최종이 될 때 까지
r = []
count = 0
def round (n): # n = 21이라면
    global count
    # 최종 1회 초과 돌아서 같은 숫자이면 리턴
    if n == N and count > 0: return n
    # 26 => 1
    # 2자리수일 대 오른쪽에 있는 숫자를 왼쪽으로
    left = n % 10
    total = 0
    while n:
        # 26인 경우 토탈에 6을 더해줌
        # 2에서 10을 나눈 나머지 2를 토탈에 더해줌
        # 최종적으로 토탈은 6.2
        # 한자리 수이더라도 오른쪽자리수는 나머지 값과 같음
        total += (n%10)
        # 26에서 10을 나눈 몫인 2을 할당.
        # 2에서 10을 나눈 몫 0을 할당.
        n //= 10
        print('while',n,left,total)
    
    # 각 자리수를 합해준다
    ans = int(str(left)+str(total%10))
    count +=1

    # 이중포문으로 풀수 있다, 재귀를 사용하지 않아도.
    round(ans)
round(N)
print(count)
