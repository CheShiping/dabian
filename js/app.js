// 更新后的应用数据
const apps = [
    {
        title: '刘志辉',
        description: '自己作品的简介 | 自己作品的简介',
        icon: 'fa-solid fa-user-astronaut', // 技术人员形象
        color: '#007CF0',
        badge: '💻' ,// 新增角标装饰
        src: './html/03_lzh/index.html' // 新增src属性
    },
    {
        title: '车时平',
        description: '自己作品的简介 | 自己作品的简介',
        icon: 'fa-solid fa-user-graduate', // 学术型形象
        color: '#00C853',
        pulse: true,
        badge: '🎨',
        src: './html/01_csp/index.html' // 新增src属性
    },
    {
        title: '刘泓君',
        description: '自己作品的简介 | 自己作品的简介', 
        icon: 'fa-solid fa-user-tie', // 职业形象
        color: '#D500F9',
        badge: '📊',
        src: './html/02_lhj/index.html' // 新增src属性
    }
];

// 更新createCard函数
function createCard(app) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const content = `
        <div class="card-content">
            <div class="icon-wrapper" style="--icon-color: ${app.color}">
                <div class="icon-badge">${app.badge}</div>
                <div class="icon" style="${app.pulse ? 'animation: pulse 1.5s infinite' : ''}">
                    <i class="${app.icon}"></i>
                </div>
            </div>
            <a href="${app.src}" target="_blank" class="card-link">
                        <h2>${app.title}</h2>
            <p>${app.description}</p>
        </a>

        </div>
        
    `;
    
    card.innerHTML = content;
    return card;
}


// 初始化卡片
function initCards() {
    const container = document.getElementById('cardsContainer');
    apps.forEach(app => {
        container.appendChild(createCard(app));
    });
}

// 主题切换功能
function createThemeToggle() {
    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-toggle';
    themeBtn.innerHTML = '<i class="fas fa-moon"></i> 切换主题';
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
        themeBtn.innerHTML = document.body.classList.contains('dark') 
            ? '<i class="fas fa-sun"></i> 切换主题'
            : '<i class="fas fa-moon"></i> 切换主题';
    });
    document.body.appendChild(themeBtn);
}

// 初始化主题
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark', savedTheme === 'dark');
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCards();
    createThemeToggle();
});

// 视差滚动效果
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    const scrollY = window.scrollY;
    
    cards.forEach((card, index) => {
        card.style.transform = `translateY(${scrollY * 0.05 * index}px)`;
    });
});