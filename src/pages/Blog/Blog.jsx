import { useState, useEffect } from 'react'
import './Blog.css'
import Title from '../../components/Title/Title'
import search from '/image/search.svg'
import post1 from '/image/post1.png'
import post2 from '/image/post2.png'
import post3 from '/image/post3.png'
import CardPost from '../../components/Card/Posts/CardPost'

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'How to install debian 12 dualboot with windows 10',
      date: '28 September 2023',
      description:
        'Debian 12, also known as "bookworm," is the latest stable version of the Debian operating system. It was released on June 10th, 2023, after 1 year, 9 months, and 28 days of development 1 2 . Debian 12 is supported for the next 5 years thanks to the combined work of the Debian Security team and the Debian Long Term Support team 1 .',
      image: post1,
      category: 'tools',
    },
    {
      id: 2,
      title: 'How to install phpmyadmin on debian 12',
      date: '28 September 2023',
      description:
        'phpMyAdmin is a free and open-source administration tool for MySQL and MariaDB databases. It is a portable web application written primarily in PHP, and it is one of the most popular MySQL administration tools, especially for web hosting services .',
      image: post2,
      category: 'web',
    },
    {
      id: 3,
      title: 'How to install LAMP server on debian 12',
      date: '28 September 2023',
      description:
        'LAMP server is a software stack that combines four open-source components to create a web development environment. The LAMP stack is used to create, host, and maintain web content, and it is a popular solution that powers many websites and web applications.',
      image: post3,
      category: 'web',
    },
  ]

  // Search Function
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }
  useEffect(() => {
    const results = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm)
    )
    setSearchResults(results)
  }, [searchTerm])

  return (
    <section className="blog section">
      <Title value="My Blog" />
      <div className="blog__content">
        <div className="content__menu">
          <form className="search__menu">
            <input type="text" placeholder="Search..." onChange={handleChange} value={searchTerm} />
            <button>
              <img src={search} alt="" />
            </button>
          </form>
          <div className="filter__menu">
            <select name="filter" id="" >
              <option className="filter-option" value="web">Web</option>
              <option className="filter-option" value="design">Design</option>
              <option className="filter-option" value="tools">Tools</option>
            </select>
          </div>
        </div>

        <div className="content__post">
          {searchResults.map((post) => (
            <CardPost
              key={post.id}
              image={post.image}
              title={post.title}
              date={post.date}
              description={post.description}
              category={post.category}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
