"use strict";

document.querySelectorAll('nav a').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // 处理点击事件
  });
});
document.querySelectorAll('.dropdown').forEach(function (item) {
  item.addEventListener('mouseover', function () {
    this.querySelector('.dropdown-content').style.display = 'block';
  });
  item.addEventListener('mouseout', function () {
    this.querySelector('.dropdown-content').style.display = 'none';
  });
});