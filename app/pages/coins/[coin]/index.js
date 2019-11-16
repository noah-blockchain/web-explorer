import React from 'react'
import config from '~/config/index'
import Layout from '~/components/layout'
import NavbarTop from '~/components/sections/navbar/top'
import NavbarMiddle from '~/components/sections/navbar/middle'
import CoinsDetailsComponent from '~/components/sections/coinDetails'
import CoinsDetailsContainer from '~/containers/coin'

import fetchCoinDetails from '~/containers/coin/fetchData'
import '~/common.blocks/page/page_transaction.less'

const Page = ({ coins }) => {
	const language = 'en'

	return (
	  <Layout
	    pageTitle="NOAH Blockchain Explorer"
	    description="NOAH Blockchain Explorer"
	    language={language}
	    locales={config.languages}
	  >
	    <main className="page_transaction">
		    <NavbarTop />
		    <NavbarMiddle current='coins' />
		    <div className='section section_transaction-details-title'>
			    <div className='wrapper_section-content'>
				    <h1 className='section__title'>
					    Coin Details
				    </h1>
			    </div>
		    </div>
		    <CoinsDetailsContainer rawData={coins}>
			    <CoinsDetailsComponent />
		    </CoinsDetailsContainer>
	    </main>
	  </Layout>
	)
}

Page.getInitialProps = async (context) => {
	const { coin } = context.query
	const data = await fetchCoinDetails(coin).catch(() => ({}))
	console.log("DATA", data);
	return { coins: data }
}

export default Page
