import React from 'react'
import config from '~/config/index'
import Layout from '~/components/layout'
import NavbarTop from '~/components/sections/navbar/top'
import NavbarMiddle from '~/components/sections/navbar/middle'
import ValidatorsDetailsComponent from '~/components/sections/validatorDetails'
import ValidatorsDetailsContainer from '~/containers/validator'
import DelegatorsContainer from '~/containers/deligators_by_validator'
import DelegatorsComponent from '~/components/sections/deligators_by_validator'
import fetchValidator from '~/containers/validator/fetchData'
import fetchDeligators from '~/containers/deligators_by_validator/fetchData'
import '~/common.blocks/page/page_validators.less'

const Page = ({ validatorData, deligatorsData }) => {
  const language = 'en'
  // console.log("validator >>>>>>",validatorData)
  // console.log("deligators >>>>>>",deligatorsData)
  return (
    <Layout
      pageTitle="NOAH Blockchain Explorer"
      description="NOAH Blockchain Explorer"
      language={language}
      locales={config.languages}
    >
      <main className="page_validators">
        <NavbarTop/>
        <NavbarMiddle current='validators'/>
        <div className='section section_transaction-details-title'>
          <div className='wrapper_section-content'>
            <h1 className='validators__title'>
              Validator Details
            </h1>
          </div>
        </div>
        <div className="section bottom-section">
          <div className="wrapper_section-content">
            <div className="page__tables">
              <div className="left">
                <ValidatorsDetailsContainer rawData={validatorData}>
                  <ValidatorsDetailsComponent/>
                </ValidatorsDetailsContainer>
              </div>
              {deligatorsData.data.length > 0 && (
                <div className="right">
                  <DelegatorsContainer rawData={deligatorsData}>
                    <DelegatorsComponent/>
                  </DelegatorsContainer>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

Page.getInitialProps = async (context) => {
  const { validator } = context.query
  const deligatorsPromise = await fetchDeligators(validator).catch(() => [])
  const validatorPromise = await fetchValidator(validator).catch(() => [])
  const [validatorData, deligatorsData] = await Promise.all([
    validatorPromise,
    deligatorsPromise
  ])
  return { validatorData, deligatorsData }
}

export default Page
