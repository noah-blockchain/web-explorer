import React from 'react'
import config from '~/config/index'
import Layout from '~/components/layout'
import NavbarTop from '~/components/sections/navbar/top'
import NavbarMiddle from '~/components/sections/navbar/middle'
import TransactionDetailsComponent from '~/components/sections/transactionDetails'
import TransactionDetailsContainer from '~/containers/transaction'
import fetchTransactionDetails from '~/containers/transaction/fetchData'
import '~/common.blocks/page/page_transaction.less'

const Page = ({ transaction }) => {
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
		    <NavbarMiddle current='transactions' />
		    <div className='section section_transaction-details-title'>
			    <div className='wrapper_section-content'>
				    <h1 className='section__title'>
					    Transaction Details
				    </h1>
			    </div>
		    </div>
		    <TransactionDetailsContainer rawData={transaction}>
			    <TransactionDetailsComponent />
		    </TransactionDetailsContainer>
	    </main>
	  </Layout>
	)
}

Page.getInitialProps = async (context) => {
	const { transaction } = context.query

	const data = await fetchTransactionDetails(transaction).catch(() => ({}))
	console.log("DATA", data);
	return { transaction: data }
}

export default Page
