import { FaSearch, FaHeading, FaRobot, FaLink, FaChartLine, FaWrench } from 'react-icons/fa';

const services = [
  {
    slug: 'technical-seo-audit',
    icon: FaSearch,
    title: 'Technical SEO audit',
    tagline: "Find out what's stopping Google from reading your site.",
    body:
      "We crawl your site the way a search engine does and write down everything that gets in the way: broken links, redirect chains, missing or duplicate titles, pages blocked from indexing, slow templates. You get the problems sorted by how much they matter, so the worst ones get fixed first.",
    includes: [
      'A crawl of every page we can reach',
      'Indexing and robots.txt checks',
      'Missing, duplicate and oversized titles and descriptions',
      'Broken links and redirect chains',
      'Page speed and Core Web Vitals results',
    ],
  },
  {
    slug: 'on-page-seo',
    icon: FaHeading,
    title: 'On-page SEO',
    tagline: 'Make each page say clearly what it is about.',
    body:
      "Search engines and readers both skim. We rewrite titles, descriptions and headings so each page has one clear job, tidy up the internal links so related pages point at each other, and add descriptions to images that don't have any.",
    includes: [
      'Title tags and meta descriptions',
      'Heading structure (one H1, sensible H2s)',
      'Internal links between related pages',
      'Image alt text',
      'Content gaps found from your own Search Console queries',
    ],
  },
  {
    slug: 'geo',
    icon: FaRobot,
    title: 'GEO: visibility in AI answers',
    tagline: 'Be a page that ChatGPT, Gemini and Perplexity can quote.',
    body:
      "AI assistants pull answers from the web, and they skip pages they can't read or can't make sense of. Nobody can promise you a citation. What we can do is check the reasons you'd get skipped: whether AI crawlers are let in, whether your pages answer the question near the top, and whether your structured data says who you are and what you sell.",
    includes: [
      'robots.txt check for AI crawlers (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot)',
      'Schema.org structured data that fits each page',
      'Answer-first rewrites of your key pages',
      'Honest freshness signals such as update dates',
    ],
  },
  {
    slug: 'link-building',
    icon: FaLink,
    title: 'Link building',
    tagline: 'Links from sites a real person would visit.',
    body:
      "A link helps when it comes from a relevant site and sits in content people read. We find those sites, work out why they'd want to link to you, and ask them. It's slower than buying links in bulk, and bulk links are exactly what Google's spam policies target.",
    includes: [
      'Prospect research by topic and audience',
      'Outreach written for each site',
      'Tracking of links won and lost',
      'A review of your existing backlinks for problems',
    ],
  },
  {
    slug: 'tracking-analytics',
    icon: FaChartLine,
    title: 'Tracking and analytics',
    tagline: 'Know which pages bring in business.',
    body:
      "Google Analytics and Search Console tell you what's working, but only when they're set up properly. We check what you're collecting, fix what's broken, and set up the events that matter to your business, such as form submissions, phone calls and purchases.",
    includes: [
      'Google Analytics 4 setup or repair',
      'Search Console connected and verified',
      'Conversion tracking for forms, calls and purchases',
      'A plain monthly report on traffic and search queries',
    ],
  },
  {
    slug: 'site-fixes',
    icon: FaWrench,
    title: 'Site fixes',
    tagline: 'We can fix what we find.',
    body:
      "An audit that sits in a PDF doesn't help anyone. If your site runs on WordPress, we can make the changes ourselves: redirects, schema, canonical tags, plugin settings, speed fixes. On other platforms, we write exact instructions your developer can follow.",
    includes: [
      'Redirects and canonical tags',
      'Schema markup',
      'SEO plugin settings (Yoast, Rank Math)',
      'Image and script speed fixes',
      'Developer-ready tickets for other platforms',
    ],
  },
];

export default services;
