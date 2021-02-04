t = int(input())

for tc in range(1,t+1):
   n = int(input())
   nums = list(map(int,input().split()))

   for i in range(n):
      for k in range(n-1):
         if not k+1 > n:
            if nums[k] > nums[k+1]:
               nums[k],nums[k+1] = nums[k+1], nums[k]

   answer = nums[n-1] - nums[0]
   print(answer)