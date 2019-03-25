const token = '2098fc4952037dd5ad3f379904fbbf49'

const host = 'https://workshop2content-oce0002.cec.ocp.oraclecloud.com'

const itemsURL = ({ maxResults, sortOrder }) =>
  `${host}/content/published/api/v1.1/items?orderBy=${esc(
    sortOrder
  )}&limit=${maxResults}&channelToken=${token}`

const esc = encodeURIComponent

const noDigitalAssets = e => e.type !== 'DigitalAsset'

const fetchItem = link => {
  return fetch(`${link.href}&expand=all`)
    .then(r => r.json())
}
const fetchItems = data => {
  const {ALL}= data
  const links = ALL.items
    .filter(noDigitalAssets)
    .map(e => ({ id: e.id, href: e.links[0].href }))
  const itemFetches = links.map(fetchItem)
  return Promise.all(itemFetches).then(data => ({ALL, items:data}))
}
const fetches = ()=> fetch(
  itemsURL({ maxResults: 500, sortOrder: 'updatedDate:des' })
)
  .then(response => response.json())
  .then(data => ({ ALL: data }))

const all = () => fetches().then(fetchItems)

export default all
