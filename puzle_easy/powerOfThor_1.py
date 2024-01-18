import sys
import math


light_x, light_y, tx, ty = [int(i) for i in input().split()]



while True:
    remaining_turns = int(input())  
    if light_y < ty:
        ty = ty-1
        print("N", end = "")
    elif light_y > ty:
        ty = ty+1
        print("S", end = "")
    if light_x < tx:
        tx = tx-1
        print("W", end = "")
    elif light_x > tx:
        tx = tx+1
        print("E", end = "")
    
    print("")