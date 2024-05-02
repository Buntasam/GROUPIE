function API(elementJSON, relation) {
    const datesLocations = elementJSON.datesLocations;
    const result = Object.entries(datesLocations)
        .map(([key, value]) => `${key} : ${value}`)
        .join('<br>');

    relation.innerHTML = result;
}
