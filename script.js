// 앱 상태 관리
let currentScenario = '';
let currentOrder = [];
let soundEnabled = true;
let progress = 0;

// 시나리오별 메뉴 데이터
const scenarioData = {
    cafe: {
        title: '카페',
        menuTitle: '음료 메뉴',
        items: [
            { name: '아메리카노', price: 4500, icon: '☕' },
            { name: '카페라떼', price: 5000, icon: '🥛' },
            { name: '카푸치노', price: 5000, icon: '☕' },
            { name: '에스프레소', price: 3500, icon: '☕' },
            { name: '카페모카', price: 5500, icon: '🍫' },
            { name: '녹차라떼', price: 5500, icon: '🍵' },
            { name: '딸기스무디', price: 6500, icon: '🍓' },
            { name: '망고스무디', price: 6500, icon: '🥭' },
            { name: '오렌지주스', price: 4000, icon: '🍊' },
            { name: '사과주스', price: 4000, icon: '🍎' },
            { name: '레몬에이드', price: 4500, icon: '🍋' },
            { name: '아이스티', price: 3500, icon: '🧊' }
        ],
        completionMessage: '음료가 준비되고 있습니다. 잠시만 기다려주세요!'
    },
    mart: {
        title: '마트',
        menuTitle: '상품 목록',
        items: [
            { name: '우유 1L', price: 2500, icon: '🥛' },
            { name: '빵', price: 3000, icon: '🍞' },
            { name: '계란 10개', price: 4000, icon: '🥚' },
            { name: '사과 1kg', price: 5000, icon: '🍎' },
            { name: '바나나 1kg', price: 3000, icon: '🍌' },
            { name: '오렌지 1kg', price: 6000, icon: '🍊' },
            { name: '양파 1kg', price: 2000, icon: '🧅' },
            { name: '감자 1kg', price: 3000, icon: '🥔' },
            { name: '당근 1kg', price: 2500, icon: '🥕' },
            { name: '고구마 1kg', price: 4000, icon: '🍠' },
            { name: '치킨 1kg', price: 15000, icon: '🍗' },
            { name: '돼지고기 500g', price: 8000, icon: '🥩' }
        ],
        completionMessage: '상품이 준비되고 있습니다. 계산대에서 받아가세요!'
    },
    restaurant: {
        title: '분식점',
        menuTitle: '음식 메뉴',
        items: [
            { name: '떡볶이', price: 3500, icon: '🍢' },
            { name: '김밥', price: 3000, icon: '🍙' },
            { name: '라면', price: 4000, icon: '🍜' },
            { name: '순대', price: 3000, icon: '🌭' },
            { name: '어묵', price: 2000, icon: '🍢' },
            { name: '튀김', price: 4000, icon: '🍤' },
            { name: '김치볶음밥', price: 5000, icon: '🍚' },
            { name: '제육볶음', price: 6000, icon: '🥩' },
            { name: '된장찌개', price: 5000, icon: '🍲' },
            { name: '김치찌개', price: 5000, icon: '🍲' },
            { name: '계란말이', price: 3000, icon: '🍳' },
            { name: '시래기국', price: 4000, icon: '🍲' }
        ],
        completionMessage: '음식이 준비되고 있습니다. 잠시만 기다려주세요!'
    },
    movie: {
        title: '영화관',
        menuTitle: '영화 목록',
        items: [
            { name: '액션영화', price: 12000, icon: '🎬' },
            { name: '로맨스영화', price: 12000, icon: '💕' },
            { name: '코미디영화', price: 12000, icon: '😂' },
            { name: '공포영화', price: 12000, icon: '👻' },
            { name: '애니메이션', price: 10000, icon: '🎨' },
            { name: '다큐멘터리', price: 10000, icon: '📹' },
            { name: '팝콘', price: 5000, icon: '🍿' },
            { name: '나초', price: 4000, icon: '🌽' },
            { name: '콜라', price: 3000, icon: '🥤' },
            { name: '사이다', price: 3000, icon: '🥤' },
            { name: '오렌지주스', price: 3500, icon: '🍊' },
            { name: '아이스크림', price: 2500, icon: '🍦' }
        ],
        completionMessage: '영화 예매가 완료되었습니다. 상영시간을 확인해주세요!'
    },
    subway: {
        title: '지하철',
        menuTitle: '교통카드 충전',
        items: [
            { name: '1,000원 충전', price: 1000, icon: '💳' },
            { name: '2,000원 충전', price: 2000, icon: '💳' },
            { name: '3,000원 충전', price: 3000, icon: '💳' },
            { name: '5,000원 충전', price: 5000, icon: '💳' },
            { name: '10,000원 충전', price: 10000, icon: '💳' },
            { name: '20,000원 충전', price: 20000, icon: '💳' },
            { name: '일반교통카드', price: 4000, icon: '💳' },
            { name: '학생교통카드', price: 4000, icon: '💳' },
            { name: '어린이교통카드', price: 4000, icon: '💳' },
            { name: '노인교통카드', price: 4000, icon: '💳' },
            { name: '장애인교통카드', price: 4000, icon: '💳' },
            { name: '임시교통카드', price: 5000, icon: '💳' }
        ],
        completionMessage: '교통카드 충전이 완료되었습니다. 안전한 여행 되세요!'
    }
};

