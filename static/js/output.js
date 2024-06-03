const outputHtml = (matches) => {
    if (matches.length > 0) {
        const html = matches.map(match => `
            <div class="card">
                <div class="card-header">
                    <img src="${match.image}" alt="">
                </div>
                <div class="card-body">
                    <div class="section">
                        <strong>${match.name}</strong>
                    </div>
                    <hr>
                    <div class="section">
                        <strong>Date de création :</strong> ${match.creationDate}
                    </div>
                    <hr>
                    <div class="section">
                        ${match.members.join("<br>")}
                    </div>
                    <hr>
                    <div class="section">
                        <strong>Date du premier album :</strong> 
                        <br>
                        ${match.firstAlbum}
                    </div>
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
    