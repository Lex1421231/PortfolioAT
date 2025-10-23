class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: #030712;
          color: white;
        }
footer {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
        }
        
        .footer-logo {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.5rem;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 1.5rem;
          display: inline-block;
        }
        
        .footer-description {
          color: #9ca3af;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .footer-social {
          display: flex;
          gap: 1rem;
        }
        
        .footer-social a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transition: all 0.3s ease;
        }
        
        .footer-social a:hover {
          background: #6366f1;
          transform: translateY(-3px);
        }
        
        .footer-heading {
          font-weight: 600;
          font-size: 1.125rem;
          margin-bottom: 1.5rem;
          color: white;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-links a {
          color: #9ca3af;
          opacity: 0.8;
text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .footer-links a:hover {
          color: #6366f1;
        }
        .footer-bottom {
          grid-column: 1 / -1;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
padding-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: center;
          color: #9ca3af;
          font-size: 0.875rem;
        }
        
        @media (max-width: 768px) {
          footer {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .footer-social {
            justify-content: center;
          }
        }
      </style>
      
      <footer>
        <div class="footer-about">
          <div class="footer-logo">Алексей Цветков</div>
          <p class="footer-description">
            Создание эффективного цифрового опыта посредством идеального сочетания маркетинга, дизайна и разработки.
          </p>          
        </div>
        
        <div class="footer-links-section">
          <h3 class="footer-heading">Быстрые ссылки</h3>
          <ul class="footer-links">
            <li><a href="#about">Обо мне</a></li>
            <li><a href="#work">Работы</a></li>
            <li><a href="#contact">Контакты</a></li>
            
          </ul>
        </div>
        
        <div class="footer-links-section">
          <h3 class="footer-heading">Услуги</h3>
          <ul class="footer-links">
            <li><a href="#">Маркетинговая стратегия</a></li>
            <li><a href="#">UI/UX Дизайн</a></li>
            <li><a href="#">Веб разработка</a></li>
            <li><a href="#">Брендирование</a></li>
          </ul>
        </div>
        
        <div class="footer-links-section">
          <h3 class="footer-heading">Контакты</h3>
          <ul class="footer-links">
            <li><a href="mailto:tsvetkovaleksey5@gmail.com">tsvetkovaleksey5@gmail.com</a></li>
            <li><a href="tel:+79645746614">+7 (964) 574-66-14</a></li>
            <li>Москва, Россия</li>
          </ul>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Алексей Цветков. Все права защищены.</p>
          <p>Сделано со страстью и большим количеством кофе.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);