const searchArtists = async searchText => {
    const response = await fetch(apiUrl + endpoints.artists);
    const artistsData = await response.json();

    let matches = artistsData.filter(artist => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        const allMembers = artist.members.join(" ");

        return (
            artist.name.match(regex) || artist.creationDate.toString().match(regex) || allMembers.match(regex) || artist.firstAlbum.toString().match(regex)
        );
    });

    if (searchText.length === 0) {
        matches = [];
        cardContainer.innerHTML = '';
    }

    outputHtml(matches);
}