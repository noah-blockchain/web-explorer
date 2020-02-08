import React from 'react'
import config from '~/config/index'
import Layout from '~/components/layout'
import NavbarTop from '~/components/sections/navbar/top'
import NavbarMiddle from '~/components/sections/navbar/middle'
import fetchValidators from '~/containers/validators_all/fetchData'
import ValidatorsDetailsComponent from '~/components/validators'
import ValidatorsDetailsContainer from '~/containers/validators_all'

const Page = ({ validators }) => {
  const language = 'en'
  return (
    <Layout
      pageTitle="NOAH Blockchain Explorer"
      description="NOAH Blockchain Explorer"
      language={language}
      locales={config.languages}
    >
      <main className="page_transactions">
        <NavbarTop />
        <NavbarMiddle current="validators" />
        <div className="section">
          <div className="wrapper_section-content">
          </div>
        </div>
        <div className="page__list">
          <ValidatorsDetailsContainer rawData={validators}>
            <ValidatorsDetailsComponent />
          </ValidatorsDetailsContainer>
        </div>
      </main>
    </Layout>
  )
}

Page.getInitialProps = async context => {
  const validators = await fetchValidators().catch(() => [])
  return { validators }
}

export default Page
