// 앱 상태 관리
let currentScenario = '';
let currentOrder = [];
let soundEnabled = true;
let progress = 0;
let serviceType = 'dine-in'; // 매장이용/포장 선택
let selectedMovie = null;
let selectedTime = null;
let selectedSeat = null;

// 시나리오별 메뉴 데이터
const scenarioData = {
    cafe: {
        title: '카페',
        menuTitle: '음료 메뉴',
        showServiceType: true,
        items: [
            { name: '아메리카노', price: 4500, icon: '☕', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop' },
            { name: '카페라떼', price: 5000, icon: '🥛', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=300&h=200&fit=crop' },
            { name: '카푸치노', price: 5000, icon: '☕', image: 'https://images.unsplash.com/photo-1572442388796-11668a64e546?w=300&h=200&fit=crop' },
            { name: '에스프레소', price: 3500, icon: '☕', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&h=200&fit=crop' },
            { name: '카페모카', price: 5500, icon: '🍫', image: 'https://images.unsplash.com/photo-1572442388796-11668a64e546?w=300&h=200&fit=crop' },
            { name: '녹차라떼', price: 5500, icon: '🍵', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=200&fit=crop' },
            { name: '딸기스무디', price: 6500, icon: '🍓', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=200&fit=crop' },
            { name: '망고스무디', price: 6500, icon: '🥭', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=200&fit=crop' },
            { name: '오렌지주스', price: 4000, icon: '🍊', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=200&fit=crop' },
            { name: '사과주스', price: 4000, icon: '🍎', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=200&fit=crop' },
            { name: '레몬에이드', price: 4500, icon: '🍋', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=200&fit=crop' },
            { name: '아이스티', price: 3500, icon: '🧊', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=200&fit=crop' }
        ],
        completionMessage: '음료가 준비되고 있습니다. 잠시만 기다려주세요!'
    },
    mart: {
        title: '마트',
        menuTitle: '상품 목록',
        showServiceType: false,
        items: [
            { name: '우유 1L', price: 2500, icon: '🥛', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=200&fit=crop' },
            { name: '빵', price: 3000, icon: '🍞', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop' },
            { name: '계란 10개', price: 4000, icon: '🥚', image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=300&h=200&fit=crop' },
            { name: '사과 1kg', price: 5000, icon: '🍎', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=200&fit=crop' },
            { name: '바나나 1kg', price: 3000, icon: '🍌', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=200&fit=crop' },
            { name: '오렌지 1kg', price: 6000, icon: '🍊', image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=300&h=200&fit=crop' },
            { name: '양파 1kg', price: 2000, icon: '🧅', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=200&fit=crop' },
            { name: '감자 1kg', price: 3000, icon: '🥔', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=200&fit=crop' },
            { name: '당근 1kg', price: 2500, icon: '🥕', image: 'https://images.unsplash.com/photo-1447175008436-170170d88666?w=300&h=200&fit=crop' },
            { name: '고구마 1kg', price: 4000, icon: '🍠', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=200&fit=crop' },
            { name: '치킨 1kg', price: 15000, icon: '🍗', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=300&h=200&fit=crop' },
            { name: '돼지고기 500g', price: 8000, icon: '🥩', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=300&h=200&fit=crop' }
        ],
        completionMessage: '상품이 준비되고 있습니다. 계산대에서 받아가세요!'
    },
    restaurant: {
        title: '분식점',
        menuTitle: '음식 메뉴',
        showServiceType: true,
        items: [
            { name: '떡볶이', price: 3500, icon: '🍢', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop' },
            { name: '김밥', price: 3000, icon: '🍙', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop' },
            { name: '라면', price: 4000, icon: '🍜', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop' },
            { name: '순대', price: 3000, icon: '🌭', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop' },
            { name: '어묵', price: 2000, icon: '🍢', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop' },
            { name: '튀김', price: 4000, icon: '🍤', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop' },
            { name: '김치볶음밥', price: 5000, icon: '🍚', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop' },
            { name: '제육볶음', price: 6000, icon: '🥩', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop' },
            { name: '된장찌개', price: 5000, icon: '🍲', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop' },
            { name: '김치찌개', price: 5000, icon: '🍲', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop' },
            { name: '계란말이', price: 3000, icon: '🍳', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop' },
            { name: '시래기국', price: 4000, icon: '🍲', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop' }
        ],
        completionMessage: '음식이 준비되고 있습니다. 잠시만 기다려주세요!'
    },
    burger: {
        title: '햄버거 가게',
        menuTitle: '햄버거 메뉴',
        showServiceType: true,
        items: [
            { name: '치즈버거', price: 6500, icon: '🍔', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop' },
            { name: '불고기버거', price: 7000, icon: '🍔', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop' },
            { name: '치킨버거', price: 6000, icon: '🍔', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop' },
            { name: '더블버거', price: 8500, icon: '🍔', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop' },
            { name: '감자튀김', price: 3000, icon: '🍟', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop' },
            { name: '치킨너겟', price: 4000, icon: '🍗', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop' },
            { name: '콜라', price: 2000, icon: '🥤', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=200&fit=crop' },
            { name: '사이다', price: 2000, icon: '🥤', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=200&fit=crop' },
            { name: '아이스크림', price: 2500, icon: '🍦', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=200&fit=crop' },
            { name: '애플파이', price: 3000, icon: '🥧', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=200&fit=crop' }
        ],
        completionMessage: '햄버거가 준비되고 있습니다. 잠시만 기다려주세요!'
    },
    movie: {
        title: '영화관',
        menuTitle: '영화 목록',
        showServiceType: false,
        movies: [
            { 
                name: '어벤저스: 엔드게임', 
                price: 12000, 
                icon: '🎬', 
                image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=400&fit=crop',
                genre: '액션',
                duration: '181분',
                rating: '12세이상'
            },
            { 
                name: '타이타닉', 
                price: 12000, 
                icon: '💕', 
                image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=400&fit=crop',
                genre: '로맨스',
                duration: '194분',
                rating: '12세이상'
            },
            { 
                name: '겨울왕국 2', 
                price: 10000, 
                icon: '🎨', 
                image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=400&fit=crop',
                genre: '애니메이션',
                duration: '103분',
                rating: '전체관람가'
            },
            { 
                name: '스파이더맨: 노 웨이 홈', 
                price: 12000, 
                icon: '🎬', 
                image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=400&fit=crop',
                genre: '액션',
                duration: '148분',
                rating: '12세이상'
            },
            { 
                name: '듄', 
                price: 12000, 
                icon: '🎬', 
                image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=400&fit=crop',
                genre: 'SF',
                duration: '155분',
                rating: '12세이상'
            },
            { 
                name: '미니언즈', 
                price: 10000, 
                icon: '🎨', 
                image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=400&fit=crop',
                genre: '애니메이션',
                duration: '87분',
                rating: '전체관람가'
            }
        ],
        snacks: [
            { name: '팝콘', price: 5000, icon: '🍿', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=200&fit=crop' },
            { name: '나초', price: 4000, icon: '🌽', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=200&fit=crop' },
            { name: '콜라', price: 3000, icon: '🥤', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=200&fit=crop' },
            { name: '사이다', price: 3000, icon: '🥤', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=200&fit=crop' },
            { name: '오렌지주스', price: 3500, icon: '🍊', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&h=200&fit=crop' },
            { name: '아이스크림', price: 2500, icon: '🍦', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=200&fit=crop' }
        ],
        completionMessage: '영화 예매가 완료되었습니다. 상영시간을 확인해주세요!'
    },
    subway: {
        title: '지하철',
        menuTitle: '교통카드 충전',
        showServiceType: false,
        items: [
            { name: '1,000원 충전', price: 1000, icon: '💳', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop' },
            { name: '2,000원 충전', price: 2000, icon: '💳', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop' },
            { name: '3,000원 충전', price: 3000, icon: '💳', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop' },
            { name: '5,000원 충전', price: 5000, icon: '💳', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop' },
            { name: '10,000원 충전', price: 10000, icon: '💳', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop' },
            { name: '20,000원 충전', price: 20000, icon: '💳', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop' },
            { name: '일반교통카드', price: 4000, icon: '💳', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop' },
            { name: '학생교통카드', price: 4000, icon: '💳', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop' },
            { name: '어린이교통카드', price: 4000, icon: '💳', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop' },
            { name: '노인교통카드', price: 4000, icon: '💳', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop' },
            { name: '장애인교통카드', price: 4000, icon: '💳', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop' },
            { name: '임시교통카드', price: 5000, icon: '💳', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop' }
        ],
        completionMessage: '교통카드 충전이 완료되었습니다. 안전한 여행 되세요!'
    }
};

// 영화 시간대 데이터
const movieTimeSlots = [
    '09:00', '10:30', '12:00', '13:30', '15:00', '16:30', '18:00', '19:30', '21:00', '22:30'
];

// DOM 요소들
const screens = {
    mainMenu: document.getElementById('main-menu'),
    kioskScreen: document.getElementById('kiosk-screen'),
    movieSelectionScreen: document.getElementById('movie-selection-screen'),
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
    soundToggle: document.getElementById('sound-toggle'),
    serviceTypeSelector: document.getElementById('service-type-selector'),
    dineInBtn: document.getElementById('dine-in-btn'),
    takeoutBtn: document.getElementById('takeout-btn'),
    selectedMovieInfo: document.getElementById('selected-movie-info'),
    timeSlots: document.getElementById('time-slots'),
    seatMap: document.getElementById('seat-map'),
    movieOrderList: document.getElementById('movie-order-list'),
    movieTotalPrice: document.getElementById('movie-total-price'),
    movieProgressFill: document.getElementById('movie-progress-fill')
};

const buttons = {
    backBtn: document.getElementById('back-btn'),
    backToMenuBtn: document.getElementById('back-to-menu-btn'),
    payCash: document.getElementById('pay-cash'),
    payCard: document.getElementById('pay-card'),
    moviePayCash: document.getElementById('movie-pay-cash'),
    moviePayCard: document.getElementById('movie-pay-card'),
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
        ${item.image ? `<img src="${item.image}" alt="${item.name}" class="menu-item-image" onerror="this.style.display='none'">` : ''}
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

// 영화 아이템 생성 함수
function createMovieItem(movie) {
    const movieItem = document.createElement('div');
    movieItem.className = 'menu-item-btn';
    movieItem.innerHTML = `
        <img src="${movie.image}" alt="${movie.name}" class="menu-item-image" onerror="this.style.display='none'">
        <div class="menu-item-name">${movie.icon} ${movie.name}</div>
        <div class="menu-item-price">${movie.price.toLocaleString()}원</div>
        <div style="font-size: 0.8rem; color: #666; margin-top: 5px;">
            ${movie.genre} | ${movie.duration} | ${movie.rating}
        </div>
    `;
    
    movieItem.addEventListener('click', () => {
        playSound('button');
        selectMovie(movie);
    });
    
    return movieItem;
}

// 영화 선택 함수
function selectMovie(movie) {
    selectedMovie = movie;
    elements.selectedMovieInfo.innerHTML = `
        <img src="${movie.image}" alt="${movie.name}" onerror="this.style.display='none'">
        <h3>${movie.name}</h3>
        <p>${movie.genre} | ${movie.duration} | ${movie.rating}</p>
        <p>가격: ${movie.price.toLocaleString()}원</p>
    `;
    
    // 시간대 버튼 생성
    elements.timeSlots.innerHTML = '';
    movieTimeSlots.forEach(time => {
        const timeBtn = document.createElement('button');
        timeBtn.className = 'time-slot-btn';
        timeBtn.textContent = time;
        timeBtn.addEventListener('click', () => {
            playSound('button');
            selectTime(time);
            document.querySelectorAll('.time-slot-btn').forEach(btn => btn.classList.remove('selected'));
            timeBtn.classList.add('selected');
            updateMovieOrderDisplay();
        });
        elements.timeSlots.appendChild(timeBtn);
    });
    
    // 좌석 생성
    createSeatMap();
    
    updateMovieOrderDisplay();
    showScreen('movieSelectionScreen');
}

// 시간 선택 함수
function selectTime(time) {
    selectedTime = time;
}

// 좌석 맵 생성
function createSeatMap() {
    elements.seatMap.innerHTML = '';
    
    // 8행 8열 좌석 생성
    for (let row = 1; row <= 8; row++) {
        for (let col = 1; col <= 8; col++) {
            const seatBtn = document.createElement('button');
            seatBtn.className = 'seat-btn';
            seatBtn.textContent = `${String.fromCharCode(64 + row)}${col}`;
            
            // 일부 좌석은 이미 예약된 것으로 설정
            const isOccupied = Math.random() < 0.3;
            if (isOccupied) {
                seatBtn.classList.add('occupied');
                seatBtn.disabled = true;
            } else {
                seatBtn.addEventListener('click', () => {
                    playSound('button');
                    selectSeat(`${String.fromCharCode(64 + row)}${col}`);
                    document.querySelectorAll('.seat-btn:not(.occupied)').forEach(btn => btn.classList.remove('selected'));
                    seatBtn.classList.add('selected');
                });
            }
            
            elements.seatMap.appendChild(seatBtn);
        }
    }
}

// 좌석 선택 함수
function selectSeat(seat) {
    selectedSeat = seat;
    updateMovieOrderDisplay();
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
    
    // 영화 시나리오인 경우 영화 주문 표시도 업데이트
    if (currentScenario === 'movie') {
        updateMovieOrderDisplay();
    }
}

// 주문에서 아이템 제거
function removeFromOrder(itemName) {
    const index = currentOrder.findIndex(item => item.name === itemName);
    if (index > -1) {
        currentOrder.splice(index, 1);
        updateOrderDisplay();
        updateTotalPrice();
        updateProgress();
        
        // 영화 시나리오인 경우 영화 주문 표시도 업데이트
        if (currentScenario === 'movie') {
            updateMovieOrderDisplay();
        }
    }
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
            <button class="order-item-remove" onclick="removeFromOrder('${item.name}')">×</button>
        </div>
    `).join('');
}

// 영화 주문 표시 업데이트
function updateMovieOrderDisplay() {
    const movieOrder = [];
    
    if (selectedMovie) {
        movieOrder.push({
            name: selectedMovie.name,
            price: selectedMovie.price,
            icon: selectedMovie.icon,
            quantity: 1,
            totalPrice: selectedMovie.price
        });
    }
    
    // 간식 주문 추가
    movieOrder.push(...currentOrder);
    
    if (movieOrder.length === 0) {
        elements.movieOrderList.innerHTML = '<p class="empty-order">주문한 상품이 없습니다</p>';
        return;
    }
    
    elements.movieOrderList.innerHTML = movieOrder.map(item => `
        <div class="order-item">
            <span class="order-item-name">${item.icon} ${item.name} x${item.quantity}</span>
            <span class="order-item-price">${item.totalPrice.toLocaleString()}원</span>
            <button class="order-item-remove" onclick="removeFromMovieOrder('${item.name}')">×</button>
        </div>
    `).join('');
    
    // 총 금액 업데이트
    const total = movieOrder.reduce((sum, item) => sum + item.totalPrice, 0);
    elements.movieTotalPrice.textContent = `${total.toLocaleString()}원`;
}

// 영화 주문에서 아이템 제거
function removeFromMovieOrder(itemName) {
    if (selectedMovie && selectedMovie.name === itemName) {
        selectedMovie = null;
    } else {
        removeFromOrder(itemName);
    }
    updateMovieOrderDisplay();
}

// 총 금액 업데이트
function updateTotalPrice() {
    const total = currentOrder.reduce((sum, item) => sum + item.totalPrice, 0);
    elements.totalPrice.textContent = `${total.toLocaleString()}원`;
}

// 진행률 업데이트
function updateProgress() {
    const data = scenarioData[currentScenario];
    const totalItems = data.items ? data.items.length : (data.movies ? data.movies.length + data.snacks.length : 0);
    const orderedItems = currentOrder.length;
    progress = Math.min((orderedItems / totalItems) * 100, 100);
    elements.progressFill.style.width = `${progress}%`;
}

// 서비스 타입 선택
function selectServiceType(type) {
    serviceType = type;
    document.querySelectorAll('.service-type-btn').forEach(btn => btn.classList.remove('active'));
    if (type === 'dine-in') {
        elements.dineInBtn.classList.add('active');
    } else {
        elements.takeoutBtn.classList.add('active');
    }
}

// 시나리오 초기화
function initializeScenario(scenario) {
    currentScenario = scenario;
    currentOrder = [];
    progress = 0;
    selectedMovie = null;
    selectedTime = null;
    selectedSeat = null;
    serviceType = 'dine-in';
    
    const data = scenarioData[scenario];
    elements.scenarioTitle.textContent = data.title;
    elements.menuTitle.textContent = data.menuTitle;
    elements.progressFill.style.width = '0%';
    
    // 서비스 타입 선택 표시/숨김
    if (data.showServiceType) {
        elements.serviceTypeSelector.style.display = 'block';
        selectServiceType('dine-in');
    } else {
        elements.serviceTypeSelector.style.display = 'none';
    }
    
    // 메뉴 아이템 생성
    elements.menuItems.innerHTML = '';
    
    if (scenario === 'movie') {
        // 영화와 간식 분리
        const movieSection = document.createElement('div');
        movieSection.innerHTML = '<h4 style="margin-bottom: 15px; color: #333;">🎬 영화</h4>';
        const movieGrid = document.createElement('div');
        movieGrid.className = 'menu-items';
        data.movies.forEach(movie => {
            movieGrid.appendChild(createMovieItem(movie));
        });
        movieSection.appendChild(movieGrid);
        elements.menuItems.appendChild(movieSection);
        
        const snackSection = document.createElement('div');
        snackSection.innerHTML = '<h4 style="margin: 30px 0 15px 0; color: #333;">🍿 간식</h4>';
        const snackGrid = document.createElement('div');
        snackGrid.className = 'menu-items';
        data.snacks.forEach(snack => {
            snackGrid.appendChild(createMenuItem(snack));
        });
        snackSection.appendChild(snackGrid);
        elements.menuItems.appendChild(snackSection);
        
        // 영화 주문 표시 초기화
        updateMovieOrderDisplay();
    } else {
        data.items.forEach(item => {
            elements.menuItems.appendChild(createMenuItem(item));
        });
    }
    
    // 주문 초기화
    updateOrderDisplay();
    updateTotalPrice();
    
    showScreen('kioskScreen');
}

// 결제 처리
function processPayment(paymentType) {
    if (currentScenario === 'movie') {
        if (!selectedMovie || !selectedTime || !selectedSeat) {
            alert('영화, 시간, 좌석을 모두 선택해주세요!');
            return;
        }
    } else if (currentOrder.length === 0) {
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
    let message = data.completionMessage;
    
    if (currentScenario === 'movie' && selectedMovie) {
        message = `${selectedMovie.name} 예매가 완료되었습니다!\n상영시간: ${selectedTime}\n좌석: ${selectedSeat}\n${message}`;
    }
    
    if (data.showServiceType) {
        message += `\n서비스 유형: ${serviceType === 'dine-in' ? '매장이용' : '포장'}`;
    }
    
    elements.completionMessage.textContent = message;
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
    
    // 영화 선택 화면 뒤로가기 버튼
    buttons.backToMenuBtn.addEventListener('click', () => {
        playSound('button');
        initializeScenario('movie');
    });
    
    // 서비스 타입 선택 버튼
    elements.dineInBtn.addEventListener('click', () => {
        playSound('button');
        selectServiceType('dine-in');
    });
    
    elements.takeoutBtn.addEventListener('click', () => {
        playSound('button');
        selectServiceType('takeout');
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
    
    // 영화 결제 버튼들
    buttons.moviePayCash.addEventListener('click', () => {
        playSound('button');
        processPayment('cash');
    });
    
    buttons.moviePayCard.addEventListener('click', () => {
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
            } else if (screens.movieSelectionScreen.classList.contains('active')) {
                buttons.backToMenuBtn.click();
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
            e.target.classList.contains('btn') ||
            e.target.classList.contains('service-type-btn') ||
            e.target.classList.contains('time-slot-btn') ||
            e.target.classList.contains('seat-btn')) {
            e.target.style.transform = 'scale(0.95)';
        }
    });
    
    document.addEventListener('touchend', (e) => {
        // 터치 종료 시 원래 크기로 복원
        if (e.target.classList.contains('menu-item-btn') || 
            e.target.classList.contains('pay-btn') ||
            e.target.classList.contains('btn') ||
            e.target.classList.contains('service-type-btn') ||
            e.target.classList.contains('time-slot-btn') ||
            e.target.classList.contains('seat-btn')) {
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