# 문제
# 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.

# 입력
# 첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 주어지는 단어의 길이는 1,000,000을 넘지 않는다.

# 출력
# 첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.
print(ord(u"a"))
print(ord(u"A"))

# 문자열을 소문자로 하고 쏘팅 
# (사실 대문자로 출력해야해서 대문자로 바꾸는게 옳다)
# 쏘팅도 사실 필요가 없다
S = sorted(input().lower())

# 중복제거 셋 생성
SET = list(set(S))
# 구한 알파벳들을 객체에 키로 저장
D = {}
for A in SET:
    D[A] = 0





# 문자열 길이만큼 돌면서 객체 값에 +=1 
for alpha in SET:
    for i in range(len(S)):
        if S[i] == alpha:
            D[alpha] +=1
# (위 코드를 아래처럼 하면 한번에 풀 수 있다)
for character in S:
    if character in D.keys():
        D[character] += 1
    else:
        # 만약 알파벳이 있는데 딕셔너리에 추가 안된경우
        # 존재하니 1로 초기화해준다
        D[character] = 1

# 2차원 무언가인데 그냥 배열처럼 쓸수 있다
# D.items()
# 여기서 밸류가 가장 큰 것을 고른다
answer = -1
MAX = max(D.values())

count = 0
a = -1
for k, v in D.items():
    if MAX == v:
        count += 1
        a = k
if count >= 2 : print('?')
elif count == 1: print(a.upper())



