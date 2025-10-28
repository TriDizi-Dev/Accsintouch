import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Calendar, User, Search, Clock } from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import blog1 from '../../assets/blog1.png'; // Ensure these are high-resolution images
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';

const Blog = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Get cart and wishlist counts from localStorage
  const [cart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  // All blogs data
  const allBlogs = [
    {
      id: 1,
      title: 'NEW ARRIVAL OF BRANDS ECO-FRIENDLY',
      desc: 'Discover quality furniture that reflects your style and makes everyday living more enjoyable.',
      image: blog1,
      author: 'Sarah Johnson',
      date: '2024-10-15',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'NEW DESIGN OF BRANDS ECO-FRIENDLY',
      desc: 'Discover quality furniture that reflects your style and makes everyday living more enjoyable.',
      image: blog2,
      author: 'Emily Davis',
      date: '2024-10-18',
      readTime: '4 min read',
    },
    {
      id: 3,
      title: 'NEW ARRIVAL OF BRANDS ECO-FRIENDLY',
      desc: 'Discover quality furniture that reflects your style and makes everyday living more enjoyable.',
      image: blog3,
      author: 'Michael Brown',
      date: '2024-10-20',
      readTime: '6 min read',
    },
  ];

  // Filter blogs based on search
  const filteredBlogs = allBlogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle blog click
  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Global styles and media queries */}
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          /* Hover effects and transitions */
          .blog-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
          }

          .blog-card:hover .blog-image {
            transform: scale(1.1);
          }

          .blog-link:hover {
            background: #9C27B0;
            color: white;
            transform: translateX(5px);
          }

          .clear-filters-btn:hover {
            background: #7B1FA2;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(156, 39, 176, 0.3);
          }

          .breadcrumb span:hover {
            color: #9C27B0;
          }

          .search-input:focus {
            border-color: #9C27B0;
            box-shadow: 0 0 0 3px rgba(156, 39, 176, 0.1);
          }

          /* Responsive Design */
          @media (max-width: 1024px) {
            .blog-grid {
              grid-template-columns: 1fr;
              gap: 25px;
            }
          }

          @media (max-width: 768px) {
            .blog-main {
              padding: 30px 30px;
            }
            .blog-hero-title {
              font-size: 32px;
            }
            .blog-hero-subtitle {
              font-size: 16px;
            }
          }

          @media (max-width: 480px) {
            .blog-main {
              padding: 20px;
            }
            .blog-filters {
              padding: 20px;
            }
            .blog-image-container {
              aspect-ratio: 4 / 3;
            }
            .blog-content {
              padding: 20px;
            }
            .blog-title {
              font-size: 18px;
            }
            .blog-meta {
              gap: 10px;
            }
            .blog-meta-item {
              font-size: 12px;
            }
          }
        `}
      </style>

      <div
        style={{
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          background: '#f9fafb',
          minHeight: '100vh',
        }}
      >
        <Header
          activePage="blog"
          cartCount={cart.length}
          wishlistCount={wishlist.length}
        />

        <main
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '40px 60px',
          }}
          className="blog-main"
        >
          {/* Breadcrumb */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '40px',
              color: '#666',
              fontSize: '14px',
            }}
            className="breadcrumb"
          >
            <span
              onClick={() => navigate('/')}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '15px' }}
            >
              Home
            </span>
            <ChevronRight size={18} />
            <span style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              Blog
            </span>
          </div>

          {/* Hero Section */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: '50px',
              padding: '40px 0',
            }}
          >
            <h1
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '15px',
                letterSpacing: '-1px',
              }}
              className="blog-hero-title"
            >
              Our Blog
            </h1>
            <p
              style={{
                fontSize: '18px',
                color: '#6b7280',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6',
              }}
              className="blog-hero-subtitle"
            >
              Stay updated with the latest trends, tips, and stories from the world of fashion accessories
            </p>
          </div>

          {/* Search Section */}
          <div
            style={{
              background: 'white',
              padding: '30px',
              borderRadius: '15px',
              marginBottom: '40px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
            }}
            className="blog-filters"
          >
            <div
              style={{
                position: 'relative',
                marginBottom: '25px',
              }}
            >
              <Search
                style={{
                  position: 'absolute',
                  left: '20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#9ca3af',
                }}
                size={20}
                className="search-icon"
              />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '15px 20px 15px 50px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '30px',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                }}
                className="search-input"
              />
            </div>
          </div>

          {/* Blog Grid */}
          {filteredBlogs.length > 0 ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '30px',
                marginBottom: '60px',
              }}
              className="blog-grid"
            >
              {filteredBlogs.map((blog) => (
                <div
                  key={blog.id}
                  style={{
                    background: 'white',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  className="blog-card"
                  onClick={() => handleBlogClick(blog.id)}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '4 / 3',
                      overflow: 'hidden',
                    }}
                    className="blog-image-container"
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        objectPosition: 'center',
                        transition: 'transform 0.3s ease',
                      }}
                      className="blog-image"
                      loading="lazy"
                    />
                    
                  </div>

                  <div
                    style={{
                      padding: '25px',
                    }}
                    className="blog-content"
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        marginBottom: '15px',
                        flexWrap: 'wrap',
                      }}
                      className="blog-meta"
                    >
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          fontSize: '13px',
                          color: '#6b7280',
                        }}
                        className="blog-meta-item"
                      >
                        <User size={14} style={{ color: '#9ca3af' }} />
                        {blog.author}
                      </span>
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          fontSize: '13px',
                          color: '#6b7280',
                        }}
                        className="blog-meta-item"
                      >
                        <Calendar size={14} style={{ color: '#9ca3af' }} />
                        {new Date(blog.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          fontSize: '13px',
                          color: '#6b7280',
                        }}
                        className="blog-meta-item"
                      >
                        <Clock size={14} style={{ color: '#9ca3af' }} />
                        {blog.readTime}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#1f2937',
                        marginBottom: '12px',
                        lineHeight: '1.4',
                        display: '-webkit-box',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                      className="blog-title"
                    >
                      {blog.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '14px',
                        color: '#6b7280',
                        lineHeight: '1.6',
                        marginBottom: '20px',
                        display: '-webkit-box',
                        WebkitLineClamp: '3',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                      className="blog-desc"
                    >
                      {blog.desc}
                    </p>

                    <button
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 20px',
                        background: 'transparent',
                        border: '2px solid #9C27B0',
                        borderRadius: '25px',
                        color: '#9C27B0',
                        fontWeight: '600',
                        fontSize: '14px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                      className="blog-link"
                    >
                      Read More <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: 'center',
                padding: '80px 20px',
                background: 'white',
                borderRadius: '15px',
                marginBottom: '60px',
              }}
              className="no-blogs"
            >
              <p
                style={{
                  fontSize: '18px',
                  color: '#6b7280',
                  marginBottom: '25px',
                }}
              >
                No blogs found matching your criteria.
              </p>
              <button
                style={{
                  padding: '12px 30px',
                  background: '#9C27B0',
                  color: 'white',
                  border: 'none',
                  borderRadius: '25px',
                  fontWeight: '600',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                className="clear-filters-btn"
                onClick={() => setSearchQuery('')}
              >
                Clear Search
              </button>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;