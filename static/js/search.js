const searchInput = document.getElementById('search');
const cardContainer = document.getElementById('card-data');
const apiUrl = "/api/";

const endpoints = {
    artists: "artists",
    locations: "locations",
    dates: "dates",
    relation: "relation"
};

searchInput.addEventListener('input', () => searchArtists(searchInput.value))

const cardData = document.querySelector(".row");
const popup = document.querySelector(".popup-box");
const popupCloseBtn = popup.querySelector(".popup-close-btn")

cardData.addEventListener("click", async function(event) {
    if (event.target.tagName.toLowerCase() == "button") {
        const item = event.target.parentElement;
        const relation = item.querySelector(".relation");
        const pathPart = relation.dataset.url.split("/");
        const res = await fetch(`/api/${endpoints.relation}/${pathPart[pathPart.length-1]}`);
        const data = await res.json();
        elementAPI(data, relation);
        const h3 = item.querySelector(".popup-header-cont").innerHTML;
        const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
        popup.querySelector(".popup-header").innerHTML = h3;
        popup.querySelector(".popup-body").innerHTML = readMoreCont
        popupBox();
    }
})

popupCloseBtn.addEventListener("click", popupBox);

popup.addEventListener("click", function(event) {
    if (event.target == popup) {
        popupBox();
    }
})

function popupBox() {
    popup.classList.toggle("open");
}

function elementAPI(elementJSON, relation) {
    let json = JSON.stringify(elementJSON.datesLocations);
    let parseJSON = JSON.parse(json);
    let result = [];

    for (let key in parseJSON) {
        result.push(`${key} : ${parseJSON[key]}`);
    }

    relation.innerHTML = result.join(', ');
}

//function redirectMap() {
//    window.location.replace("/map")
//}
