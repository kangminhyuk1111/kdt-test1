from SRT import SRT
import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')

# 2196982283 , rkdglqkr12@

def getUserData(memberNumber,memberPassword,dep,arr,date,time,zero):
    srt = SRT(f"{memberNumber}", f"{memberPassword}")
    dep = f"{dep}" # 출발
    arr = f"{arr}" # 도착
    date = f"{date}" # 날짜 (yyyymmdd)
    time = f"{time}" # 시간 (HHMMSS)
    trains = srt.search_train(dep, arr, date, time, available_only=False)
    print(trains)
# 기차 검색
# sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4],sys.argv[5],sys.argv[6]

if __name__ == "__main__":  
    getUserData(sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4],sys.argv[5],sys.argv[6],sys.argv[7])

# 결과 :  [[SRT] 11월 06일, 수서~부산(20:00~22:23) 특실 매진, 일반실 .....

# import time
# flag = False
# i = 0

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
