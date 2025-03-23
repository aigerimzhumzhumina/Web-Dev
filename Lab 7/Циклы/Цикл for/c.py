import math

a,b = int(input()),int(input())
for i in range (a, b):
    if math.sqrt(i).is_integer():
        print(i, end = ' ')
