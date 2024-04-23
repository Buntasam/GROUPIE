const outputHtml = (matches) => {
    if (matches.length > 0) {
        const html = matches.map(match => `
        <div class="card">
            <div class="card-header">
                <img src="${match.image}" alt="">
            </div>
            <div class="card-body">
                <ul>
                    <li><h4>Nom :</h4><br>${match.name}</li>
                    <br>
                    <li><h4>Date de création :</h4><br>${match.creationDate}</li>
                    <br>
                    <li><h4>Membres :</h4><br>${match.members.join(", ")}</li>
                    <br>
                    <li><h4>Premier album :</h4><br>${match.firstAlbum}</li>
                </ul>
                <div class="popup-header-cont">
                    <h3>${match.name}</h3>
                </div>
                <div class="read-more-cont">
                    <p class="relation" data-url="${match.relations}">...</p>
                </div>
                <button class="btn" type="button">Voir plus ...</button>
            </div>
        </div>
        `).join('');
        
        cardContainer.innerHTML = html;
    }
}