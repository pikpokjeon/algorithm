# 문제
# 대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 당신은 그들에게 슬픈 진실을 알려줘야 한다.

# 입력
# 첫째 줄에는 테스트 케이스의 개수 C가 주어진다.

# 둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고, 이어서 N명의 점수가 주어진다. 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

# 출력
# 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.
from collections import deque

# 테스트 개수
C = int(input())

# 테스트 케이스 별 연산 시작
for _ in range(C):
    # 인원수와 점수들
    S = deque(map(int,input().split()))
    # 인원수 
    N = S.popleft()
    # popleft 는 비용이 비싸서 최소화 하기 위해  avg = sum(s)-s[0] 인원 수를 빼주고 평균을 구한다
    # 점수의 평균을 구한다
    Avg = sum(S) // N
    # 평균값 보다 점수가 큰 학생수를 구한다
    scount = 0
    for p in S:
        if p > Avg:
            scount += 1
    # 편균점수이상/전체학생수 에 100을 곱해준다
    per = scount/N * 100
    # 소숫점 셋째자리까지 출력한다
    answer = '%.3f'%round(per,3)
    print(f'{answer}%')
    print('%.3f'%round(per,3) + '%')