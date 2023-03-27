import analyticsSpec from '~/../../spec/analytics_v0_openapi.json' assert { type: 'json' }
import selfHostingAnalyticsCommonSections from '~/../../spec/common-self-hosting-analytics-sections.json'
import RefSectionHandler from '~/components/reference/RefSectionHandler'
import { flattenSections } from '~/lib/helpers'
import handleRefGetStaticPaths from '~/lib/mdx/handleRefStaticPaths'
import handleRefStaticProps from '~/lib/mdx/handleRefStaticProps'
import { gen_v3 } from '~/lib/refGenerator/helpers'

const sections = flattenSections(selfHostingAnalyticsCommonSections)

// @ts-ignore
const spec = gen_v3(analyticsSpec, 'wat', { apiUrl: 'apiv0' })

export default function JSReference(props) {
  return <RefSectionHandler sections={sections} spec={spec} pageProps={props} type="api" />
}

export async function getStaticProps() {
  return handleRefStaticProps(sections, '/self-hosting-analytics')
}

export function getStaticPaths() {
  return handleRefGetStaticPaths()
}
