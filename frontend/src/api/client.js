export function getData(query) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost/api/github/commits/${query.page+1}`;

        fetch(url)
            .then(response => response.json())
            .then(result => {
                console.log(result);

                resolve({
                    data: result.commits,
                    page: query.page,
                    totalCount: 999999
                })
            })
    })
}