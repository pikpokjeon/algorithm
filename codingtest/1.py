from itertools import combinations
answer = 0
cal = ['+', '-']
a = set()
memo = [0]*(9999999)
numbers = []
total = []

def find(arr, n, zero):
	global total
    	
	if len(arr) == len(numbers):
		if sum(arr) == zero:
			# print(n,arr)
			total.append(arr)
			# print(total)
			return
		else: return
	
	for k in a:
		# if not memo[k]:
			# memo[k] = 1
			arr.append(k)
			find(arr, n + 1, 0)
			arr.pop()
			# memo[k] = 0
			# print(arr)
		# else: break


def solution(_numbers):
	global numbers
	global total
	numbers = _numbers
	for i in _numbers:
		a.add(i)
		a.add(i*-1)
	find([], 0, 0)
	print(len(total))
	
	return answer

nn = [1, 1, 1, 1]
solution(nn)
