n = int(input())
arr = [n]
for i in range(n):
    arr.append(int(input()))
for i in range(n):
    if i % 2 ==0:
        print(arr[i])
