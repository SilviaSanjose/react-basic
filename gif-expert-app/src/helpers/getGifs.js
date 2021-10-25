//gestiona la llamada a la Api

export const getGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
        category
    )}&limit=10&api_key=q7GsWJMiOp6JXymWFFHrRZVqSSaSBNDD`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url, //? para indicar "si aparece"
        };
    });
    return gifs;
};
