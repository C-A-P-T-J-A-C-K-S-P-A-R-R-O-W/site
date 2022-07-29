delta_frame = 2500
delta_small = 1500
frames = [-2540]
for i in range(3):
    frames.append(frames[-1]-delta_frame)
    frames.append(frames[-1]-delta_small)
frames[0]+=1000
frames.append(-15000)
print(frames)

