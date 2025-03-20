const sound_data = [
    { sound: 'polly_pocket_audio.mp3', title: 'Polly Pocket', image: 'polly_pocket_graphic.avif' },
    { sound: 'monster_high_audio.mp3', title: 'Monster High', image: 'monster_high_graphic.webp' },
    { sound: 'ever_after_high_audio.mp3', title: 'Ever After High', image: 'ever_after_high_graphic.webp' },
    { sound: 'strawberry_shortcake_audio.mp3', title: 'Strawberry Shortcake', image: 'strawberry_shortcake_graphic.webp' },
    { sound: 'bratz_audio.mp3', title: 'Bratz', image: 'bratz_graphic.avif' },
    { sound: 'american_girl_audio.mp3', title: 'American Girl', image: 'american_girl_graphic.webp' },
    { sound: 'so_in_style_audio.mp3', title: 'So In Style', image: 'S.I.S_graphic.avif' },
    { sound: 'my_scene_audio.mp3', title: 'My Scene', image: 'my_scene_graphic.webp' },
    { sound: 'lego_audio.mp3', title: 'Lego', image: 'lego_graphic.webp' },
    { sound: 'tamagotchi_audio.mp3', title: 'Tamagotchi', image: 'tamagotchi.webp' },
    { sound: 'my_little_pony_audio.mp3', title: 'My_Little_Pony', image: 'my_little_pony.avif' },
    { sound: 'barbie_audio.mp3', title: 'Barbie', image: 'barbie_graphic.avif' }
];
const zodiacData = {
    Aries: {
        title: "You're Short and Sweet, just like Polly!",
        logo: "polly_pocket_graphic.avif",
        description: "Adventurous, spontaneous, and full of surprises—like Polly Pocket!"
    },
    Taurus: {
        title: "You're freaky fabulous!",
        logo: "monster_high_graphic.webp",
        description: "Charming, stylish, and always unique—like Monster High dolls."
        
    },
    Gemini: {
        title: "You're ever after enchanting!",
        logo: "ever_after_high_graphic.webp",
        description: "Mysterious, deep, and full of storytelling—like Ever After High."
        
    },
    Cancer: {
        title: "You're berry sweet!",
        logo: "strawberry_shortcake_graphic.webp",
        description: "Sweet, caring, and always nostalgic—just like Strawberry Shortcake."
    },
    Leo: {
        title: "You're bringing the Bratzitude!",
        logo: "bratz_graphic.avif",
        description: "Bold, confident, and trendsetting—just like the Bratz dolls!"
        
    },
    Virgo: {
        title: "You're an American classic!",
        logo: "american_girl_graphic.webp",
        description: "Grounded, nostalgic, and timeless—like American Girl dolls."
        
    },
    Libra: {
        title: "You're So In Style!",
        logo: "S.I.S_graphic.avif",
        description: "Practical, stylish, and a mentor—just like So In Style dolls!"
        
    },
    Scorpio: {
        title: "You're the Scene Queen!",
        logo: "my_scene_graphic.webp",
        description: "Social, stylish, and full of personality, just like My Scene!"
        
    },
    Sagittarius: {
        title: "You're building your dreams, brick by brick!",
        logo: "lego_graphic.webp",
        description: "Hardworking, structured, and always building your future—like Lego!"
    },
    Capricorn: {
        title: "You're ahead of the times, Tamagotchi-style!",
        logo: "tamagotchi.webp",
        description: "Innovative, quirky, and always ahead of your time—like Tamagotchi!"
    },
    Aquarius: {
        title: "You're totally magical!",
        logo: "my_little_pony.webp",
        description: "Dreamy, creative, and full of magic—like My Little Pony!"
    },
    Pisces: {
        title: "You're a total Barbie icon!",
        logo: "barbie_graphic.avif",
        description: "Confident, glamorous, and always ready to shine—like Barbie!"
        
    }
};

function getZodiac(month, day) {
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      return 'Capricorn';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      return 'Sagittarius';
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
      return 'Scorpio';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
      return 'Libra';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      return 'Virgo';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      return 'Leo';
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
      return 'Cancer';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
      return 'Gemini';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      return 'Taurus';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      return 'Aries';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      return 'Pisces';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      return 'Aquarius';
    } else return null;
  }

  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("input[name='name']").value;
    const birthday = document.querySelector("input[name='birthday']").value;

    if (!name || !birthday) {
        alert("Please enter both your name and birthday.");
        return;
    }

    const birthDate = new Date(birthday);
    const month = birthDate.getMonth() + 1; // JS months are 0-based
    const day = birthDate.getDate();

    const zodiacSign = getZodiac(month, day);

    if (zodiacSign && zodiacData[zodiacSign]) {
        updateContent(name, zodiacSign);
    } else {
        alert("Invalid date or unknown Zodiac sign.");
    }
});

function updateContent(name, zodiacSign) {
    const data = zodiacData[zodiacSign];

    document.querySelector(".title").textContent = `${name}, you're ${data.title}`;
    document.querySelector(".zodiac-logo").src = data.logo;
    document.querySelector(".description").textContent = data.description;
}


let all_sounds = []; // Store audio elements for stopping them later

function create_button(sound_file, image_file, title) {
    // Create image button
    const imgButton = document.createElement('img');
    imgButton.src = image_file;
    imgButton.alt = title;
    imgButton.classList.add('zodiac-button');
    imgButton.style.width = '100px'; // Adjust as needed
    imgButton.style.height = '100px';
    imgButton.style.cursor = 'pointer'; // Make it look clickable
    imgButton.style.margin = '10px';

    // Create audio
    const audio = new Audio(sound_file);
    all_sounds.push(audio);

    // Click event to play sound
    imgButton.addEventListener('click', () => {
        stop_all_sounds(); // Stop any playing sounds
        audio.play();
    });

    //  Append the image button inside the .zodiacs-container div
    document.querySelector('.zodiacs-container').appendChild(imgButton);
}

document.querySelectorAll(".zodiac-button").forEach(button => {
    button.addEventListener("click", function () {
        const zodiacSign = this.dataset.sign; // Each button should have a data-sign attribute

        if (zodiacData[zodiacSign]) {
            updateContent("You", zodiacSign); // Default name if user didn't enter one
        }
    });
});


// Function to stop all sounds
function stop_all_sounds() {
    all_sounds.forEach((sound) => {
        sound.pause();
        sound.currentTime = 0;
    });
}

// Initializing function
function initialize() {
    console.log('Initializing...');
    sound_data.forEach((item) => {
        create_button(item.sound, item.image, item.title);
    });
}

window.addEventListener('load', initialize);