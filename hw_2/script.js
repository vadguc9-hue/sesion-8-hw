console.log("Quiz Script Loaded!"); // Debug 1

const quizData = {
    geography: [
        { q: "Capital of Italy?", a: "Rome", options: ["Paris", "Rome", "Berlin", "Madrid"] },
        { q: "Largest ocean?", a: "Pacific", options: ["Atlantic", "Indian", "Pacific", "Arctic"] },
        { q: "Most populous country?", a: "India", options: ["China", "USA", "India", "Russia"] },
        { q: "Highest mountain?", a: "Everest", options: ["K2", "Everest", "Fuji", "Lhotse"] },
        { q: "Longest river?", a: "Nile", options: ["Amazon", "Nile", "Congo", "Mekong"] },
        { q: "Sahara location?", a: "Africa", options: ["Asia", "Africa", "Australia", "Europe"] },
        { q: "Capital of Japan?", a: "Tokyo", options: ["Seoul", "Beijing", "Tokyo", "Bangkok"] },
        { q: "Boot-shaped country?", a: "Italy", options: ["Italy", "Greece", "Spain", "France"] },
        { q: "Smallest country?", a: "Vatican City", options: ["Monaco", "Malta", "Vatican City", "San Marino"] },
        { q: "Desert in Asia?", a: "Gobi", options: ["Sahara", "Gobi", "Namib", "Atacama"] },
        { q: "Eiffel Tower city?", a: "Paris", options: ["Berlin", "London", "Paris", "Madrid"] },
        { q: "Largest country area?", a: "Russia", options: ["Canada", "USA", "Russia", "China"] },
        { q: "Island nation?", a: "Japan", options: ["Germany", "Japan", "Brazil", "Egypt"] },
        { q: "Capital of USA?", a: "Washington D.C.", options: ["NYC", "Washington D.C.", "LA", "Chicago"] },
        { q: "Largest reef?", a: "Great Barrier Reef", options: ["Red Sea", "Great Barrier Reef", "Belize Reef", "Florida Reef"] }
    ],
    music: [
        { q: "King of Pop?", a: "Michael Jackson", options: ["Elvis", "Michael Jackson", "Prince", "Bowie"] },
        { q: "Violin strings?", a: "4", options: ["3", "4", "5", "6"] },
        { q: "Queen singer?", a: "Freddie Mercury", options: ["Freddie Mercury", "Mick Jagger", "David Bowie", "Robert Plant"] },
        { q: "Instrument with keys?", a: "Piano", options: ["Guitar", "Flute", "Piano", "Drums"] },
        { q: "Beatles city?", a: "Liverpool", options: ["London", "Manchester", "Liverpool", "Leeds"] },
        { q: "Bob Marley genre?", a: "Reggae", options: ["Rock", "Reggae", "Jazz", "Pop"] },
        { q: "5th Symphony writer?", a: "Beethoven", options: ["Mozart", "Bach", "Beethoven", "Wagner"] },
        { q: "Material Girl?", a: "Madonna", options: ["Cher", "Madonna", "Lady Gaga", "Rihanna"] },
        { q: "Lowest male voice?", a: "Bass", options: ["Tenor", "Baritone", "Bass", "Soprano"] },
        { q: "Quartet number?", a: "4", options: ["2", "3", "4", "5"] },
        { q: "Purple Rain artist?", a: "Prince", options: ["Prince", "Slash", "Jimi Hendrix", "Elvis"] },
        { q: "Woodwind instrument?", a: "Flute", options: ["Trumpet", "Trombone", "Flute", "Violin"] },
        { q: "Shape of You writer?", a: "Ed Sheeran", options: ["Justin Bieber", "Ed Sheeran", "Bruno Mars", "Drake"] },
        { q: "Cello tool?", a: "A Bow", options: ["A Pick", "A Bow", "A Stick", "A Hammer"] },
        { q: "Crescendo means?", a: "Getting Louder", options: ["Getting Louder", "Getting Softer", "Same", "Stop"] }
    ],
    sports: [
        { q: "Olympic rings count?", a: "5", options: ["4", "5", "6", "7"] },
        { q: "NBA player 'King'?", a: "LeBron James", options: ["Kobe Bryant", "LeBron James", "Steph Curry", "KD"] },
        { q: "World Cup interval?", a: "4 years", options: ["2 years", "3 years", "4 years", "5 years"] },
        { q: "Tennis 'Love' score?", a: "0", options: ["0", "15", "30", "40"] },
        { q: "Soccer goal count?", a: "1", options: ["1", "2", "3", "6"] },
        { q: "Usain Bolt country?", a: "Jamaica", options: ["USA", "Jamaica", "Kenya", "UK"] },
        { q: "Golf hole-in-one name?", a: "Ace", options: ["Birdie", "Eagle", "Ace", "Bogey"] },
        { q: "Baseball innings count?", a: "9", options: ["7", "8", "9", "10"] },
        { q: "Swimming stroke?", a: "Butterfly", options: ["Butterfly", "Lion", "Tiger", "Bird"] },
        { q: "Highest NBA score shot?", a: "3 pointer", options: ["1", "2", "3", "4"] },
        { q: "Most Tour de France wins?", a: "France", options: ["Italy", "USA", "Spain", "France"] },
        { q: "Super Bowl sport?", a: "American Football", options: ["Soccer", "Baseball", "American Football", "Hockey"] },
        { q: "Hockey puck shape?", a: "Disk", options: ["Ball", "Disk", "Square", "Oval"] },
        { q: "Boxing round length?", a: "3 min", options: ["2 min", "3 min", "5 min", "10 min"] },
        { q: "Famous soccer player CR7?", a: "Ronaldo", options: ["Messi", "Ronaldo", "Neymar", "Pele"] }
    ],
    science: [
        { q: "Red Planet name?", a: "Mars", options: ["Venus", "Mars", "Jupiter", "Saturn"] },
        { q: "H2O is common for?", a: "Water", options: ["Air", "Water", "Salt", "Gas"] },
        { q: "Closest star?", a: "Sun", options: ["Proxima Centauri", "Sun", "Sirius", "Vega"] },
        { q: "Hardest natural substance?", a: "Diamond", options: ["Gold", "Iron", "Diamond", "Quartz"] },
        { q: "Human bone count (adult)?", a: "206", options: ["150", "206", "300", "250"] },
        { q: "Gas we breathe out?", a: "CO2", options: ["Oxygen", "CO2", "Nitrogen", "Helium"] },
        { q: "Gravity discoverer?", a: "Newton", options: ["Einstein", "Newton", "Tesla", "Galileo"] },
        { q: "Center of an atom?", a: "Nucleus", options: ["Electron", "Proton", "Nucleus", "Shell"] },
        { q: "Process plants use for food?", a: "Photosynthesis", options: ["Breathing", "Photosynthesis", "Digestion", "Solar"] },
        { q: "Speed of light is...?", a: "Fastest", options: ["Fastest", "Slow", "Same as sound", "Varies"] },
        { q: "Main gas in Earth's air?", a: "Nitrogen", options: ["Oxygen", "Nitrogen", "Argon", "CO2"] },
        { q: "Study of living things?", a: "Biology", options: ["Physics", "Chemistry", "Biology", "Geology"] },
        { q: "Frozen water?", a: "Ice", options: ["Steam", "Ice", "Liquid", "Gas"] },
        { q: "Planet with rings?", a: "Saturn", options: ["Mars", "Mercury", "Saturn", "Earth"] },
        { q: "Smallest unit of life?", a: "Cell", options: ["Atom", "Cell", "Organ", "Tissue"] }
    ],
    movies: [
        { q: "Iron Man actor?", a: "Robert Downey Jr.", options: ["Chris Evans", "Robert Downey Jr.", "Tom Holland", "Mark Ruffalo"] },
        { q: "First Disney movie?", a: "Snow White", options: ["Cinderella", "Snow White", "Pinocchio", "Bambi"] },
        { q: "Wizard of Oz shoes color?", a: "Ruby", options: ["Gold", "Ruby", "Silver", "Blue"] },
        { q: "Star Wars villain?", a: "Darth Vader", options: ["Darth Vader", "Joker", "Thanos", "Voldemort"] },
        { q: "Highest grossing film?", a: "Avatar", options: ["Endgame", "Avatar", "Titanic", "Star Wars"] },
        { q: "Harry Potter's scar shape?", a: "Lightning", options: ["Star", "Circle", "Lightning", "Cross"] },
        { q: "Movie with a sinking ship?", a: "Titanic", options: ["Jaws", "Titanic", "Avatar", "Speed"] },
        { q: "Spider-Man's real name?", a: "Peter Parker", options: ["Peter Parker", "Bruce Wayne", "Tony Stark", "Clark Kent"] },
        { q: "Batman's city?", a: "Gotham", options: ["Metropolis", "Gotham", "New York", "London"] },
        { q: "Lion King's main lion?", a: "Simba", options: ["Mufasa", "Simba", "Scar", "Timon"] },
        { q: "The 'Friendly Ghost'?", a: "Casper", options: ["Slimer", "Casper", "Beetlejuice", "Ghostface"] },
        { q: "Dinosaur movie name?", a: "Jurassic Park", options: ["Star Wars", "Jurassic Park", "King Kong", "Jaws"] },
        { q: "Toy Story's cowboy?", a: "Woody", options: ["Buzz", "Woody", "Rex", "Slinky"] },
        { q: "Who lives in a pineapple?", a: "SpongeBob", options: ["SpongeBob", "Patrick", "Squidward", "Sandy"] },
        { q: "Secret Agent 007?", a: "James Bond", options: ["Jason Bourne", "Ethan Hunt", "James Bond", "Jack Reacher"] }
    ]
};

