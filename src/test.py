rating = ['746070', '501478', '256972', '76970', '43192']
rate = [int(numeric_string) for numeric_string in rating]
s = 5
add = 0

for i in range(5):
    add += rate[i] * (s-i)
print(add/sum(rate))

