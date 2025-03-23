n = int(input())
arr = list(map(int, input().split()))
print(sum(1 for i in range(1, n) if arr[i] > arr[i - 1]))
