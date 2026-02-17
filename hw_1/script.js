// 1. Selecting elements using getElementById/querySelector
const cards = document.querySelectorAll('.fact-card');
const counterDisplay = document.getElementById('counter');
const revealBtn = document.getElementById('reveal-btn');
const resetBtn = document.getElementById('reset-btn');
const statusMsg = document.getElementById('status-msg');

// 2. Variable to track current facts
let count = 0;

// 3. Reveal Button Event Listener
revealBtn.addEventListener('click', () => {
    if (count < cards.length) {
        // 4. Show elements using classList
        cards[count].classList.add('revealed');
        count++;
        
        // 5. Update counter dynamically
        counterDisplay.innerText = count;

        if (count === cards.length) {
            statusMsg.innerText = "💣 BOOM!";
            statusMsg.style.color = "#ff4757";
            
            // Trigger the "Bomb" animation after a split second
            setTimeout(triggerRealBomb, 400);
        }
    }
});

function triggerRealBomb() {
    // Create the white flash overlay
    const overlay = document.createElement('div');
    overlay.className = 'blink-overlay';
    document.body.appendChild(overlay);

    // Create the "end" text
    const endText = document.createElement('h1');
    endText.className = 'end-text';
    endText.innerText = 'end';
    overlay.appendChild(endText);

    // Create 30 explosion particles (the "shrapnel")
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Randomly calculate explosion distance/direction
        const x = (Math.random() - 0.5) * 1200 + 'px';
        const y = (Math.random() - 0.5) * 1200 + 'px';
        
        particle.style.setProperty('--x', x);
        particle.style.setProperty('--y', y);
        
        // Random colors for fire and smoke
        const bombColors = ['#ff4757', '#ffa502', '#2f3542', '#000000', '#ffffff'];
        particle.style.background = bombColors[Math.floor(Math.random() * bombColors.length)];
        
        // Randomize particle size slightly
        const size = Math.random() * 15 + 5 + 'px';
        particle.style.width = size;
        particle.style.height = size;

        // Apply explosion animation
        particle.style.animation = `explode 0.7s ease-out forwards`;
        
        overlay.appendChild(particle);
    }
}

// Reset Logic
resetBtn.addEventListener('click', () => {
    count = 0;
    counterDisplay.innerText = count;
    statusMsg.innerText = "Click \"Reveal\" to solve the puzzle!";
    statusMsg.style.color = "#a29bfe";
    
    // Remove the white explosion screen
    const explosion = document.querySelector('.blink-overlay');
    if (explosion) explosion.remove();
    
    // Hide all cards
    cards.forEach(card => card.classList.remove('revealed'));
});