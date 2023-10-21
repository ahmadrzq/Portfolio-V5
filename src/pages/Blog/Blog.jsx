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
    {
      id: 4,
      title: 'How to install figma on debian 12 XFCE',
      date: '1 Oktober 2023',
      description:
        'Figma is a web-based graphics editing and prototyping tool. It is primarily used for user interface and user experience design. Figma is a popular tool for web designers because it allows them to create and share designs in real-time.',
      image: post1,
      category: 'design',
    },
    {
      id: 5,
      title: 'How to create BRD using Figma',
      date: '2 Oktober 2023',
      description:
        'A business requirements document (BRD) is a formal contract between the organization and the customer for a product. A BRD is used through the entire cycle of the project to ensure that the product meets the detailed specifications and that the project gains value and achieves the desired results.',
      image: post2,
      category: 'design',
    },
    {
      id: 6,
      title: 'How to install Nodejs debian 12',
      date: '3 Oktober 2023',
      description:
        'Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command-line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user\'s web browser.',
      image: post3,
      category: 'tools',
    },
    {
      id: 7,
      title: 'How to install react using vite',
      date: '10 Oktober 2023',
      description:
        'Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts: a dev server that serves your source files over native ES modules, and a build command that bundles your code with Rollup for production.',
      image: post1,
      category: 'tools',
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

  // read the first option value from select
  const [filter, setFilter] = useState('');
  const handleFilter = (e) => {
    setFilter(e.target.value.toLowerCase());
  };
  useEffect(() => {
    const results = filter === 'all' ? posts : posts.filter((post) =>
      post.category.toLowerCase().includes(filter)
    );
    setSearchResults(results);
  }, [filter]);

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
            <select name="filter" id="" onChange={handleFilter} value={filter} >
              <option className="filter-option" value="all">All</option>
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
