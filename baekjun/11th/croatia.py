al = {'c=': 0,
      'c-': 0,
      'dz=': 0,
      'd-': 0,
      'lj': 0,
      'nj': 0,
      's=': 0,
      'z=': 0, }
word = input()
arr = []
repl = word
count = 0
for i in al.keys():
    while i in repl:
        al[i] += 1
        repl = repl.replace(i, " ", 1)
        count += 1
print(sum(al.values()) + len(repl.replace(' ', '')))
