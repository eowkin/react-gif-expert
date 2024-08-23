export const getGifByCategory = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=P4y0SSxDqYuxeLWY3ugNdf3UobELNh0O&q=${category}&limit=10`;
  //console.log(url);
  const resp = await fetch(url);
  const { data } = await resp.json();
  //console.log(data);
  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));
  //console.log(gifs);
  return gifs;
};
