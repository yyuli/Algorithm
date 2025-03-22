candy = int(input())
answer = 0

for A in range(1, candy + 1):
    for B in range(1, candy + 1):
        for C in range(1, candy + 1):
            if A + B + C == candy:
                if A != 0 or B != 0 or C != 0:
                    if A >= B + 2:
                        if C % 2 == 0:
                            answer += 1
print(answer)