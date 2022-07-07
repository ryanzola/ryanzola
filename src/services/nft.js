async function getNFTData() {
  await fetch('/nft/nft-metadata.json')
    .then(res => {
      return res.json()
    })
    .then(data => {
      return data
    })
    .catch(e => {
      console.error('oh', e)
    })
}

export { getNFTData }