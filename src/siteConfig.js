// Contact details come from environment variables (set them in .env locally and in
// the Vercel project settings), so no made-up details ship on the live site.
// Anything left empty is simply hidden from the page.
const siteConfig = {
  name: 'Spank the Monkey SEO',
  contactEmail: process.env.REACT_APP_CONTACT_EMAIL || '',
  social: [
    { label: 'Facebook', url: process.env.REACT_APP_FACEBOOK_URL || '', icon: 'fa-brands fa-facebook-f' },
    { label: 'Twitter', url: process.env.REACT_APP_TWITTER_URL || '', icon: 'fa-brands fa-twitter' },
    { label: 'LinkedIn', url: process.env.REACT_APP_LINKEDIN_URL || '', icon: 'fa-brands fa-linkedin-in' },
  ].filter((s) => s.url),
};

export default siteConfig;
