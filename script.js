
document.getElementById("start-btn").addEventListener("click", function () {
    document.getElementById("landing-page").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
});

// زر القائمة الجانبية
document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.getElementById("side-menu");
    menu.style.left = menu.style.left === "0px" ? "-200px" : "0px";
});

// تبديل الأقسام
document.querySelectorAll(".menu-item").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
        document.getElementById(this.dataset.section).classList.remove("hidden");
    });
});

// زر إظهار أقسام الـ API
document.getElementById("api-toggle").addEventListener("click", function () {
    document.getElementById("api-sections").classList.toggle("hidden");
});

// تبديل صفحات الـ API
document.querySelectorAll(".api-category").forEach(button => {
    button.addEventListener("click", function () {
        document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
        document.getElementById(this.dataset.section).classList.remove("hidden");
    });
});

// نسخ رابط الـ API
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    alert("تم النسخ!");
}
