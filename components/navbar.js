class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          background: rgba(17, 24, 39, 0.95);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
        
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
        }
        
        .logo {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.5rem;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-decoration: none;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        .nav-links a {
          font-weight: 600;
          color: #d1d5db;
text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          padding-bottom: 4px;
        }
        
        .nav-links a:hover {
          color: #6366f1;
        }
        
        .nav-links a:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #6366f1;
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.3s ease;
        }
        
        .nav-links a:hover:after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
        
        .cta-button {
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          color: white;
          padding: 0.6rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.3);
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 10px -1px rgba(99, 102, 241, 0.4);
        }
        
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: #4b5563;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .mobile-menu-button {
            display: block;
          }
        .nav-links {
            display: none;
            position: absolute;
            top: 80px;
            left: 0;
            right: 0;
            background: #1f2937;
flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          }
          
          .nav-links.active {
            display: flex;
          }
        }
      </style>
      
      <nav>
        <a href="/" class="logo">✦</a>
        
        <button class="mobile-menu-button">
          <i data-feather="menu"></i>
        </button>
        
        <ul class="nav-links">
          <li><a href="#about">Обо мне</a></li>
          <li><a href="#work">Работы</a></li>          
          <li><a href="#contact" class="cta-button">Контакты</a></li>
        </ul>
      </nav>
    `;
    
    // Add mobile menu toggle functionality
    const menuButton = this.shadowRoot.querySelector('.mobile-menu-button');
    const navLinks = this.shadowRoot.querySelector('.nav-links');
    
    menuButton.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuButton.innerHTML = navLinks.classList.contains('active') 
        ? '<i data-feather="x"></i>' 
        : '<i data-feather="menu"></i>';
      feather.replace();
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);