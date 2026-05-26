

//click yes btn
function clickYesButton() {
    const messages = [
        'I like you too! 💚',
        'You made my day! 😊',
        'That means so much! 💕',
        'Best decision ever! 🎉',
        'You rock! 🌟',
        'Forever with you 💑',
        'My heart is yours 💗',
        'You\'re my everything 👑',
        'Always and forever 🌹',
        'You complete me ✨'
    ];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    
    // Create confetti and hearts
    createConfetti();
    createHearts();
    
    // Create custom modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease-out;
        backdrop-filter: blur(4px);
    `;
    
    const content = document.createElement('div');
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    const primaryDark = getComputedStyle(document.documentElement).getPropertyValue('--primary-dark').trim();
    
    content.style.cssText = `
        background: linear-gradient(135deg, ${primaryColor}ee 0%, ${primaryDark}ee 100%);
        padding: 60px 70px;
        border-radius: 28px;
        box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4), 0 0 60px ${primaryColor}80;
        text-align: center;
        font-size: 1.8rem;
        font-weight: 600;
        color: white;
        animation: fadeIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        letter-spacing: 0.05em;
        border: 2px solid rgba(255, 255, 255, 0.3);
    `;
    content.innerHTML = randomMsg;
    
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    setTimeout(() => {
        modal.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => modal.remove(), 300);
    }, 2500);
}

// Create heart floats
function createHearts() {
    const hearts = ['❤️', '💗', '💕', '💖', '💝'];
    const heartCount = 30;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];
        const randomX = Math.random() * window.innerWidth;
        const randomDelay = Math.random() * 0.3;
        
        heart.style.cssText = `
            left: ${randomX}px;
            top: ${window.innerHeight}px;
            animation: heart-float ${3 + Math.random() * 2}s ease-in ${randomDelay}s forwards;
        `;
        heart.innerHTML = randomHeart;
        
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 5300);
    }
}

// Create confetti effect
function createConfetti() {
    const colors = [
        getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim(),
        getComputedStyle(document.documentElement).getPropertyValue('--primary-dark').trim(),
        getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim(),
        getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim()
    ];
    const confettiCount = 60;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomX = Math.random() * window.innerWidth;
        const randomDelay = Math.random() * 0.2;
        
        confetti.style.cssText = `
            left: ${randomX}px;
            top: -10px;
            background-color: ${randomColor};
            border-radius: 50%;
            animation: confetti-fall ${2 + Math.random() * 1}s linear ${randomDelay}s forwards;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3200);
    }
}

//move button on hover
function hoverNoButton() {
    const noButton = document.getElementById('no-button');
    
    // Move button to body to escape container overflow
    if (noButton.parentElement.id !== 'no-button-wrapper') {
        // Create wrapper if needed and move button out of container
        if (!document.getElementById('no-button-wrapper')) {
            document.body.appendChild(noButton);
        }
    }
    
    // Set fixed positioning
    noButton.style.position = 'fixed';
    noButton.style.zIndex = '10000';
    
    const buttonWidth = 120;
    const buttonHeight = 50;
    
    let x = Math.random() * (window.innerWidth - buttonWidth);
    let y = Math.random() * (window.innerHeight - buttonHeight);
    
    // Ensure it stays within bounds
    x = Math.max(10, Math.min(x, window.innerWidth - buttonWidth - 10));
    y = Math.max(10, Math.min(y, window.innerHeight - buttonHeight - 10));

    noButton.style.left = x + 'px';
    noButton.style.top = y + 'px';
}



// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: scale(1); }
        to { opacity: 0; transform: scale(0.95); }
    }
`;
document.head.appendChild(style);