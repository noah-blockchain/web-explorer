import React from 'react'
import './section_preface.less'
import Search from '~/containers/search'

export default () => (
  <section className="section section_preface">
    <div className="wrapper_section-content">
      <h1 className="section__title">NOAH Blockchain explorer</h1>
      <h2 className="section__subtitle">
        Explore all the blocks and transactions with a full transparency
      </h2>
      <Search>
        <form className="section__form">
          <input
            className="section__form-input"
            type="text"
            placeholder="Search by Address, Block Height, TxtHash, ..."
          />
          <button className="section__form-button" type="submit">
            <img
              className="section__form-button-image"
              src={require('./images/search.svg')}
              alt="search"
            />
          </button>
        </form>
      </Search>
      <div className="section__links">
        <a className="section__link" tooltip="coming soon">
          <img
            className="section__link-image"
            src={require('./images/play-market.svg')}
            alt="google play"
          />
        </a>
        <a className="section__link" tooltip="coming soon">
          <img
            className="section__link-image"
            src={require('./images/app-store.svg')}
            alt="app store"
          />
        </a>
        <a className="section__link" target="_blank" href="http://ark-wallet.testnet.noah-blockchain.com/">
          <img
            className="section__link-image"
            src={require('./images/web-wallet.svg')}
            alt="web wallet"
          />
        </a>
      </div>
    </div>
  </section>
)
