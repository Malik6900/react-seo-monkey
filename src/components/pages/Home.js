import React from 'react'
import Hero from '../Hero'
import Cards from '../Cards'
import HowItWorks from '../HowItWorks'
import usePageMeta from '../../usePageMeta'

export default function Home() {
    usePageMeta(
      'Spank the Monkey SEO | Technical SEO, GEO and Search Tracking',
      'Find what is holding your site back in search, fix it, and check that it worked. Technical SEO audits, GEO for AI answers, link building and tracking.'
    )

    return (
        <>
            <Hero />
            <Cards />
            <HowItWorks />
        </>

    );
    }
