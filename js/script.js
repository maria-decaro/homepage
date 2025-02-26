//Toggling visibility of additional projects- makes the more projects button to function properly
document.getElementById('view-more-projects').addEventListener('click', function() {
    var moreProjects = document.getElementById('more-projects');
    var button = document.getElementById('view-more-projects');

    moreProjects.classList.toggle('hidden');
    
    if (moreProjects.classList.contains('hidden')) {
        button.textContent = 'View More Projects';
    } else {
        button.textContent = 'View Less Projects';
    }
});

function toggleNav() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active'); //Toggle the 'active' class to show/hide the menu
}

//this uses an API to generate a different dad joke each time someone loads on the website - this is an API that filfuls the assignemnt requirement of an API that does not require authentication!
document.addEventListener("DOMContentLoaded", function() {
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json" 
        }
    })
    .then(response => response.json()) 
    .then(data => {
        document.getElementById("dad-joke").textContent = data.joke;
    })
    .catch(error => {
        console.error("Error fetching joke:", error);
        document.getElementById("dad-joke").textContent = "Oops! Something went wrong.";
    });
});

//This generates a new coffee image from Splash API when the button is clicked
document.addEventListener("DOMContentLoaded", function () {
    const coffeeImg = document.getElementById("coffee-img");
    const newCoffeeBtn = document.getElementById("new-coffee");
    const yumMessage = document.getElementById("yum-message");

    //function to fetch a random coffee image
    async function fetchCoffee() {
        const url = "https://api.unsplash.com/photos/random?query=coffee&client_id=oQ9VrwzLeRmd7UNHOa9g6HDuqnQo2G6vJ2BgU0wVEfs";
        
        try {
            const response = await fetch(url);
            const data = await response.json();
    
            if (!data || !data.urls || !data.urls.regular) {
                throw new Error("No coffee images found.");
            }
    
            coffeeImg.src = data.urls.regular;
        } catch (error) {
            console.error("Error fetching coffee image:", error);
        }
    }

    fetchCoffee();

    //event listener for button click to fetch a new image
    newCoffeeBtn.addEventListener("click", fetchCoffee);

    //show yum message on mouseenter on top of the coffee image and does extra credit #2
    coffeeImg.addEventListener("mouseenter", () => {
        yumMessage.style.opacity = 1; //fade in
    });

    //hide yum message on mouseleave (fade out)
    coffeeImg.addEventListener("mouseleave", () => {
        yumMessage.style.opacity = 0; //fade out
    });
});

