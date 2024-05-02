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

// Add an event listener for click on the card data
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




document.querySelector(".search-btn").addEventListener("click", ()=>{

    search = document.querySelector(".search").value
  
           if(search%2==0){ console.log("⚠️Warning: This search engine is not connected to the website ❗️")
                            alert("⚠️  This search engine is not connected to the website ❗️") 
           }
           if(search%2===1){ console.log("⚠️Warning: This search engine is not connected to the website ❗")
                             alert("⚠️  This search engine is not connected to the website ❗️") 
           }
  
  
  
  
  
  //   +++ Qidiruv tarixiga qo'shilgan web saytlar +++
  
  
  
  
  
  // ===Qisqartirilmagan holat===
  
          else if(search==='kun.uz'){ location = "https://kun.uz/"
  
          }
  
          else if(search==='youtube.com'){ location = "https://www.youtube.com/"
  
          }
  
          else if(search==='telegram.org'){ location = "https://web.telegram.org/a/"
  
          }
  
          else if(search==='canva.com'){ location = "https://canva.com/"
  
          }
  
          else if(search==='fontawesome.com'){ location = "https://fontawesome.com/"
  
          }
  
          else if(search==='discord.com'){ location = "https://discord.com/"
  
          }
  
          else if(search==='panzoid.com'){ location = "https://panzoid.com/"
  
          }
  
          else if(search==='upg.uz'){ location = "https://upg.uz/"
  
          }
  
          else if(search==='youtube.channel/TOMS LIDER'){ location = "https://www.youtube.com/@TOMS_LIDER"
  
          }
  
          else if(search==='live server'){ location = "http://127.0.0.1:5500/"
  
          }
  
  // ===Finsh===
  
  
  
  
  
  
  
  // ---Qisqartirilgan holat---
  
          else if(search==='kun'){ location = "https://kun.uz/"
  
          }
  
          else if(search==='yt'){ location = "https://www.youtube.com/"
  
          }
  
          else if(search==='tg'){ location = "https://web.telegram.org/a/"
  
          }
  
          else if(search==='cv'){ location = "https://canva.com/"
  
          }
  
          else if(search==='fa'){ location = "https://fontawesome.com/"
  
          }
  
          else if(search==='dd'){ location = "https://discord.com/"
  
          }
  
          else if(search==='pd'){ location = "https://panzoid.com/"
  
          }
  
          else if(search==='upg'){ location = "https://upg.uz/"
  
          }
  
          else if(search==='yt.TL'){ location = "https://www.youtube.com/@TOMS_LIDER"
  
          }
  
          else if(search==='ls'){ location = "http://127.0.0.1:5500/"
  
          }
  
  // ---Finsh---
  
  
  
  
  
  // +++ Finsh all URL +++
  
  
  
  
  
  
  
  
  document.querySelector(".search").value = ""
  
  })
  
  
  
  
  
  