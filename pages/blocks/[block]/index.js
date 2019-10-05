import React from 'react'
import config from '~/config/index'
import Layout from '~/components/layout'
import NavbarTop from '~/components/sections/navbar/top'
import NavbarMiddle from '~/components/sections/navbar/middle'
import BlockDetailsComponent from '~/components/sections/blockDetails'
import BlockDetailsContainer from '~/containers/block'
import fetchBlockDetails from '~/containers/block/fetchData'
import '~/common.blocks/page/page_transaction.less'

const Page = ({ block }) => {
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
		    <NavbarMiddle current='blocks' />
		    <div className='section section_transaction-details-title'>
			    <div className='wrapper_section-content'>
				    <h1 className='section__title'>
					    Block Details
				    </h1>
			    </div>
		    </div>
		    <BlockDetailsContainer rawData={block}>
			    <BlockDetailsComponent />
		    </BlockDetailsContainer>
	    </main>
	  </Layout>
	)
}

Page.getInitialProps = async (context) => {
	const { block } = context.query

	const data = await fetchBlockDetails(block).catch(() => ({}))
	console.log(data, "DATA")
	return { block: data }
}

export default Page
