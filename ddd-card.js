/**
 * Copyright 2025 amberkibera
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-card`
 * 
 * @demo index.html
 * @element ddd-card
 */
export class DddCard extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-card";
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = "https://via.placeholder.com/200"; 
    this.description = "This is a default description."; 
    this.link = "#"; 
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      altText: { type: String },
      description: { type: String },
      image: { type: String },
      link: { type: String },
      themeColor: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: inline-block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        border-radius: var(--ddd-radius-sm);
        padding: var(--ddd-spacing-3);
        border: var(--ddd-border-sm) solid red;
      }
      .card {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
        border: 2px solid white;
        width: 375px;
      }
      h3 span {
        font-size: var(--ddd-card-label-font-size, var(--ddd-font-size-s));
      }
      img {
        width: 100%;
        height: auto;
        display: block;
        margin:  var(--ddd-spacing-0) auto;
        border-radius: var(--ddd-radius-md);
        border: var(--ddd-border-sm) solid red;
        box-shadow: var(--ddd-boxShadow-sm);
       }

      .content {
       margin-top: var(--ddd-spacing-4);
       padding: 0 var(--ddd-spacing-3);
       }

       h3 {
        display: inline-block;
       }
       .title-bar {
          text-align: left;
          padding-left: 10px;
          margin-top: 10px;
          color: var(--ddd-theme-default-nittanyNavy);
          border: none;
          font-weight: bold;
          font-size: 28px;
        }
      .title {
        text-align: left;
          padding-left: 10px;
          margin-top: 10px;
          color: var(--ddd-theme-default-nittanyNavy);
          border: none;
          font-weight: bold;
          font-size: 28px;
       }

      .desc {
      font-size: var(--ddd-font-size-base);
      color: var(--ddd-theme-default-coalyGray);
      margin:var(--ddd-spacing-3) 0;
       }

      .url {
      display: inline-block;
      padding: var(--ddd-spacing-3) var(--ddd-spacing-4);
      margin: var(--ddd-spacing-3) auto;
      font-weight: var(--ddd-font-weight-bold);
      font-size: var(--ddd-font-size-base);
      color:var(--ddd-color-white);
      border: var(--ddd-border-sm) solid red;
      border-radius: var(--ddd-radius-md);
      transition: all 0.3s ease-in-out;
      background-color: var(--ddd-theme-default-potential0);
       }
       .button-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
        }
       button {
          width: 100%;
          background-color: #004684;
          color: white;
          border: none;
          padding: 12px 20px;
          font-size: 16px;
          font-weight: bold;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease-in-out;
          margin-bottom: 15px;
        }

      .url:hover {
      background-color: var(--ddd-color-primary);
      color:  var(--ddd-color-black);
      transform: scale(1.05);
       }
       .card-details {
        text-align: center;
       }
       a, a:link, a:visited {
        color: white;
          text-decoration: underline;
          font-size: var(--ddd-font-size-xs);
          background-color: var(--ddd-theme-primary);
       }
       a:hover, a:active {

       }
    `];
  }

  // Lit render the HTML
  render() {
     return html`
      <div class="card">
        <!-- Dynamically set the image and alt text -->
        <img 
          class="card-image"
          alt="${this.altText}"
          src="${this.image}" />

        <div class="card-text">
          <!-- Dynamically set the card's title -->
          <h3 class="card-title">${this.title}</h3>
          
          <!-- Add the card's details, showing description and link -->
          <div class="card-details">
              <p>${this.description}</p>
                  <a href="${this.link}" target="_blank">Explore</a>
          </div>
        </div>
      </div>
      `;
  }

  /**
   * haxProperties integration via file reference
   */
}

globalThis.customElements.define(DddCard.tag, DddCard);