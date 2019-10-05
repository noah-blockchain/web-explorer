import React from 'react'
import config from '~/config/index'
import Layout from '~/components/layout'
import NavbarTop from '~/components/sections/navbar/top'
import NavbarMiddle from '~/components/sections/navbar/middle'
import fetchBlocks from '~/containers/blocks/fetchData'
import BlockDetailsComponent from '~/components/sections/blockDetails'
import BlockDetailsContainer from '~/containers/blocks'
import '~/common.blocks/page/page_blocks.less'

const List = ({ data = {} }) => {
  return data.map((item, i) => <BlockDetailsComponent data={item} key={i} />)
}

const Page = ({ blocks }) => {
  const language = 'en'

  return (
    <Layout
      pageTitle="NOAH Blockchain Explorer"
      description="NOAH Blockchain Explorer"
      language={language}
      locales={config.languages}
    >
      <main className="page_blocks">
        <NavbarTop />
        <NavbarMiddle current="blocks" />
        <div className="section">
          <div className="wrapper_section-content">
            <h1 className="page__title">Blocks</h1>
          </div>
        </div>
        <div className="page__list">
          <BlockDetailsContainer rawData={blocks}>
            <List />
          </BlockDetailsContainer>
        </div>
      </main>
    </Layout>
  )
}

Page.getInitialProps = async () => {
  const blocks = await fetchBlocks().catch(() => [])

  return { blocks }
}

export default Page
