from SRT import SRT
import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')

# 2196982283 , rkdglqkr12@

srt = SRT("2196982283", "rkdglqkr12@")
dep = '수서' # 출발
arr = '동대구' # 도착
date = '20230330' # 날짜 (yyyymmdd)
time = '175000' # 시간 (HHMMSS)

# 기차 검색

trains = srt.search_train(dep, arr, date, time, available_only=False)
print(trains)

# 결과 :  [[SRT] 11월 06일, 수서~부산(20:00~22:23) 특실 매진, 일반실 .....

import time
flag = False
i = 0

# import time
# import sys
# while True:
#     print (u"Message")
#     sys.stdout.flush()
#     time.sleep(1)

# 루프 시작

# while flag == False:
#     try:
#         i += 1
#         time.sleep(1)
#         print(f"{i}번째 시도")
#         sys.stdout.flush()
#         reservation = srt.reserve(trains[0])
#         print(reservation)
#         sys.stdout.flush()
#         flag = True
       
#     except:
#         pass
