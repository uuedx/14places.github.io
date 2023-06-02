var urls = ["https://wawel.krakow.pl/en/the-castle", "https://www.inyourpocket.com/krakow/Old-Town", "https://www.wieliczka-saltmine.com/", "https://www.auschwitz.org/", "https://www.warsawguide.com/old-town-in-warsaw/", "https://warsawtour.pl/en/project/warsaw-rising-museum-2/", "https://warsawtour.pl/en/project/palace-of-culture-and-science-2/", "https://www.kopernik.org.pl/en", "https://old2022.ecs.gda.pl/title,Jezyk,pid,21,lang,2.html", "https://www.gpsmycity.com/attractions/long-market-square-60235.html", "https://www.inyourpocket.com/gdansk/things-to-do-in-gdansk-old-town_76168f", "https://www.inyourpocket.com/wroclaw/Old-Town", "https://www.inyourpocket.com/wroclaw/cathedral-of-st-john-the-baptist_93619v", "https://visitwroclaw.eu/miejsce/park-szczytnicki"]; 
var places = [
    { name: "Wawel Castle", imageURL: "place1.jpg" },
    { name: "Krakow's Old Town", imageURL: "place2.jpg" },
    { name: "The Wieliczka Salt Mine", imageURL: "place3.jpg" },
    { name: "The Auschwitz-Birkenau Memorial and Museum", imageURL: "place4.jpg" },
    { name: "Warsaw's historic Old Town", imageURL: "place5.jpg" },
    { name: "The Warsaw Uprising Museum", imageURL: "place6.jpg" },
    { name: "The Palace of Culture and Science", imageURL: "place7.jpg" },
    { name: "The Copernicus Science Centre", imageURL: "place8.jpg" },
    { name: "The European Solidarity Centre", imageURL: "place9.jpg" },
    { name: "The Long Market", imageURL: "place10.jpg" },
    { name: "The Old Town of Gdansk", imageURL: "place11.jpg" },
    { name: "The Old Town of Wroclaw", imageURL: "place12.jpg" },
    { name: "The Wroclaw Cathedral", imageURL: "place13.jpg" },
    { name: "Szczytnicki Park", imageURL: "place14.jpg" },

];

window.onload = function() {
    var placesGrid = document.querySelector('#places-grid');
    for (let i = 0; i < places.length; i++) {
        var placeCard = document.createElement('div');
        placeCard.className = 'col-md-4 mb-4';
        placeCard.innerHTML = `
            <div class="card shadow-sm">
                <img src="${places[i].imageURL}" class="card-img-top" alt="${places[i].name}" onerror="this.onerror=null; this.src='placeholder.jpg';">
                <div class="card-body">
                    <h5 class="card-title">${places[i].name}</h5>
                    <a href="${urls[i]}" class="btn btn-primary">Learn More</a>
                </div>
            </div>
        `;
        placesGrid.appendChild(placeCard);
    }
};