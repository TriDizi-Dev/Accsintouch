import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import your images
import halfface from '../../assets/halfface.png';
import girlwithbun from '../../assets/girlwithbun.png';
import bow1 from '../../assets/bow1.png';

export default function HeroCarousel({ handleNavigateToProducts, handleNavigateToCategory }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = [
    {
      id: 1,
      type: 'main',
      content: (
        <div style={{ 
          position: 'relative',
          background: 'linear-gradient(135deg, #FFEFE7 0%, #FFE8DC 100%)',
          borderRadius: isMobile ? '12px' : '20px',
          overflow: 'hidden',
          height: isMobile ? '420px' : isTablet ? '480px' : '550px',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
        }}>
          <img 
            src={halfface} 
            alt="Model with earrings" 
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              width: isMobile ? '100%' : isTablet ? '50%' : '55%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: isMobile ? 'center' : 'center',
              opacity: isMobile ? 0.3 : 1
            }}
          />
          <div style={{
            position: 'relative',
            zIndex: 2,
            padding: isMobile ? '30px 20px' : isTablet ? '40px' : '60px',
            maxWidth: isMobile ? '100%' : '600px',
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '16px' : '24px'
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: isMobile ? '10px' : '15px' }}>
              <h1 style={{
                fontSize: isMobile ? '60px' : isTablet ? '80px' : '120px',
                fontWeight: '800',
                lineHeight: '1',
                margin: 0,
                color: '#000',
                textShadow: '2px 2px 4px rgba(0,0,0,0.05)'
              }}>50%</h1>
              <div style={{
                fontSize: isMobile ? '28px' : isTablet ? '36px' : '48px',
                fontWeight: '700',
                color: '#000',
                letterSpacing: '-1px'
              }}>OFF</div>
            </div>
            <p style={{
              fontSize: isMobile ? '13px' : '16px',
              lineHeight: '1.6',
              color: '#333',
              maxWidth: isMobile ? '100%' : '420px',
              margin: 0
            }}>
              Discover quality fashion that reflects your style and makes everyday living more enjoyable
            </p>
            <button 
              onClick={handleNavigateToProducts}
              style={{
                backgroundColor: 'rgb(156, 39, 176)',
                color: 'white',
                padding: isMobile ? '12px 28px' : '16px 40px',
                borderRadius: '50px',
                border: 'none',
                fontWeight: '600',
                fontSize: isMobile ? '13px' : '15px',
                cursor: 'pointer',
                width: 'fit-content',
                transition: 'all 0.3s ease',
                letterSpacing: '0.5px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
              }}
            >
              Explore Products
            </button>
          </div>
        </div>
      )
    },
    {
      id: 2,
      type: 'promo-purple',
      content: (
        <div style={{ 
          display: 'flex',
          height: isMobile ? '420px' : isTablet ? '480px' : '550px',
          width: '100%',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'stretch',
          gap: 0,
          background: 'linear-gradient(135deg, #FED7FF 0%, #FFE8FF 100%)',
          borderRadius: isMobile ? '12px' : '20px',
          overflow: 'hidden',
          boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
        }}>   
          {/* IMAGE HIDDEN ON MOBILE */}
          {!isMobile && (
            <div style={{ 
              flex: '1.2',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <img 
                src={girlwithbun} 
                alt="Promo Offer" 
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transform: 'scale(1.05)'
                }} 
              />
            </div>
          )}
          <div style={{ 
            flex: '1',
            padding: isMobile ? '40px 20px' : isTablet ? '40px 30px' : '60px 50px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: isMobile ? '16px' : '24px',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            <span style={{
              fontSize: isMobile ? '10px' : '12px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: '#666',
              display: 'block'
            }}>For New Accounts</span>
            <h2 style={{
              fontSize: isMobile ? '32px' : isTablet ? '40px' : '56px',
              fontWeight: '800',
              margin: 0,
              lineHeight: '1.1',
              letterSpacing: '-2px',
              color: '#000'
            }}>
              EXCLUSIVE<br/>OFFER!
            </h2>
            <button 
              onClick={handleNavigateToProducts}
              style={{
                backgroundColor: 'rgb(156, 39, 176)',
                color: 'white',
                padding: isMobile ? '12px 28px' : '16px 40px',
                borderRadius: '50px',
                border: 'none',
                fontWeight: '600',
                fontSize: isMobile ? '13px' : '15px',
                cursor: 'pointer',
                width: isMobile ? '100%' : 'fit-content',
                transition: 'all 0.3s ease',
                letterSpacing: '0.5px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                margin: isMobile ? '0 auto' : '0'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
              }}
            >
              Claim Now
            </button>
          </div>
        </div>
      )
    },
    {
      id: 3,
      type: 'promo-light',
      content: (
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: isMobile ? '420px' : isTablet ? '480px' : '550px',
          width: '100%',
          background: 'linear-gradient(135deg, #E8E5FF 0%, #F5F3FF 100%)',
          borderRadius: isMobile ? '12px' : '20px',
          padding: isMobile ? '25px 15px' : isTablet ? '35px' : '50px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: isMobile ? '180px' : '280px',
            height: isMobile ? '180px' : '280px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.3)',
            filter: 'blur(60px)'
          }} />
          
          <div style={{ 
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1
          }}>
            <span style={{
              fontSize: isMobile ? '9px' : '11px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: '#666'
            }}>NEW ARRIVAL</span>
            <span style={{
              fontSize: isMobile ? '9px' : '11px',
              fontWeight: '700',
              letterSpacing: '2px',
              color: '#666'
            }}>2025</span>
          </div>
          
          <div style={{ 
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{
              background: 'white',
              borderRadius: '50%',
              padding: isMobile ? '20px' : isTablet ? '28px' : '40px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              animation: 'float 3s ease-in-out infinite'
            }}>
              <img 
                src={bow1} 
                alt="Hair Bow" 
                style={{ 
                  height: isMobile ? '120px' : isTablet ? '160px' : '220px',
                  width: isMobile ? '120px' : isTablet ? '160px' : '220px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.1))'
                }} 
              />
            </div>
          </div>
          
          <div style={{ 
            width: '100%',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'center' : 'center',
            gap: isMobile ? '12px' : '20px',
            zIndex: 1,
            textAlign: 'center'
          }}>
            <p style={{
              fontFamily: 'Segoe UI',
              fontWeight: '700',
              fontSize: isMobile ? '13px' : '15px',
              margin: 0,
              color: '#000'
            }}>
              Browse Hair Accessories
            </p>
            <button 
              onClick={() => handleNavigateToCategory('hair-bows')}
              style={{
                backgroundColor: 'rgb(156, 39, 176)',
                color: 'white',
                padding: isMobile ? '12px 28px' : '16px 40px',
                borderRadius: '50px',
                border: 'none',
                fontWeight: '600',
                fontSize: isMobile ? '13px' : '15px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                letterSpacing: '0.5px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                whiteSpace: 'nowrap',
                width: isMobile ? '100%' : 'auto'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
              }}
            >
              Buy Now
            </button>
          </div>

          <style>
            {`
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-16px); }
              }
            `}
          </style>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ 
      padding: isMobile ? '15px 10px' : isTablet ? '25px 30px' : '40px 60px',
      position: 'relative',
      maxWidth: '1600px',
      margin: '0 auto'
    }}>
      <div style={{ 
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        borderRadius: isMobile ? '12px' : '20px'
      }}>
        <div style={{ 
          display: 'flex',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: `translateX(-${currentSlide * 100}%)`
        }}>
          {slides.map((slide) => (
            <div key={slide.id} style={{ 
              minWidth: '100%',
              flex: '0 0 100%'
            }}>
              {slide.content}
            </div>
          ))}
        </div>

        {!isMobile && (
          <>
            <button 
              onClick={prevSlide}
              style={{
                position: 'absolute',
                left: isTablet ? '12px' : '25px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: isTablet ? '38px' : '48px',
                height: isTablet ? '38px' : '48px',
                border: 'none',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.95)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(156, 39, 176, 0.95)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              <ChevronLeft size={isTablet ? 18 : 22} strokeWidth={2.5} />
            </button>

            <button 
              onClick={nextSlide}
              style={{
                position: 'absolute',
                right: isTablet ? '12px' : '25px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: isTablet ? '38px' : '48px',
                height: isTablet ? '38px' : '48px',
                border: 'none',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.95)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(156, 39, 176, 0.95)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              <ChevronRight size={isTablet ? 18 : 22} strokeWidth={2.5} />
            </button>
          </>
        )}

        <div style={{
          position: 'absolute',
          bottom: isMobile ? '15px' : '25px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: isMobile ? '6px' : '8px',
          zIndex: 10,
          background: 'rgba(255, 255, 255, 0.8)',
          padding: isMobile ? '6px 10px' : '8px 14px',
          borderRadius: '50px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        }}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: currentSlide === index ? (isMobile ? '20px' : '28px') : (isMobile ? '6px' : '8px'),
                height: isMobile ? '6px' : '8px',
                borderRadius: '4px',
                border: 'none',
                background: currentSlide === index ? '#9C27B0' : '#D1D1D1',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: currentSlide === index ? '0 2px 8px rgba(156, 39, 176, 0.4)' : 'none'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}