import Head from 'next/head'
import { useRouter } from 'next/router'

import { siteMeta } from 'lib/constants'
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } =
  siteMeta

export default function Meta({ pageTitle, pageDesc }) {
  const title = pageTitle
    ? `${pageTitle} | ${siteTitle}`
    : `${siteTitle} | ユニークな一歩を踏み出そう`
  const desc = pageDesc ?? siteDesc

  const router = useRouter()
  const url = `${siteUrl}${router.asPath}`

  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta name='description' content={desc} />
      <meta property='og:descriprion' content={desc} />

      <link rel='canonical' href={url} />
      <meta property='og:url' content={url} />
    </Head>
  )
}