// DOM 요소들
const screens = {
    mainMenu: document.getElementById('main-menu'),
    kioskScreen: document.getElementById('kiosk-screen'),
    paymentScreen: document.getElementById('payment-screen'),
    completionScreen: document.getElementById('completion-screen')
};

const elements = {
    scenarioTitle: document.getElementById('scenario-title'),
    menuTitle: document.getElementById('menu-title'),
    menuItems: document.getElementById('menu-items'),
    orderList: document.getElementById('order-list'),
    totalPrice: document.getElementById('total-price'),
    progressFill: document.getElementById('progress-fill'),
    paymentMessage: document.getElementById('payment-message'),
    completionMessage: document.getElementById('completion-message'),
    soundToggle: document.getElementById('sound-toggle')
};

const buttons = {
    backBtn: document.getElementById('back-btn'),
    payCash: document.getElementById('pay-cash'),
    payCard: document.getElementById('pay-card'),
    newOrder: document.getElementById('new-order'),
    backToMenu: document.getElementById('back-to-menu')
};

const audio = {
    buttonSound: document.getElementById('button-sound'),
    paymentSound: document.getElementById('payment-sound'),
    successSound: document.getElementById('success-sound'),
    errorSound: document.getElementById('error-sound')
};

// 사운드 효과 함수
function playSound(soundType) {
    if (!soundEnabled) return;
    
    try {
        switch(soundType) {
            case 'button':
                audio.buttonSound.currentTime = 0;
                audio.buttonSound.play();
                break;
            case 'payment':
                audio.paymentSound.currentTime = 0;
                audio.paymentSound.play();
                break;
            case 'success':
                audio.successSound.currentTime = 0;
                audio.successSound.play();
                break;
            case 'error':
                audio.errorSound.currentTime = 0;
                audio.errorSound.play();
                break;
        }
    } catch (error) {
        console.log('사운드 재생 중 오류:', error);
    }
}

// 화면 전환 함수
function showScreen(screenName) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    screens[screenName].classList.add('active');
}

// 메뉴 아이템 생성 함수
function createMenuItem(item) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item-btn';
    menuItem.innerHTML = `
        <div class="menu-item-name">${item.icon} ${item.name}</div>
        <div class="menu-item-price">${item.price.toLocaleString()}원</div>
    `;
    
    menuItem.addEventListener('click', () => {
        playSound('button');
        addToOrder(item);
        updateProgress();
    });
    
    return menuItem;
}

// 주문에 아이템 추가
function addToOrder(item) {
    const existingItem = currentOrder.find(orderItem => orderItem.name === item.name);
    
    if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
    } else {
        currentOrder.push({
            ...item,
            quantity: 1,
            totalPrice: item.price
        });
    }
    
    updateOrderDisplay();
    updateTotalPrice();
}

// 주문 표시 업데이트
function updateOrderDisplay() {
    if (currentOrder.length === 0) {
        elements.orderList.innerHTML = '<p class="empty-order">주문한 상품이 없습니다</p>';
        return;
    }
    
    elements.orderList.innerHTML = currentOrder.map(item => `
        <div class="order-item">
            <span class="order-item-name">${item.icon} ${item.name} x${item.quantity}</span>
            <span class="order-item-price">${item.totalPrice.toLocaleString()}원</span>
        </div>
    `).join('');
}

// 총 금액 업데이트
function updateTotalPrice() {
    const total = currentOrder.reduce((sum, item) => sum + item.totalPrice, 0);
    elements.totalPrice.textContent = `${total.toLocaleString()}원`;
}

// 진행률 업데이트
function updateProgress() {
    const totalItems = scenarioData[currentScenario].items.length;
    const orderedItems = currentOrder.length;
    progress = Math.min((orderedItems / totalItems) * 100, 100);
    elements.progressFill.style.width = `${progress}%`;
}

