import React from 'react'
import whatsapp from "../assets/whatsapp.png"


export default function WhatsAppLogo() {
    const whatsappStyle = {
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: 1000,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        backgroundColor: '#fff',
        boxShadow: '0 0 20px rgba(138, 43, 226, 0.6), 0 0 40px rgba(138, 43, 226, 0.4), 0 0 60px rgba(138, 43, 226, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'violetPulse 2s infinite'
    };

    const imgStyle = {
        width: '70px',
        height: '70px',
        objectFit: 'contain',
        display: 'block'
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 0 30px rgba(138, 43, 226, 0.8), 0 0 60px rgba(138, 43, 226, 0.6), 0 0 90px rgba(138, 43, 226, 0.4)';
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 0 20px rgba(138, 43, 226, 0.6), 0 0 40px rgba(138, 43, 226, 0.4), 0 0 60px rgba(138, 43, 226, 0.3)';
    };

    return (
        <>
            <style>
                {`
                    @keyframes violetPulse {
                        0%, 100% {
                            box-shadow: 0 0 20px rgba(138, 43, 226, 0.6), 0 0 40px rgba(138, 43, 226, 0.4), 0 0 60px rgba(138, 43, 226, 0.3);
                        }
                        50% {
                            box-shadow: 0 0 30px rgba(138, 43, 226, 0.8), 0 0 50px rgba(138, 43, 226, 0.5), 0 0 70px rgba(138, 43, 226, 0.4);
                        }
                    }
                `}
            </style>
            <div 
                className="whatsapp" 
                style={whatsappStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <a href="https://wa.me/919553765409" target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp} style={imgStyle} alt="WhatsApp" />
                </a>
            </div>
        </>
    )
}