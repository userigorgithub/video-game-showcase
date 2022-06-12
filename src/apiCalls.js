const fetchData = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9ed5acaa8fmshf12dc90a1184bd6p121c27jsna84ebf2de73e',
      'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
    }
  };
  return fetch('https://mmo-games.p.rapidapi.com/games', options)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(response.statusText)
      }
    })
}

export { fetchData };
