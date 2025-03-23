x = int(input())
arr = []
for i in range(2, x + 1 ):
    if x % i == 0:
        arr.append(i)
print(min(arr)) 