let currentQList = [];
let index = 0;
let score = 0;

function initQuiz(theme) {
    console.log("Theme chosen: " + theme); // Debug 2
    currentQList = quizData[theme];
    score = 0;
    index = 0;
    
    document.getElementById('setup-area').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
    displayQuestion();
}

function displayQuestion() {
    const data = currentQList[index];
    document.getElementById('q-count').innerText = index + 1;
    document.getElementById('score-display').innerText = score;
    document.getElementById('question-text').innerText = data.q;
    document.getElementById('feedback').innerText = "";
    document.getElementById('next-btn').style.display = 'none';

    const optionsBox = document.getElementById('options-box');
    optionsBox.innerHTML = "";

    data.options.forEach(choice => {
        const btn = document.createElement('button');
        btn.innerText = choice;
        btn.className = 'option-btn';
        btn.onclick = () => validate(choice, btn);
        optionsBox.appendChild(btn);
    });
}

function validate(choice, btn) {
    const correct = currentQList[index].a;
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);

    if (choice === correct) {
        score++;
        btn.classList.add('correct');
        document.getElementById('feedback').innerText = "Correct! ✅";
    } else {
        btn.classList.add('wrong');
        document.getElementById('feedback').innerText = "Wrong! Answer: " + correct;
    }
    
    document.getElementById('next-btn').style.display = 'inline-block';
    console.log("Current Score: " + score); // Debug 3
}

document.getElementById('next-btn').onclick = () => {
    index++;
    if (index < currentQList.length) {
        displayQuestion();
    } else {
        finishQuiz();
    }
};

function finishQuiz() {
    document.getElementById('game-area').style.display = 'none';
    document.getElementById('end-screen').style.display = 'block';
    document.getElementById('final-result').innerText = score + " / 15";
}