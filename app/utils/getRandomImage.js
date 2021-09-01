const fetch = require('node-fetch')

const getRandomImage = async () => {
  const { url } = await fetch('https://source.unsplash.com/random')

  return url
}

module.exports = getRandomImage
