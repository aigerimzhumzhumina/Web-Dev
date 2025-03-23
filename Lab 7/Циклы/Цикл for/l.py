x = input()
chislo = 0
count = 0
for i in x[::-1]:
    chislo+=int(i)*(2**count)
    count+=1
print(chislo)
