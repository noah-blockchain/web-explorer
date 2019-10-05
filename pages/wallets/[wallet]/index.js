import React from 'react'
import config from '~/config/index'
import Layout from '~/components/layout'
import NavbarTop from '~/components/sections/navbar/top'
import NavbarMiddle from '~/components/sections/navbar/middle'
import WalletDetailsComponent from '~/components/sections/walletDetails'
import WalletDetailsContainer from '~/containers/wallet'
import fetchWalletDetails from '~/containers/wallet/fetchData'
import '~/common.blocks/page/page_transaction.less'

const Page = ({ wallet }) => {
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
		    <NavbarMiddle current={'wallet'} />
		    <div className='section section_transaction-details-title'>
			    <div className='wrapper_section-content'>
				    <h1 className='section__title'>
					    Wallet Details
				    </h1>
			    </div>
		    </div>
		    <WalletDetailsContainer rawData={wallet}>
			    <WalletDetailsComponent />
		    </WalletDetailsContainer>
	    </main>
	  </Layout>
	)
}

Page.getInitialProps = async (context) => {
	const { wallet } = context.query

	const data = await fetchWalletDetails(wallet).catch(() => ({}))
	return { wallet: data }
}

export default Page
