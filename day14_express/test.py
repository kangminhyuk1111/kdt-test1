from SRT import SRT
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')

# 2196982283 , rkdglqkr12@

def getUserData(memberNumber,memberPassword,dep,arr,date,time):
    global srt
    global depRe
    global arrRe
    global dateRe
    global timeRe
    global trains
    srt = SRT(f"{memberNumber}", f"{memberPassword}")
    depRe = f"{dep}" # 출발
    arrRe = f"{arr}" # 도착
    dateRe = f"{date}" # 날짜 (yyyymmdd)
    timeRe = f"{time}" # 시간 (HHMMSS)
    trains = srt.search_train(depRe, arrRe, dateRe, timeRe, available_only=False)
    print(trains)

def reservationSRTrain(getArrNum: int):
    global trains
    reservation = srt.reserve(trains[getArrNum])
    print(reservation)
# 기차 검색
# sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4],sys.argv[5],sys.argv[6]

if __name__ == "__main__":  
    getUserData(sys.argv[1],sys.argv[2],sys.argv[3],sys.argv[4],sys.argv[5],sys.argv[6])
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
