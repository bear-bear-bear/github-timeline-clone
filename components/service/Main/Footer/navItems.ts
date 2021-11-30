type NavItem = {
  label: string;
  url: string;
};
type NavColumn = NavItem[];

const navItems: NavColumn[] = [
  [
    {
      label: 'Blog',
      url: 'https://github.blog',
    },
    {
      label: 'About',
      url: 'https://github.com/about',
    },
    {
      label: 'Shop',
      url: 'https://shop.github.com',
    },
    {
      label: 'Contact GitHub',
      url: 'https://support.github.com?tags=dotcom-footer',
    },
    {
      label: 'Pricing',
      url: 'https://github.com/pricing',
    },
  ],
  [
    {
      label: 'API',
      url: 'https://docs.github.com',
    },
    {
      label: 'Training',
      url: 'https://services.github.com',
    },
    {
      label: 'Status',
      url: 'https://www.githubstatus.com/',
    },
    {
      label: 'Security',
      url: 'https://docs.github.com/articles/github-security/',
    },
  ],
  [
    {
      label: 'Terms',
      url: 'https://docs.github.com/en/github/site-policy/github-terms-of-service',
    },
    {
      label: 'Privacy',
      url: 'https://docs.github.com/en/github/site-policy/github-privacy-statement',
    },
    {
      label: 'Docs',
      url: 'https://docs.github.com',
    },
  ],
];

export default navItems;
