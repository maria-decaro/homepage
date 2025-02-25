// Toggling visibility of additional projects
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
    nav.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
}

document.addEventListener("DOMContentLoaded", function () {
    const coffeeImg = document.getElementById("coffee-img");
    const newCoffeeBtn = document.getElementById("new-coffee");
    const yumMessage = document.getElementById("yum-message");

    // Function to fetch a random coffee image
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

    // Event listener for button click to fetch a new image
    newCoffeeBtn.addEventListener("click", fetchCoffee);

    // Show yum message on mouseenter 
    coffeeImg.addEventListener("mouseenter", () => {
        yumMessage.style.opacity = 1; // Fade in
    });

    // Hide yum message on mouseleave (fade out)
    coffeeImg.addEventListener("mouseleave", () => {
        yumMessage.style.opacity = 0; // Fade out
    });
});

