import React from 'react'
import fetchCharts from './fetchData'
import config from '../../config'

export default class Container extends React.Component {
  state = {
    rawData: [],
    range: 'MONTH'
  }

  componentDidMount() {
    this.setState({
      rawData: this.props.rawData
    })
  }

  filterArray() {
    const result = Array.isArray(this.state.rawData) ? this.state.rawData : [
      { date: '00-00-0000', value: 0 },
      { date: '00-00-0000', value: 0 }
    ]
    if (this.state.range === 'YEAR' && result.length > 30) {
      let i = 0
      let new_result = []
      result.forEach((res) => {
        if (i === 10) {
          i = 0
        }
        if (i === 0) {
          new_result.push(res)
        }
        i ++
      })
      return new_result
    }
    return result
  }

  setRange = async range => {
    const rawData = await fetchCharts(
      this.props.coin, range
    ).catch(() => [])
    this.setState({ range, rawData })
  }

  render() {
    const { children } = this.props

    const data = this.filterArray()

    const child = React.Children.map(children, child =>
      React.cloneElement(child, {
        data,
        filter: {
          range: this.state.range,
          setRange: this.setRange
        }
      })
    )

    return <>{child}</>
  }
}
