x = int(input())
arr = []
for i in range(1, x+1):
    if x % i == 0:
        arr.append(i)
for element in arr:
    print(element, end = " ")
