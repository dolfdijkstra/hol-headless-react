const fetch = require('node-fetch')
const path = require('path')

const fs = require('fs')

const token = '2098fc4952037dd5ad3f379904fbbf49'

const host = 'https://workshop2content-oce0002.cec.ocp.oraclecloud.com'

const itemsURL = ({ maxResults, sortOrder }) =>
  `${host}/content/published/api/v1.1/items?orderBy=${esc(
    sortOrder
  )}&limit=${maxResults}&channelToken=${token}`

const dump = s => {
  console.log(JSON.stringify(s, null, 2))
  return s
}

const write = data => {
  fs.writeFileSync(
    path.join(__dirname, '/content.json'),
    JSON.stringify(data, null, 2)
  )
  return data
}

const esc = encodeURIComponent

const noDigitalAssets = e => e.type !== 'DigitalAsset'

const fetchItem = link => {
  return fetch(`${link.href}&expand=all`)
    .then(r => r.json())
    .then(data => ({ [link.id]: { data: data } }))
}
const fetchItems = data => {
  const links = data.ALL.data.items
    .filter(noDigitalAssets)
    .map(e => ({ id: e.id, href: e.links[0].href }))
    .sort((a, b) => a.href.localeCompare(b.href))
    .filter((e, i, a) => a.indexOf(e) === i)
  const itemFetches = links.map(fetchItem)
  return Promise.all(itemFetches)
    .then(a => a.reduce((a, e) => Object.assign(a, e), {}))
    .then(r => Object.assign(data, r))
}
const fetches = fetch(
  itemsURL({ maxResults: 500, sortOrder: 'updatedDate:des' })
)
  .then(response => response.json())
  .then(data => ({ ALL: { data: data } }))

fetches.then(fetchItems).then(write)
