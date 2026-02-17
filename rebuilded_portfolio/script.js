document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    initProjectFilter();
    initFormValidation();
    initAnimatedSkills();
    initTypingEffect();
});

// 1. DARK MODE
function initDarkMode() {
    const toggle = document.getElementById('dark-mode-toggle');
    const icon = document.getElementById('theme-icon');
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.innerText = '☀️';
    }
    toggle.onclick = () => {
        let isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
        icon.innerText = isDark ? '🌙' : '☀️';
    };
}

// 2. PROJECT FILTER
function initProjectFilter() {
    const btns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.project-link-wrapper');
    btns.forEach(btn => {
        btn.onclick = () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.filter;
            items.forEach(item => {
                item.classList.toggle('hide', category !== 'all' && item.dataset.category !== category);
            });
        };
    });
}

// 3. FORM VALIDATION
function initFormValidation() {
    const form = document.getElementById('contact-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('email');
        if (!email.value.includes('@')) {
            document.getElementById('email-error').innerText = "Please enter a valid email";
        } else {
            document.getElementById('form-success').classList.remove('hidden');
            form.reset();
        }
    };
}

// 4. ANIMATED SKILLS
function initAnimatedSkills() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.progress-line span').forEach(span => span.style.width = span.dataset.width);
                document.querySelectorAll('.counter').forEach(c => {
                    let target = +c.dataset.target, count = 0;
                    let timer = setInterval(() => {
                        if (count < target) c.innerText = ++count;
                        else clearInterval(timer);
                    }, 20);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    observer.observe(document.getElementById('skills'));
}

// 5. TYPING ANIMATION
function initTypingEffect() {
    const textTarget = document.getElementById('typing-text');
    const phrases = ["I am a Developer.", "I love coding Python.", "Check out my GitHub!"];
    let phraseIdx = 0, charIdx = 0, isDeleting = false;

    function type() {
        const current = phrases[phraseIdx];
        textTarget.textContent = isDeleting ? current.substring(0, charIdx - 1) : current.substring(0, charIdx + 1);
        charIdx = isDeleting ? charIdx - 1 : charIdx + 1;

        let speed = isDeleting ? 50 : 100;
        if (!isDeleting && charIdx === current.length) { speed = 2000; isDeleting = true; }
        else if (isDeleting && charIdx === 0) { isDeleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; speed = 500; }
        setTimeout(type, speed);
    }
    type();
}