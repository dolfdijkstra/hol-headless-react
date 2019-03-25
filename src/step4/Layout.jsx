import React, { Component } from 'react'

import content from './content.json'

const allItems = content.ALL.data.items

const items = allItems.filter(item => item.type === 'Maximum_Article')

const fullItem = item => content[item.id].data

const toHref = link =>
  link.href.replace('/items/', '/digital-assets/') + '/default'

const fields = [
    name,
    description,
    id,
    links
]

export default class Layout extends Component {
  render () {
    return (
      <div>
        <h1>Hello Content</h1>
        {items
          .map(fullItem)
          .map((item, index) => <Blog key={index} item={item} />)}
      </div>
    )
  }
}

const Blog = ({ item }) => {
  const { data } = item
  const {
    name,
    description,
    id,
    links
  } = data
  const content = { __html: id.fields.maximum_article_content } // to be used with dangerouslySetInnerHTML
  const image = toHref(id.fields.maximum_article_image_280x210.native.href)

  return (
    <div>
      <div>
        <strong>NAME</strong>: CATEGORY
      </div>
      <div>IMAGE</div>
      <div>CONTENT</div>
    </div>
  )
}
