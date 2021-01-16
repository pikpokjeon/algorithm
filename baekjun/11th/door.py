# https://www.acmicpc.net/problem/1475
# 9 나 6이 나오면 0.5씩 더해준다 답에서 반올림 해준다
import math

nums = {}
for i in range(0,10):
    nums[i] = 0

N = list(map(int,list((input()))))

count = 0

for n in N:
    if n == 9 or n == 6: nums[6] += 0.5
    else: nums[n] += 1
# if nums.values()

print(math.ceil(max(nums.values())))
