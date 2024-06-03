// Get the search input element
const searchInput = document.getElementById('search');

// Get the card container element
const cardContainer = document.getElementById('card-data');

// Define the API URL
const apiUrl = "/api/";

// Get the card data element
const cardData = document.querySelector(".row");

// Get the popup box element
const popup = document.querySelector(".popup-box");

// Get the close button element
const popupCloseBtn = popup.querySelector(".popup-close-btn");

// Define the endpoints
const endpoints = {
    artists: "artists",
    locations: "locations",
    dates: "dates",
    relation: "relation"
};

// Add an event listener for input in the search field
searchInput.addEventListener('input', () => searchArtists(searchInput.value));

cardData.addEventListener("click", async function(event) {
    if (event.target.tagName.toLowerCase() === "button") {
        const item = event.target.parentElement;
        const relation = item.querySelector(".relation");
        const pathPart = relation.dataset.url.split("/");
        const res = await fetch(`${apiUrl}${endpoints.relation}/${pathPart[pathPart.length-1]}`);
        const data = await res.json();

        API(data, relation);
        const h3 = item.querySelector(".popup-header-cont").innerHTML;
        const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
        popup.querySelector(".popup-header").innerHTML = h3;
        popup.querySelector(".popup-body").innerHTML = readMoreCont;

        togglePopup();
        generateLocationList(data.locations); // Appeler la fonctio n avec les données de localisation
    }
});

// Add an event listener for click on the close button
popupCloseBtn.addEventListener("click", togglePopup);

// Add an event listener for click on the popup box
popup.addEventListener("click", function(event) {
    if (event.target === popup) {
        togglePopup();
    }
});

// Function to toggle the popup box
function togglePopup() {
    popup.classList.toggle("open");
}

// Function to generate the list of locations and make them clickable
function generateLocationList(locations) {
    const locationList = document.querySelector('.location-list');
    locationList.innerHTML = ''; // Clear existing locations

    locations.forEach(location => {
        const li = document.createElement('li');
        li.textContent = location.name;
        li.dataset.lat = location.lat;
        li.dataset.lon = location.lon;
        li.classList.add('location-item');
        locationList.appendChild(li);

        // Add click event listener to each location item
        li.addEventListener('click', function() {
            const lat = parseFloat(this.dataset.lat);
            const lon = parseFloat(this.dataset.lon);
            macarte.setView([lat, lon], 13); // Adjust zoom level as needed
            togglePopup(); // Close the popup after clicking
        });
    });
}

document.querySelector(".search-btn").addEventListener("click", () => {
    search = document.querySelector(".search").value;

    if (search % 2 == 0) {
        console.log("⚠️Warning: This search engine is not connected to the website ❗️")
        alert("⚠️  This search engine is not connected to the website ❗️")
    }
    if (search % 2 === 1) {
        console.log("⚠️Warning: This search engine is not connected to the website ❗")
        alert("⚠️  This search engine is not connected to the website ❗️")
    }

    document.querySelector(".search").value = ""

});
