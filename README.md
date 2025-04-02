<h4 align="center"> 
<img src="https://github.com/user-attachments/assets/581a0b9b-ea95-4651-a6db-64925e60a0bf" alt="long" border="0">
</h4>

<h1 align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/node.js-5FA04E?style=flat&logo=nodedotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white"/>
<br/>
<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=flat&logo=amazonec2&logoColor=white"/>
<img src="https://img.shields.io/badge/Amazon S3-569A31?style=flat&logo=amazons3&logoColor=white"/>
  
</h1>

# 📱Checkstagram  Express 백엔드
AI 기반 셀럽 SNS 사전 체크 솔루션 앱인 Checkstagram의 백엔드 서버입니다. 사용자의 SNS 로그인, 피드 조회 및 업로드 기능을 제공합니다.

## 📍 주요 기능
> Checkstagram 앱의 전체적인 기능 중 express 백엔드는 1번, 2번, 3번에 해당하는 환경을 제공합니다.
1. 피드 업로드
2. 전체 피드 조회
3. 사용자가 AI 모델을 통해 사전에 체크 받고 싶은 항목을 커스텀 할 수 있도록 카테고리 제공
4. 이미지/영상 업로드 전 YOLOv8 + ResNet18 기반의 컴퓨터 비전 모델이 객체를 탐지하고 탐지된 객체의 세부 브랜드를 분류합니다.
5. Amazon S3에 이미지/영상 분석 결과 파일 업로드 후 사용자에게 검사 결과를 제공합니다.
6. 피드 텍스트 업로드 전 BERT 기반의 자연어 처리 모델이 부적절한 문장을 감지하여 사용자에게 안내합니다. 

## 📍 API 목록표
> 자세한 API 명세는 링크를 확인해 주세요! [API 명세서 Link](https://blossom-fisherman-fd5.notion.site/API-1ae293e08aa2816cbb18f63cda81efa8?pvs=4)

|Route|기능|HTTP 메서드|Endpoint|
|---|---|---|---|
|auth|로그인|POST|/auth/login||
|feeds|피드 조회|GET|/feeds|
|feeds|피드 업로드|POST|/feeds/:username|
|user|검사 항목 조회|GET|/user/setcheck/:username|
|user|검사 항목 설정|PUT|/user/setcheck/:username|

## 📁 디렉토리 구조
```
Checkstagram_Backend/
├── app.js               # 메인 서버 설정
├── routes/              # 라우터
├── controllers/         # 비즈니스 로직
├── models/              # Mongoose 스키마
├── data/                # MongoDB 쿼리 관련 로직
├── middlewares/         # 에러 핸들러, S3 업로드 미들웨어
├── config/              # 외부 서비스(DB, AWS) 설정 및 초기화
└── .env                 # 환경 변수(비공개)
```

### ⚙️ 실행 방법
> Express 백엔드 서버의 경우 AWS EC2 환경에서 배포 및 실행되도록 구성되어 있습니다.
>
> README 수정 날짜 기준(📅 25.04.03)

### 🖥️ 로컬 실행 방법

1. 프로젝트 클론
```
git clone https://github.com/checkmate12345/Checkstagram_Backend.git
cd Checkstagram_Backend
```

2. 의존성 설치
```
npm install
```

3. 환경 변수 파일 생성(비공개)

   루트 디렉토리에 .env 파일을 생성하고 아래와 같은 환경 변수를 설정하세요. 하단의 내용은 **예시**입니다!

```
# 데이터베이스 설정
DATABASE_URL=your-mongodb-url
DATABASE_NAME=checkstagram-db

# 서버 포트
BACK_PORT=4000

# AWS S3 설정
AWS_ACCESS_KEY=your-aws-access-key
AWS_SECRET_KEY=your-aws-secret-key
AWS_BUCKET_NAME=your-s3-bucket-name
AWS_BUCKET_REGION=ap-northeast-2
AWS_BUCKET_DIRECTORY=checkstagram/uploads

```

5. 서버 실행
```
npm start
```
