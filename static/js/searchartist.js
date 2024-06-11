
const searchArtists = async searchText => {
    // Get artists from API
    const response = await fetch(`${apiUrl}${endpoints.artists}`);
    const artistsData = await response.json();

    // Filters
    let matches = artistsData.filter(artist => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        const allMembers = artist.members.join(" ");
        const creationDate = artist.creationDate.toString();
        const firstAlbum = artist.firstAlbum.toString();

        return (
            artist.name.match(regex) || creationDate.match(regex) || allMembers.match(regex) || firstAlbum.match(regex)
        );
    });

    // If research field is empty, empty the card container
    if (searchText.length === 0) {
        matches = [];
        cardContainer.innerHTML = '';
    }
    outputHtml(matches);
}

