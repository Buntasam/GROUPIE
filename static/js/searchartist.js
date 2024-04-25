const searchArtists = async searchText => {
    const response = await fetch(`${apiUrl}${endpoints.artists}`);
    const artistsData = await response.json();

    let matches = artistsData.filter(artist => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        const allMembers = artist.members.join(" ");
        const creationDate = artist.creationDate.toString();
        const firstAlbum = artist.firstAlbum.toString();

        return (
            artist.name.match(regex) || creationDate.match(regex) || allMembers.match(regex) || firstAlbum.match(regex)
        );
    });

    if (searchText.length === 0) {
        matches = [];
        cardContainer.innerHTML = '';
    }

    outputHtml(matches);
}