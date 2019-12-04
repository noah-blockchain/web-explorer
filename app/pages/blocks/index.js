import React from 'react'
import config from '~/config/index'
import Layout from '~/components/layout'
import NavbarTop from '~/components/sections/navbar/top'
import NavbarMiddle from '~/components/sections/navbar/middle'
import fetchBlocks from '~/containers/blocks/fetchData'
import BlockDetailsComponent from '~/components/sections/blocks'
import BlockDetailsContainer from '~/containers/blocks'
import '~/common.blocks/page/page_blocks.less'
import Pagination from '~/components/pagination'

const List = ({ data = {}, pagination = {} }) => {
  return (
    <div>
      <Pagination {...pagination} />
      <div className="blocks-component">
        <BlockDetailsComponent data={data}/>
      </div>
      <Pagination {...pagination} />
    </div>
  )
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
        <NavbarTop/>
        <NavbarMiddle current="blocks"/>
        <div className="section">
          <div className="wrapper_section-content">
            <h1 className="page__title">Blocks</h1>
          </div>
        </div>
        <div className="page__list">
          <BlockDetailsContainer rawData={blocks}>
            <List/>
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
