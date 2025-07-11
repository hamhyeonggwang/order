# 키오스크 훈련 웹앱

장애 아동을 위한 키오스크 사용 훈련 웹애플리케이션입니다.

## 🎯 목적

실제 키오스크 환경을 시뮬레이션하여 장애 아동들이 다양한 상황에서 키오스크를 사용하는 방법을 학습할 수 있도록 도와줍니다.

## ✨ 주요 기능

### 🏪 5가지 시나리오
- **카페** ☕ - 음료 주문하기
- **마트** 🛒 - 물건 구매하기  
- **분식점** 🍜 - 음식 주문하기
- **영화관** 🎬 - 영화 예매하기
- **지하철** 🚇 - 교통카드 충전하기

### 🎵 사운드 효과
- 버튼 클릭음
- 결제 진행음
- 성공/완료음
- 오류음

### 💳 결제 시뮬레이션
- 현금/카드 결제 선택
- 실제 결제 과정 시뮬레이션
- 진행률 표시
- 완료 화면

### ♿ 접근성 기능
- 큰 버튼과 명확한 색상 대비
- 키보드 네비게이션 지원
- 고대비 모드 지원
- 모션 감소 모드 지원
- 반응형 디자인

## 🚀 사용법

1. **시나리오 선택**: 메인 화면에서 원하는 키오스크 시나리오를 선택합니다.
2. **메뉴 선택**: 각 시나리오별 메뉴에서 원하는 상품을 클릭하여 주문에 추가합니다.
3. **결제**: 주문이 완료되면 현금 또는 카드로 결제를 진행합니다.
4. **완료**: 결제가 완료되면 성공 화면을 확인하고 새로운 주문을 시작하거나 메인으로 돌아갑니다.

## 🛠️ 기술 스택

- **HTML5** - 시맨틱 마크업
- **CSS3** - 반응형 디자인 및 애니메이션
- **JavaScript (ES6+)** - 인터랙티브 기능
- **Web Audio API** - 사운드 효과

## 📱 반응형 디자인

- 데스크톱, 태블릿, 모바일 모든 기기에서 최적화
- 터치 디바이스 지원
- 다양한 화면 크기에 대응

## ♿ 접근성

- WCAG 2.1 AA 기준 준수
- 키보드만으로 모든 기능 사용 가능
- 스크린 리더 지원
- 고대비 모드 지원
- 모션 감소 설정 지원

## 🚀 배포 방법

### GitHub Pages 배포

1. GitHub에 저장소 생성
2. 프로젝트 파일들을 업로드
3. Settings > Pages에서 배포 설정

### Vercel 배포

1. Vercel 계정 생성
2. GitHub 저장소 연결
3. 자동 배포 설정

### 로컬 실행

```bash
# 프로젝트 클론
git clone [repository-url]

# 프로젝트 디렉토리로 이동
cd kiosk-training-app

# 로컬 서버 실행 (Python)
python -m http.server 8000

# 또는 Node.js 서버 사용
npx serve .
```

## 📁 프로젝트 구조

```
kiosk-training-app/
├── index.html          # 메인 HTML 파일
├── styles.css          # CSS 스타일
├── script.js           # JavaScript 기능
├── sounds/             # 사운드 파일들
│   ├── button-click.mp3
│   ├── payment.mp3
│   ├── success.mp3
│   └── error.mp3
└── README.md           # 프로젝트 설명서
```

## 🎨 디자인 특징

- **직관적인 인터페이스**: 큰 버튼과 명확한 아이콘
- **부드러운 애니메이션**: 사용자 경험 향상
- **일관된 색상 체계**: 브랜드 아이덴티티 유지
- **모던한 디자인**: 깔끔하고 현대적인 UI

## 🔧 커스터마이징

### 새로운 시나리오 추가

`script.js` 파일의 `scenarioData` 객체에 새로운 시나리오를 추가할 수 있습니다:

```javascript
newScenario: {
    title: '새로운 시나리오',
    menuTitle: '메뉴 제목',
    items: [
        { name: '상품명', price: 1000, icon: '🎯' }
    ],
    completionMessage: '완료 메시지'
}
```

### 사운드 변경

`sounds/` 디렉토리의 오디오 파일을 교체하여 다른 사운드 효과를 사용할 수 있습니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 문의

프로젝트에 대한 문의사항이나 제안사항이 있으시면 이슈를 생성해주세요.

---

**장애 아동을 위한 더 나은 디지털 경험을 만들어갑니다.** 🚀 