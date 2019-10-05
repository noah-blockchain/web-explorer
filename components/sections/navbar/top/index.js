import React from 'react'
import Link from 'next/link'
import MenuSurface from '~/components/menuSurface'
import Search from '~/containers/search'
import './section_navbar-top.less'

export default ({ handleSearchSubmit }) => (
  <section className="section section_navbar-top">
    <div className="wrapper_section-content">
      <Link href="/">
        <img
          className="section__logo"
          src={require('~/images/logo.svg')}
          alt="noah logo"
        />
      </Link>
      <div className="section__forms">
        <Search>
          <form className="section__search-form" onSubmit={handleSearchSubmit}>
            <input className="section__search-input" placeholder="Search" />
            <button className="section__search-button" type="submit">
              <img
                className="ssection__search-button-image"
                src={require('./images/search.svg')}
                alt="search"
              />
            </button>
          </form>
        </Search>
        <div className="section__switcher-container">
          <MenuSurface
            header={
              <>
                <img
                  className="section__switcher-header-icon"
                  src={require('~/images/logo.svg')}
                  alt="noah logo"
                />
                <p className="section__switcher-header-text">
                  NOAH Blockchain Testnet
                </p>
              </>
            }
            body={
              <>
                <div className="section__switcher-body-item">
                  <img
                    className="section__switcher-body-icon"
                    src={require('~/images/logo.svg')}
                    alt="noah logo"
                  />
                  <p className="section__switcher-body-text">
                    NOAH Blockchain Testnet
                  </p>
                </div>
                <div className="section__switcher-body-item section__switcher-body-item--unavailable">
                  <img
                    className="section__switcher-body-icon"
                    src={require('~/images/logo.svg')}
                    alt="noah logo"
                  />
                  <p className="section__switcher-body-text">
                    NOAH Blockchain Mainnet
                  </p>
                </div>
              </>
            }
          />
        </div>
      </div>
      <div className="section__language">
        <img
          className="section__language-icon"
          src={require('~/images/languages/en.svg')}
        />
      </div>
    </div>
  </section>
)
