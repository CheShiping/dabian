"use strict";

// 更新后的应用数据
var apps = [{
  title: '刘志辉',
  description: '自己作品的简介 | 自己作品的简介',
  icon: 'fa-solid fa-user-astronaut',
  // 技术人员形象
  color: '#007CF0',
  badge: '💻',
  // 新增角标装饰
  src: '/答辩/html/03_lzh/index.html' // 新增src属性

}, {
  title: '车时平',
  description: '自己作品的简介 | 自己作品的简介',
  icon: 'fa-solid fa-user-graduate',
  // 学术型形象
  color: '#00C853',
  pulse: true,
  badge: '🎨',
  src: '/答辩/html/01_csp/index.html' // 新增src属性

}, {
  title: '刘泓君',
  description: '自己作品的简介 | 自己作品的简介',
  icon: 'fa-solid fa-user-tie',
  // 职业形象
  color: '#D500F9',
  badge: '📊',
  src: '/答辩/html/02_lhj/index.html' // 新增src属性

}]; // 更新createCard函数

function createCard(app) {
  var card = document.createElement('div');
  card.className = 'card';
  var content = "\n        <div class=\"card-content\">\n            <div class=\"icon-wrapper\" style=\"--icon-color: ".concat(app.color, "\">\n                <div class=\"icon-badge\">").concat(app.badge, "</div>\n                <div class=\"icon\" style=\"").concat(app.pulse ? 'animation: pulse 1.5s infinite' : '', "\">\n                    <i class=\"").concat(app.icon, "\"></i>\n                </div>\n            </div>\n            <a href=\"").concat(app.src, "\" target=\"_blank\" class=\"card-link\">\n                        <h2>").concat(app.title, "</h2>\n            <p>").concat(app.description, "</p>\n        </a>\n\n        </div>\n        \n    ");
  card.innerHTML = content;
  return card;
} // 初始化卡片


function initCards() {
  var container = document.getElementById('cardsContainer');
  apps.forEach(function (app) {
    container.appendChild(createCard(app));
  });
} // 主题切换功能


function createThemeToggle() {
  var themeBtn = document.createElement('button');
  themeBtn.className = 'theme-toggle';
  themeBtn.innerHTML = '<i class="fas fa-moon"></i> 切换主题';
  themeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    themeBtn.innerHTML = document.body.classList.contains('dark') ? '<i class="fas fa-sun"></i> 切换主题' : '<i class="fas fa-moon"></i> 切换主题';
  });
  document.body.appendChild(themeBtn);
} // 初始化主题


function initTheme() {
  var savedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.toggle('dark', savedTheme === 'dark');
} // 初始化应用


document.addEventListener('DOMContentLoaded', function () {
  initTheme();
  initCards();
  createThemeToggle();
}); // 视差滚动效果

window.addEventListener('scroll', function () {
  var cards = document.querySelectorAll('.card');
  var scrollY = window.scrollY;
  cards.forEach(function (card, index) {
    card.style.transform = "translateY(".concat(scrollY * 0.05 * index, "px)");
  });
});