document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const emailInput = document.getElementById('email-input');
    const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value;

        if (email && /^[^
@]+@[^
@]+\.[^
@]+$/.test(email)) {
            responseMessage.textContent = '✅ 감사합니다! 출시되면 가장 먼저 알려드릴게요.';
            responseMessage.style.color = '#ffffff';
            emailInput.value = '';
        } else {
            responseMessage.textContent = '올바른 이메일 주소를 입력해주세요.';
            responseMessage.style.color = '#ffdddd';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});