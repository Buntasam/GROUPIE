function elementAPI(elementJSON, relation) {
    let json = JSON.stringify(elementJSON.datesLocations);
    let parseJSON = JSON.parse(json);
    let result = [];

    for (let key in parseJSON) {
        result.push(`${key} : ${parseJSON[key]}`);
    }

    relation.innerHTML = result.join('<br>');
}

// POUR LES DATES DANS VOIR PLUS... CONCATAINER LES DATES ET LES LIEUX