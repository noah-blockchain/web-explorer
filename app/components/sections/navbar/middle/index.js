import React from 'react'
import Link from 'next/link'
import MenuSurface from '~/components/menuSurface'
import './section_navbar-middle.less'

export default ({ current = 'dashboard' }) => {
  const links = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      icon: require('./images/dashboard.svg'),
      link: '/'
    },
    {
      id: 'blocks',
      name: 'Blocks',
      icon: require('./images/atom.svg'),
      link: '/blocks'
    },
    {
      id: 'transactions',
      name: 'Transactions',
      icon: require('./images/satellite.svg'),
      link: '/transactions'
    },
    {
      id: 'coins',
      name: 'Coins',
      icon: require('./images/coins.svg'),
      link: '/coins'
    }
  ]

  let activeLink = {}
  const inactiveLinks = links.filter(link => {
    if (link.id === current) {
      activeLink = link
      return false
    }
    return true
  })

  return (
    <section className="section section_navbar-middle">
      <div className="wrapper_section-content">
        <div className="section__links section__links--full">
          {links.map((item, i) => (
            <Link href={item.link} key={i}>
              <a
                className={`section__link section__link--${
                  item.id === current ? 'active' : 'inactive'
                }`}
              >
                <img className="section__link-icon" src={item.icon} />
                <p className="section__link-text">{item.name}</p>
              </a>
            </Link>
          ))}
        </div>
        <div className="section__links section__links--shrink">
          <MenuSurface
            header={
              <Link href={activeLink.link}>
                <a className={`section__link section__link--active`}>
                  <img className="section__link-icon" src={activeLink.icon} />
                  <p className="section__link-text">{activeLink.name}</p>
                </a>
              </Link>
            }
            body={inactiveLinks.map((item, i) => (
              <Link href={item.link} key={i}>
                <a className={`section__link section__link--inactive`}>
                  <img className="section__link-icon" src={item.icon} />
                  <p className="section__link-text">{item.name}</p>
                </a>
              </Link>
            ))}
          />
        </div>
      </div>
    </section>
  )
}
