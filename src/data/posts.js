// Each post body is a list of blocks: { h: 'heading' } or { p: 'paragraph' }.
const posts = [
  {
    slug: 'technical-seo-first-checks',
    title: 'Seven technical SEO checks to run before anything else',
    date: '2026-10-24',
    description:
      'A short list of the technical problems that quietly keep pages out of Google, and how to spot each one.',
    body: [
      {
        p: "Most sites that struggle in search have a technical problem sitting underneath the content. Rewriting the content first is like repainting a house with a cracked foundation. These seven checks take an afternoon and catch the usual suspects.",
      },
      { h: '1. Is there only one version of your site?' },
      {
        p: "Type your address four ways: http://, https://, with www and without. Three of them should redirect to the fourth. If two versions load on their own, search engines can treat them as two separate sites with the same content.",
      },
      { h: '2. Is robots.txt blocking something it should not?' },
      {
        p: "Open yourdomain.com/robots.txt. A line reading Disallow: / under User-agent: * blocks the entire site. It turns up more often than you'd expect, usually left over from a staging copy that went live.",
      },
      { h: '3. Does the XML sitemap exist, and does it list real pages?' },
      {
        p: "Most sitemaps live at /sitemap.xml or /sitemap_index.xml. It should list only pages you want indexed, and each one should return a normal 200 status. Submit it in Search Console so you can see how many of those URLs Google actually picked up.",
      },
      { h: '4. Are any important pages set to noindex?' },
      {
        p: "View the page source and search for noindex. That tag tells Google to drop the page from results. SEO plugins on WordPress sometimes apply it to whole sections by accident, so check one page of each type: a post, a category page, a product.",
      },
      { h: '5. Does every page have its own title and description?' },
      {
        p: "Duplicate titles are common on sites with pagination or filters. Aim for titles under about 60 characters and descriptions under about 155, so they don't get cut off in results. Those are rules of thumb. Google measures in pixels, not characters, so the cut-off moves a little with the letters you use.",
      },
      { h: '6. Are broken links and redirect chains piling up?' },
      {
        p: "Run a crawler. Screaming Frog is free for up to 500 URLs, which covers a lot of small sites. Fix links that point at 404 pages, and point old URLs straight at their final destination instead of sending visitors through two or three hops.",
      },
      { h: '7. How fast does the page load for real people?' },
      {
        p: "Paste a few key URLs into PageSpeed Insights. Google's thresholds for a good Core Web Vitals score are Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1. Check the field data at the top of the report first, since that comes from real visitors.",
      },
      {
        p: "Fix whatever the checks turn up, in that order. Then go back to the content.",
      },
    ],
  },
  {
    slug: 'geo-in-plain-english',
    title: 'GEO in plain English: helping AI assistants find and quote your site',
    date: '2026-10-24',
    description:
      'What generative engine optimization means, and the practical checks that make a page easier for AI assistants to use.',
    body: [
      {
        p: "GEO stands for generative engine optimization. It means making your pages easy for AI assistants such as ChatGPT, Gemini and Perplexity to find, read and quote when they answer a question. Nobody can promise a citation. You can remove the reasons you'd get skipped, and that is most of the work.",
      },
      { h: 'Let the right crawlers in' },
      {
        p: "AI products use their own crawlers. OpenAI runs OAI-SearchBot for search results and GPTBot for training data. Anthropic runs ClaudeBot. Perplexity runs PerplexityBot. Check your robots.txt for rules that block them. Blocking a training crawler while allowing a search crawler is a reasonable choice, as long as you made it on purpose.",
      },
      {
        p: "Test, don't assume. Some security settings and CDNs block bots before robots.txt is even read, so a site can look open on paper and still turn those crawlers away.",
      },
      { h: 'Answer the question early' },
      {
        p: "Assistants tend to lift short, self-contained passages. Put a direct answer of two or three sentences right under the heading that asks the question, then add the detail below it. A page that makes the reader scroll through a long introduction first gives the assistant less to work with.",
      },
      { h: 'Say who you are in structured data' },
      {
        p: "Schema.org markup (usually written as JSON-LD) tells machines what a page is: an Organization, an Article, a Product, a FAQ. Add the types that match the page, fill in the properties honestly, and test the result with the Rich Results Test or the Schema Markup Validator. Missing required properties, such as an Article with no author, are the most common faults.",
      },
      { h: 'Keep the facts current' },
      {
        p: "Out-of-date prices, dates and product details make a page less useful to everyone, assistants included. Show a real last-updated date, and change it only when something on the page actually changed.",
      },
      { h: 'A word on llms.txt' },
      {
        p: "Some sites publish an llms.txt file that summarizes the site for AI tools. Support from the AI companies is inconsistent, so treat it as optional. It's cheap to add, but don't expect it to carry the strategy.",
      },
      { h: 'How to tell if anything is happening' },
      {
        p: "Look in Google Analytics for referral traffic from chatgpt.com, perplexity.ai and gemini.google.com. The numbers are small for most sites right now. They still show whether the trend is moving.",
      },
    ],
  },
  {
    slug: 'reading-search-console',
    title: 'Reading Google Search Console without losing the plot',
    date: '2026-10-24',
    description:
      'What impressions, clicks, CTR and average position mean in the Performance report, and how to find easy wins.',
    body: [
      {
        p: "Search Console is free and comes straight from Google. Most people open it once, stare at the graph and close the tab. The Performance report is the part worth learning.",
      },
      { h: 'The four numbers' },
      {
        p: "Impressions are how often your page appeared in results. Clicks are how often someone clicked it. CTR, the click-through rate, is clicks divided by impressions. Average position is where you appeared on average, with 1 at the top of the results.",
      },
      {
        p: "Averages hide a lot. A page that ranks third for one query and fortieth for another reports a middling position that describes neither. Click into a single query or page before you draw conclusions.",
      },
      { h: 'Find pages that almost work' },
      {
        p: "Filter the queries to ones with plenty of impressions but few clicks and an average position between 5 and 15. These pages already rank. A sharper title and description can lift the click rate, and a stronger page can move them up a few places.",
      },
      { h: 'Compare, then judge' },
      {
        p: "Use the Compare option to line up the last 28 days against the previous period, or against the same period last year. A seasonal business will always look bad next to its best month.",
      },
      { h: 'Read the Pages report' },
      {
        p: "Under Indexing, the Pages report lists why URLs aren't indexed. Two statuses are worth reading: Crawled, currently not indexed, and Discovered, currently not indexed. Both often point at thin or duplicate pages that Google didn't think were worth keeping.",
      },
      {
        p: "Book a recurring fifteen minutes once a month. The trend over six months tells you more than any single day.",
      },
    ],
  },
];

export default posts;
