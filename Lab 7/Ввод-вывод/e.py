s = 109
v = int(input())
t = int(input())
otmetka = (v * t) % s
print(otmetka if otmetka >= 0 else s + otmetka)