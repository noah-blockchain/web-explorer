import React from 'react'

export default class Container extends React.Component {
  state = {
    page: 1,
    rawData: {
      data: [],
    }
  }

  componentDidMount() {
    this.setState({
      rawData: this.props.rawData
    })
  }

  render() {
    const { children } = this.props
    const { rawData = [] } = this.state
    const data = []
    rawData.data.forEach(item => {
      if(item.symbol !== 'NOAH') {
        data.push({
          crr: item.crr,
          volume: item.volume,
          reserveBalance: item.reserveBalance,
          name: item.name,
          symbol: item.symbol,
        })
      }
    })
    const child = React.Children.map(children, child =>
      React.cloneElement(child, { data })
    )

    return <>{child}</>
  }
}
