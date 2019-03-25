import React, { Component } from 'react'
import './w3.css'
import './raleway.css'

import content from './content.json'

const allItems = content.ALL.data.items

const items = allItems.filter(item => item.type === 'Maximum_Article')

const fullItem = item => content[item.id].data

const toHref = da => da.fields.native.links[0].href

export default class Layout extends Component {
  render () {
    return (
      <div>
        <Body />
      </div>
    )
  }
}
const w100pct = { width: '100%' }
const w50px = { width: '50px' }

const Body = () => (
  <div className='w3-light-grey'>
    <div className='w3-content' style={{ maxWidth: '1400px' }}>
      <Header />
      <div className='w3-row'>
        <div className='w3-col l8 s12'>
          <Blogs />
        </div>
        <div className='w3-col l4'>
          <AboutCard />
          <hr />
          <PopularPosts />
        </div>
      </div>
      <br />
    </div>
    <Footer />
  </div>
)

const Header = () => (
  <header className='w3-container w3-center w3-padding-32'>
    <h1>
      <b>Car Lovers Blog</b>
    </h1>
    <p>
      The blog of <span className='w3-tag'>Car Lovers</span>
    </p>
  </header>
)

const Footer = () => (
  <footer className='w3-container w3-dark-grey w3-padding-32 w3-margin-top'>
    <p>
      Powered by{' '}
      <a href='https://www.w3schools.com/w3css/default.asp' target='_blank'>
        w3.css
      </a>
    </p>
  </footer>
)

const AboutCard = () => (
  <div className='w3-card w3-margin w3-margin-top'>
    <img src='/w3images/avatar_g.jpg' style={w100pct} />
    <div className='w3-container w3-white'>
      <h4>
        <b>Car Lovers</b>
      </h4>
      <p>
        Just me, myself and I, exploring the universe of uknownment. I have a
        heart of love and a interest of lorem ipsum and mauris neque quam blog.
        I want to share my world with you.
      </p>
    </div>
  </div>
)

const PopularPosts = () => (
  <div className='w3-card w3-margin'>
    <div className='w3-container w3-padding'>
      <h4>Popular Posts</h4>
    </div>
    <ul className='w3-ul w3-hoverable w3-white'>
      <li className='w3-padding-16'>
        <img
          src='/w3images/workshop.jpg'
          alt='Image'
          className='w3-left w3-margin-right'
        />
        <span className='w3-large'>Lorem</span>
        <br />
        <span>Sed mattis nunc</span>
      </li>
      <li className='w3-padding-16'>
        <img
          src='/w3images/gondol.jpg'
          alt='Image'
          className='w3-left w3-margin-right'
          style={w50px}
        />
        <span className='w3-large'>Ipsum</span>
        <br />
        <span>Praes tinci sed</span>
      </li>
      <li className='w3-padding-16'>
        <img
          src='/w3images/skies.jpg'
          alt='Image'
          className='w3-left w3-margin-right'
          style={w50px}
        />
        <span className='w3-large'>Dorum</span>
        <br />
        <span>Ultricies congue</span>
      </li>
      <li className='w3-padding-16 w3-hide-medium w3-hide-small'>
        <img
          src='/w3images/rock.jpg'
          alt='Image'
          className='w3-left w3-margin-right'
          style={w50px}
        />
        <span className='w3-large'>Mingsum</span>
        <br />
        <span>Lorem ipsum dipsum</span>
      </li>
    </ul>
  </div>
)

const Blogs = () => (
  <div>
    <div className='w3-card-4 w3-margin w3-white'>
      <img src='/w3images/woods.jpg' alt='Nature' style={w100pct} />
      <div className='w3-container'>
        <h3>
          <b>TITLE HEADING</b>
        </h3>
        <h5>
          Title description, <span className='w3-opacity'>April 7, 2014</span>
        </h5>
      </div>

      <div className='w3-container'>
        <p>
          Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
          Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna
          enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non
          congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed
          vitae justo condimentum, porta lectus vitae, ultricies congue gravida
          diam non fringilla.
        </p>
        <div className='w3-row'>
          <div className='w3-col m8 s12'>
            <p>
              <button className='w3-button w3-padding-large w3-white w3-border'>
                <b>READ MORE »</b>
              </button>
            </p>
          </div>
          <div className='w3-col m4 w3-hide-small'>
            <p>
              <span className='w3-padding-large w3-right'>
                <b>Comments  </b> <span className='w3-tag'>0</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr />

    {/* Blog entry - */}
    <div className='w3-card-4 w3-margin w3-white'>
      <img src='/w3images/bridge.jpg' alt='Norway' style={w100pct} />
      <div className='w3-container'>
        <h3>
          <b>BLOG ENTRY</b>
        </h3>
        <h5>
          Title description, <span className='w3-opacity'>April 2, 2014</span>
        </h5>
      </div>

      <div className='w3-container'>
        <p>
          Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
          Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna
          enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non
          congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed
          vitae justo condimentum, porta lectus vitae, ultricies congue gravida
          diam non fringilla.
        </p>
        <div className='w3-row'>
          <div className='w3-col m8 s12'>
            <p>
              <button className='w3-button w3-padding-large w3-white w3-border'>
                <b>READ MORE »</b>
              </button>
            </p>
          </div>
          <div className='w3-col m4 w3-hide-small'>
            <p>
              <span className='w3-padding-large w3-right'>
                <b>Comments  </b> <span className='w3-badge'>2</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const NoItems = () => <div>No items to display</div>
const List = () => (
  <div>
    {items.map(fullItem).map((item, index) => (
      <Blog key={index} item={item} />
    ))}
  </div>
)
const dateToMDY = date =>
  new Date(date.value).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

const Blog = ({ item }) => {
  const { fields } = item
  const {
    maximum_article_category,
    maximum_article_content,
    maximum_article_image_280x210,
    maximum_article_image_1000x562,
    maximum_article_date
  } = fields
  const content = { __html: maximum_article_content } // to be used with dangerouslySetInnerHTML
  const image = toHref(maximum_article_image_1000x562)
  const date = dateToMDY(item.updatedDate)

  return (
    <div className='w3-card-4 w3-margin w3-white'>
      <img src={image} alt={item.name} style={w100pct} />
      <div className='w3-container'>
        <h3>
          <b>{maximum_article_category}</b>
        </h3>
        <h5>
          {item.description}, <span className='w3-opacity'>{date}</span>
        </h5>
      </div>

      <div className='w3-container'>
        <p dangerouslySetInnerHTML={content} />
        <div className='w3-row'>
          <div className='w3-col m8 s12'>
            <p>
              <button className='w3-button w3-padding-large w3-white w3-border'>
                <b>READ MORE »</b>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
