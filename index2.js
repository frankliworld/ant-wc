const sizes = {
  small: '24px',
  medium: '48px',
  large: '96px',
}

class AntAvatar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const size = this.getAttribute('size') || 'medium';
    const social = this.getAttribute('social') || '';
    const username = this.getAttribute('username');
    const paths = [social, username]
      .filter(Boolean)
      .join('/');

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 4px;
        }
        img {
          width: ${sizes[size]};
          aspect-ratio: 1/1;
          border-radius: 50%;         
        }
        .username {
          font-size: 0.8em;
          text-align: center;
          color: currentColor;
        }
       </style>
       <img src="https://unavatar.io/${paths}" />
       <h2 class="username">${username}</h2>
        `
  }        
}
window.customElements.define('ant-avatar', AntAvatar);
