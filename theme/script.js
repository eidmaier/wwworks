const themeToggle = document.querySelector('.theme-toggle');
const colorPicker = document.querySelector('.color-picker');
const body = document.body;

// Recuperar o tema salvo do localStorage
let isDark = localStorage.getItem('isDark') === 'true';
let savedColor = localStorage.getItem('themeColor');

document.querySelector('.dropdown-trigger').addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector('.theme-controls').classList.toggle('active');
});

document.addEventListener('click', function(e) {
    if (!document.querySelector('.theme-controls').contains(e.target)) {
        document.querySelector('.theme-controls').classList.remove('active');
    }
});

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

function adjustColor(color, amount) {
    const num = parseInt(color.slice(1), 16);
    const r = Math.min(255, Math.max(0, (num >> 16) + amount));
    const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount));
    const b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount));
    return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
}

function getLuminance(color) {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

function resetTheme() {
    document.querySelector('header').style.backgroundColor = '';
    document.querySelector('footer').style.backgroundColor = '';
    document.querySelector('.nav-top').style.backgroundColor = '';
    document.querySelector('.nav-left').style.backgroundColor = '';
    document.querySelector('aside').style.backgroundColor = '';
    document.querySelector('main').style.backgroundColor = '';
    document.querySelectorAll('body, header, nav, main, aside, footer').forEach(el => {
        el.style.color = '';
    });
    localStorage.removeItem('themeColor');
    colorPicker.value = '#d0d0d0';
}

function applyCustomColor(color) {
    const luminance = getLuminance(color);
    const textColor = luminance > 0.5 ? '#000000' : '#ffffff';
    
    const baseColor = color;
    const lighterColor = adjustColor(baseColor, 30);
    const darkerColor = adjustColor(baseColor, -30);

    if (isDark) {
        document.querySelector('header').style.backgroundColor = darkerColor;
        document.querySelector('footer').style.backgroundColor = darkerColor;
        document.querySelector('.nav-top').style.backgroundColor = adjustColor(darkerColor, 30);
        document.querySelector('.nav-left').style.backgroundColor = adjustColor(darkerColor, 30);
        document.querySelector('aside').style.backgroundColor = adjustColor(darkerColor, 30);
        document.querySelector('main').style.backgroundColor = adjustColor(darkerColor, -15);
    } else {
        document.querySelector('header').style.backgroundColor = baseColor;
        document.querySelector('footer').style.backgroundColor = baseColor;
        document.querySelector('.nav-top').style.backgroundColor = lighterColor;
        document.querySelector('.nav-left').style.backgroundColor = lighterColor;
        document.querySelector('aside').style.backgroundColor = lighterColor;
        document.querySelector('main').style.backgroundColor = adjustColor(lighterColor, 30);
    }

    document.querySelectorAll('body, header, nav, main, aside, footer').forEach(el => {
        el.style.color = textColor;
    });
    
    localStorage.setItem('themeColor', color);
}

themeToggle.addEventListener('click', () => {
    resetTheme();
    isDark = !isDark;
    localStorage.setItem('isDark', isDark);
    body.classList.toggle('dark');
    body.classList.toggle('light');
    updateThemeIcon();
});

colorPicker.addEventListener('input', (e) => {
    applyCustomColor(e.target.value);
});

// Aplicar tema salvo ao carregar a página
if (isDark) {
    body.classList.remove('light');
    body.classList.add('dark');
    updateThemeIcon();
}

if (savedColor && savedColor !== '#d0d0d0') {
    colorPicker.value = savedColor;
    applyCustomColor(savedColor);
}

updateThemeIcon();