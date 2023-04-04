from SRT import SRT
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')

print("!!!")
srt = SRT(f"{sys.argv[1]}", f"{sys.argv[2]}")
depRe = f"{sys.argv[3]}" # 출발
arrRe = f"{sys.argv[4]}" # 도착
dateRe = f"{sys.argv[5]}" # 날짜 (yyyymmdd)
timeRe = f"{sys.argv[6]}" # 시간 (HHMMSS)
trains = srt.search_train(depRe, arrRe, dateRe, timeRe, available_only=False)
print(trains)
# reservation = srt.reserve(trains[0])
# print(reservation)
# 결과 :  [[SRT] 11월 06일, 수서~부산(20:00~22:23) 특실 매진, 일반실 .....

# import time
# flag = False
# i = 0

import time
while True:
    print (u"Message")
    time.sleep(1)

# # 루프 시작

# while flag == False:
#     try:
#         i += 1
#         time.sleep(1)
#         print(f"{i}번째 시도")
#         reservation = srt.reserve(trains[0])
#         print(reservation)
#         flag = True
       
#     except:
#         pass