// 시나리오 초기화
function initializeScenario(scenario) {
    currentScenario = scenario;
    currentOrder = [];
    progress = 0;
    
    const data = scenarioData[scenario];
    elements.scenarioTitle.textContent = data.title;
    elements.menuTitle.textContent = data.menuTitle;
    elements.progressFill.style.width = '0%';
    
    // 메뉴 아이템 생성
    elements.menuItems.innerHTML = '';
    data.items.forEach(item => {
        elements.menuItems.appendChild(createMenuItem(item));
    });
    
    // 주문 초기화
    updateOrderDisplay();
    updateTotalPrice();
    
    showScreen('kioskScreen');
}

// 결제 처리
function processPayment(paymentType) {
    if (currentOrder.length === 0) {
        alert('주문할 상품을 선택해주세요!');
        return;
    }
    
    playSound('payment');
    showScreen('paymentScreen');
    
    const messages = [
        '결제 정보를 확인하고 있습니다...',
        '카드 정보를 읽는 중입니다...',
        '결제 승인을 요청하고 있습니다...',
        '결제가 완료되었습니다!'
    ];
    
    let messageIndex = 0;
    elements.paymentMessage.textContent = messages[messageIndex];
    
    const messageInterval = setInterval(() => {
        messageIndex++;
        if (messageIndex < messages.length) {
            elements.paymentMessage.textContent = messages[messageIndex];
        } else {
            clearInterval(messageInterval);
            setTimeout(() => {
                playSound('success');
                showCompletionScreen();
            }, 1000);
        }
    }, 1500);
}

// 완료 화면 표시
function showCompletionScreen() {
    const data = scenarioData[currentScenario];
    elements.completionMessage.textContent = data.completionMessage;
    showScreen('completionScreen');
}

// 이벤트 리스너 설정
document.addEventListener('DOMContentLoaded', () => {
    // 메인 메뉴 아이템 클릭 이벤트
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            playSound('button');
            const scenario = item.dataset.scenario;
            initializeScenario(scenario);
        });
    });
    
    // 뒤로가기 버튼
    buttons.backBtn.addEventListener('click', () => {
        playSound('button');
        showScreen('mainMenu');
    });
    
    // 결제 버튼들
    buttons.payCash.addEventListener('click', () => {
        playSound('button');
        processPayment('cash');
    });
    
    buttons.payCard.addEventListener('click', () => {
        playSound('button');
        processPayment('card');
    });
    
    // 완료 화면 버튼들
    buttons.newOrder.addEventListener('click', () => {
        playSound('button');
        initializeScenario(currentScenario);
    });
    
    buttons.backToMenu.addEventListener('click', () => {
        playSound('button');
        showScreen('mainMenu');
    });
    
    // 사운드 토글
    elements.soundToggle.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        elements.soundToggle.textContent = soundEnabled ? '🔊 소리 켜기' : '🔇 소리 끄기';
        playSound('button');
    });
    
    // 키보드 접근성
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (screens.kioskScreen.classList.contains('active')) {
                buttons.backBtn.click();
            } else if (screens.paymentScreen.classList.contains('active')) {
                // 결제 중에는 ESC 무시
                return;
            } else if (screens.completionScreen.classList.contains('active')) {
                buttons.backToMenu.click();
            }
        }
    });
    
    // 터치 디바이스를 위한 터치 이벤트
    document.addEventListener('touchstart', (e) => {
        // 터치 시 시각적 피드백
        if (e.target.classList.contains('menu-item-btn') || 
            e.target.classList.contains('pay-btn') ||
            e.target.classList.contains('btn')) {
            e.target.style.transform = 'scale(0.95)';
        }
    });
    
    document.addEventListener('touchend', (e) => {
        // 터치 종료 시 원래 크기로 복원
        if (e.target.classList.contains('menu-item-btn') || 
            e.target.classList.contains('pay-btn') ||
            e.target.classList.contains('btn')) {
            setTimeout(() => {
                e.target.style.transform = '';
            }, 150);
        }
    });
    
    // 오디오 로드 오류 처리
    Object.values(audio).forEach(audioElement => {
        audioElement.addEventListener('error', () => {
            console.log('오디오 파일을 로드할 수 없습니다.');
        });
    });
});

// 페이지 로드 완료 시 초기화
window.addEventListener('load', () => {
    // 접근성 개선: 포커스 관리
    const focusableElements = document.querySelectorAll(
        'button, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid #667eea';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = '';
        });
    });
    
    // 화면 크기 변경 시 레이아웃 조정
    window.addEventListener('resize', () => {
        // 모바일에서 키보드가 올라올 때 대응
        if (window.innerHeight < window.outerHeight) {
            document.body.style.height = `${window.innerHeight}px`;
        } else {
            document.body.style.height = '100vh';
        }
    });
}); 