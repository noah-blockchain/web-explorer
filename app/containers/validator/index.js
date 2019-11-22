// import React from 'react'
// import { getAmountWithCoin, txTypeFilter } from '../../utils/tx'
// import fetchValidatorsAddress from '~/containers/validator/fetchData'

// export default class Container extends React.Component {
//   state = {
//     page: 1,
//     rawData: {
//       data: [],
//       meta: {
//         per_page: 0,
//         last_page: 0
//       }
//     },
//     filter: null,
//     order_by: null
//   }

//   componentDidMount() {
//     this.setState({
//       rawData: this.props.rawData
//     })
//   }

//   getFilterString(filter, order_by, page = 1) {
//     if (filter !== null && filter.length > 0) {
//       return `?filter=${filter}&order_by=${order_by}&page=${page}`
//     }
//     return `?page=${page}`
//   }

//   getOrder(filter) {
//     if (this.state.filter !== filter) return 'DESC'
//     if (this.state.order_by === 'DESC') return 'ASC'
//     if (this.state.order_by === 'ASC') return 'DEFAULT'
//     if (this.state.order_by === 'DEFAULT') return 'DESC'
//   }

//   setFilter = async filter => {
//     const order_by = this.getOrder(filter)
//     const rawData = await fetchValidatorsAddress(
//       this.getFilterString(filter, order_by, this.state.page)
//     ).catch(() => [])
//     return this.setState({ filter, order_by, rawData })
//   }

//   setPage = async page => {
//     if (page !== this.state.page) {
//       const rawData = await fetchData(
//         this.getFilterString(this.state.filter, this.state.order_by, page)
//       ).catch(() => [])
//       return this.setState({ page, rawData })
//     }
//   }

//   render() {
//     const { children } = this.props
//     const { rawData = [] } = this.state
//     console.log('rawData', rawData)
//     let data = []
//     const filter = {
//       filter: this.state.filter,
//       order_by: this.state.order_by,
//       setFilter: this.setFilter
//     }
//     data = rawData.data.map(item => {
//       return {
//         meta: {
//           name: item.meta.name,
//           description: item.meta.description,
//           icon_url: item.meta.icon_url,
//           site_url: item.meta.site_url
//         },
//         public_key: item.public_key,
//         stake: item.stake,
//         status: item.status,
//         part: item.part,
//         commission: item.commission,
//         uptime: item.uptime
//       }
//     })

//     const child = React.Children.map(children, child =>
//       React.cloneElement(child, { data, filter })
//     )

//     return <>{child}</>
//   }
// }

import React from 'react'

export default ({ children, rawData = [] }) => {
  console.log(rawData.data)
  const data = !rawData.data
    ? null
    : {
        name: rawData.data.meta.name,
        public_key: rawData.data.public_key,
        description: rawData.data.meta.description,
        site_url: rawData.data.meta.site_url,
        stake: rawData.data.stake,
        status: rawData.data.status === 1 ? 'offline' : 'online',
        uptime: rawData.data.uptime
        //   crr: rawData.data.crr,
        //   volume: rawData.data.volume,
        //   reserveBalance: rawData.data.reserve_balance,
        //   timestamp: rawData.data.created_at,
        //   name: rawData.data.name,
        //   symbol: rawData.data.symbol,
        //   price: rawData.data.price,
        //   capitalization: rawData.data.capitalization,
        //   delegated: rawData.data.delegated,
        //   creator: rawData.data.creator,
        //   start_price: rawData.data.start_price,
        //   start_volume: rawData.data.start_volume,
        //   start_reserve_balance: rawData.data.start_reserve_balance
      }

  const child = React.Children.map(children, child =>
    React.cloneElement(child, { data })
  )

  return <>{child}</>
}
