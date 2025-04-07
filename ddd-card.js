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
    super ();
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
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        border-radius: --ddd-radius-sm;
        padding: --ddd-spacing-3;
        max-width: --ddd-border-sm;
        border: --ddd-border-sm;
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
        border: 2px solid white;
      }
      h3 span {
        font-size: var(--ddd-card-label-font-size, var(--ddd-font-size-s));
      }
      img {
  display: block;
  max-width: 85%;
  height: auto;
  margin:  var(--ddd-spacing-0) auto;
  border-radius: --ddd-radius-md;
  border: --ddd-border-md;
  box-shadow: --ddd-boxShadow-sm;
       }

      .content {
  margin-top: --ddd-spacing-4;
  padding: 0 var(--ddd-spacing-3);
       }

      .title {
  font-weight: --ddd-font-size-bold;
  font-size: var(--ddd-font-size-md);
  margin: var(--ddd-spacing-4) 0;
  color: var(--ddd-color-primary);
  text-transform: uppercase;
       }

      details {
  border:--ddd-border-sm;
  border-radius: --ddd-radius-md;
  text-align: center;
  padding: --ddd-spacing-3;
  background-color: var(--ddd-color-primary);
  height: auto;
  overflow: hidden;
       }

      details summary {
  font-size:--ddd-font-size-3xs;
  padding: var(--ddd-spacing-3) 0;
  cursor: pointer;
  font-weight:--ddd-font-size-bold;
       }

      .desc {
  font-size: var(--ddd-font-size-base);
  color: --ddd-theme-default-white;
  margin:var(--ddd-spacing-3) 0;
       }

      .url {
  display: inline-block;
  padding: var(--ddd-spacing-3) var(--ddd-spacing-4);
  margin: var(--ddd-spacing-3) auto;
  font-weight:--ddd-font-weight-bold;
  font-size: var(--ddd-font-size-base);
  color:var(--ddd-color-white);
  border: --ddd-border-sm;
  border-radius: --ddd-radius-md;
  transition: all 0.3s ease-in-out;
  background-color:--ddd-theme-default-potential0;
       }

      .url:hover {
  background-color: var(--ddd-color-primary);
  color:  var(--ddd-color-black);
  transform: scale(1.05);
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
          src="${this.image}"
          style="width:500px; height:500px;" />

        <div class="card-text">
          <!-- Dynamically set the card's title -->
          <h3 class="card-title">${this.title}</h3>
          
          <!-- Add the card's details, showing description and link -->
          <div class="card-details">
            <details>
              <summary>Description</summary>
              <p>${this.description}</p>
              <ul class="links">
                <li>
                  <a href="${this.link}" target="_blank">Explore</a>
                </li>
              </ul>
            </details>
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