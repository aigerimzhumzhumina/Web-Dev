N = int(input())
array = list(map(int, input().split()))
even_numbers = [x for x in array if x % 2 == 0]
print(*even_numbers)
