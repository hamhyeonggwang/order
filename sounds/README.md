# 사운드 파일 안내

이 디렉토리에는 키오스크 훈련 앱에서 사용되는 사운드 파일들이 포함됩니다.

## 필요한 사운드 파일들

- `button-click.mp3` - 버튼 클릭음
- `payment.mp3` - 결제 진행음  
- `success.mp3` - 성공/완료음
- `error.mp3` - 오류음

## 사운드 파일 추가 방법

### 1. 무료 사운드 사이트에서 다운로드
- [Freesound.org](https://freesound.org/)
- [Zapsplat](https://www.zapsplat.com/)
- [SoundBible](http://soundbible.com/)

### 2. 온라인 사운드 생성기 사용
- [Online Tone Generator](https://www.szynalski.com/tone-generator/)
- [BeepBox](https://www.beepbox.co/)

### 3. 권장 사운드 스펙
- **형식**: MP3 또는 WAV
- **길이**: 0.5-2초
- **볼륨**: 적당한 크기 (너무 크지 않게)
- **품질**: 44.1kHz, 128kbps 이상

## 사운드 없이 테스트하기

사운드 파일이 없어도 앱은 정상적으로 작동합니다. 브라우저에서 사운드 파일을 찾을 수 없을 때는 자동으로 무음으로 처리됩니다.

## 커스터마이징

다른 사운드 효과를 원한다면:
1. 원하는 사운드 파일을 이 디렉토리에 추가
2. `index.html`의 audio 태그 src 속성을 수정
3. 파일명이 다르다면 `script.js`의 오디오 참조도 함께 수정

## 접근성 고려사항

- 사운드가 없는 사용자를 위해 시각적 피드백도 함께 제공
- 사운드 토글 기능으로 사용자가 원할 때만 사운드 재생
- 갑작스러운 큰 소리 방지를 위해 적절한 볼륨 설정 