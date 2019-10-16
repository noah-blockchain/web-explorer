// Enable smooth scrolling when clicking on an anchor link

class SmoothScrolling {
  listener(e) {
    e.preventDefault()
    const hashValue = this.getAttribute('href')
    let target = document.querySelector(hashValue)
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    window.history.pushState(null, null, hashValue)
  }

  init() {
    if (typeof window === 'undefined') {
      return null
    }
    this.anchorLinks = document.querySelectorAll('a[href^="#"]')
    for (let item of this.anchorLinks) {
      item.addEventListener('click', this.listener)
    }
  }

  destroy() {
    for (let item of this.anchorLinks) {
      item.removeEventListener('click', this.listener)
    }
  }
}

export default SmoothScrolling
