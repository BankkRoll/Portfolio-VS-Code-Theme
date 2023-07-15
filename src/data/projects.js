const projects = [
  {
    name: 'GitHub',
    description: 'View my github',
    src: 'github.png',
    site: 'https://github.com/BankkRoll',
    repository: 'https://github.com/BankkRoll',
    technologies: ['React', 'Next.js','Node.js', 'CSS', 'HTML'],
  },
  {
    name: 'Server Inspector',
    description: 'Discord Security Bot w/ Join Gate - Raid/Link Defence - 99.9% Uptime - SECURITY ',
    src: 'serverinspector.gif',
    repository: 'https://github.com/BankkRoll/Server-Inspector',
    site: 'https://serverinspector.vercel.app',
    technologies: ['Typescript'],
  },
  {
    name: 'BitMint',
    description: '*IN PROGRESS* The First ever low-code bitcoin ordinals full-stack minting boilerplate.', 
    src: 'bitmint.png',
    repository: 'https://github.com/BankkRoll/BitMint2',
    site: 'https://bitmint-beta.vercel.app/',
    technologies: ['IN PROGRESS', 'IN PROGRESS', 'IN PROGRESS', 'IN PROGRESS'],
  },
  {
    name: 'Repo-to-PDF',
    description: 'Repo-to-PDF is a tool that allows you to convert a GitHub repository into a PDF file.', 
    src: 'repotopdf.png',
    site: 'https://freecodecamppdf.bankkroll.repl.co/',
    repository: 'https://github.com/BankkRoll/Repo-to-PDF',
    technologies: ['Node.js'],
  },
  {
    name: 'nextjs-pagination',
    description: 'Nextjs-Pagination is a easy-to-use pagination component built specifically for Next.js projects.', 
    src: 'nextjspag.png',
    site: 'https://www.npmjs.com/package/nextjs-pagination',
    repository: 'https://github.com/BankkRoll/nextjs-pagination',
    technologies: ['React', 'typescript', 'Next.js'],
  },
  {
    name: 'GitBadge',
    description: 'Show off your open-source contributions in a new, unique way.',
    src: 'gitbadge.png',
    site: 'https://gitbadge.xyz/',
    technologies: ['Next.js', 'TypeScript', 'Thirdweb'],
  },
  {
    name: 'AskGit AI',
    description: 'Code Smarter, Not Harder: Enhance Your GitHub Experience with AskGit, the AI-Coding Assistant!', 
    src: 'askgit.png',
    site: 'https://www.askgit.live/',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'LangChain', 'OpenAI'],
  },
  {
    name: 'NFTGEN - NFT Generator',
    description: 'NFTGEN is an open-source tool for generating unique NFT images or GIFs, complete with metadata. Easily upload directly to IPFS via thirdweb.', 
    src: 'https://i.ibb.co/kBwgZGh/ezgif-com-video-to-gif.gif',
    repository: 'https://github.com/BankkRoll/NFTGEN-nft-generator',
    technologies: ['Node.js', 'Sharp', 'Thirdweb'],
  },
  {
    name: 'Web3Button Generator - thirdweb',
    description: 'Provides an intuitive interface for quickly generating `Web3Button` for your DApp.', 
    src: 'https://user-images.githubusercontent.com/106103625/235013049-6b5af32c-27e6-4b31-8f79-ee68b1d667f8.png',
    site: 'https://thirdweb-web3button.vercel.app/',
    repository: 'https://github.com/BankkRoll/thirdweb-Web3Button-generator',
    technologies: ['Next.js', 'TypeScript', 'Thirdweb'],
  },
  {
    name: 'Snapshot Tool - thirdweb',
    description: 'A simple tool for fetching NFT balances from a smart contract. Supports all ERC-721 contracts.', 
    src: 'https://user-images.githubusercontent.com/106103625/235228591-d1fc15ba-0a33-4241-9ebc-8223399d477c.png',
    site: 'https://snapshottool.vercel.app/',
    repository: 'https://github.com/BankkRoll/snapshot-tool-thirdweb',
    technologies: ['Next.js', 'TypeScript', 'Thirdweb'],
  },
  {
    name: 'Alien Frens Jerseys',
    description: 'Alien Frens Jersey Generator',
    src: 'frensjersey.png',
    site: 'https://frensjerseys.vercel.app/',
    repository: 'https://github.com/BankkRoll/Alien-Frens-Jersey-Generator-frensjerseys.xyz',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Alien Evo Sales Bot',
    description: 'Offline twitter is paid now :(',
    src: 'evobotfren.png',
    site: 'https://twitter.com/alienevobotfren',
    technologies: ['Typescript', 'Shell' ],
  },
  {
    name: 'Custom Website',
    description: 'Need a custom website?',
    src: 'wixcustom.gif',
    site: 'https://twitter.com/bankkroll_eth',
    technologies: ['React', 'Next.js','Node.js', 'CSS', 'HTML', 'TypeScript', 'Tailwind', 'jQuery', 'web3.js'],
  },
  {
    name: 'Meme Generator',
    description: 'Meme generator for Year of The Rabbitz',
    src: 'meme.png',
    site: 'https://www.rabbitz.wtf/meme',
    technologies: ['Next.js', 'TypeScript','Node.js', 'Tailwind'],
  },
  {
    name: 'Analytics Tool',
    description: 'Analytics Tool for Year of The Rabbitz',
    src: 'tools.png',
    site: 'https://tools.rabbitz.wtf/',
    technologies: ['Next.js', 'TypeScript','Node.js', 'Tailwind'],
  },
  {
    name: 'Manifold Punks',
    description: 'Need a custom website?',
    src: 'punks.gif',
    site: 'https://manifoldpunks.netlify.app/',
    technologies: ['React', 'Next.js','Node.js', 'CSS', 'HTML', 'TypeScript', 'Tailwind', 'jQuery', 'web3.js'],
  },
   {
    name: 'Hippe Life Krew',
    description: 'Hippie life krew website!',
    src: 'hippie.gif',
    site: 'https://www.hippielifekrew.io/',
    technologies: ['React', 'Next.js', 'Node.js', 'web3.js', 'Tailwind CSS'],
  },
   {
    name: 'The Lucky Llamas',
    description: '🦙🦙🦙 Collection of 4,444 Lucky Llamas 🦙🦙🦙 ',
    src: 'llamas.gif',
    site: 'https://www.theluckyllamas.com/',
    technologies: ['React', 'Next.js', 'Node.js', 'web3.js', 'Tailwind CSS'],
  },
  {
    name: 'The Lucky Store',
    description: '🦙The Lucky Llamas OffChain marketplace for holders ',
    src: 'luckystore.png',
    site: 'https://www.market.theluckyllamas.com/',
    technologies: ['React', 'Next.js', 'Node.js', 'web3.js', 'Tailwind CSS'],
  },
  {
    name: 'Cheddar & Frens',
    description: 'Cheddar & Frens are a Web3 sub community of Alien Frens... Building upon our cheesy ideas! Established by like minded frens that share a common trait of cheese heads derived from the NFT Community, Alien Frens.', 
    src: 'cheddar.gif',
    site: 'https://www.cheddarandfrens.com/',
    technologies: ['React', 'core-js', 'jQuery'],
  },
  {
    name: 'Petal Headz',
    description: 'Petal Headz NFT',
    src: 'Petal.png',
    site: 'https://opensea.io/collection/petal-headz',
    technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'web3.js', 'Solidity'],
  },
  {
    name: 'ShrineList Wallet Checker (WL Checker)',
    description: 'Custom Wallet Checker for WL spots.',
    src: 'shrinelist.gif',
    technologies: ['React', 'Next.js', 'CSS'],
  },
  {
    name: 'Shrine After Died',
    description: 'Shrine After Died is a genesis AI collection by GLR.',
    src: 'sad.gif',
    site: 'https://opensea.io/collection/shrine-after-died',
    technologies: ['React', 'Next.js', 'web3.js', 'HTML', 'CSS'],
  },
  {
    name: 'The Chariot',
    description: 'The Chariot NFT',
    src: 'chariot.png',
    site: 'https://opensea.io/collection/elighs-music-collection',
    technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'web3.js', 'Solidity'],
  },
  {
    name: 'The Ascended Masters',
    description: 'The Ascended Masters NFT',
    src: 'am.png',
    site: 'https://opensea.io/collection/theascendedmasters',
    technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'web3.js', 'Solidity'],
  },
  {
    name: 'NFT Site or Somthing',
    description: 'Simple NFT display or mint site made with react!',
    src: 'siteor.gif',
    site: 'https://nft-site-or-somthing.vercel.app/',
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript','JavaScript', 'Tailwind'],
  },
  {
    name: 'NFT Displayer',
    description: 'Search any ETH wallet and get all the NFTs displayed.',
    src: 'display.gif',
    site: 'https://nftdisplay.vercel.app/',
    technologies: ['React', 'Next.js','Node.js', 'TypeScript', 'Tailwind'],
  },
  {
    name: 'DOINK ME',
    description: 'DOINK ME, PFP overlay generator',
    src: 'DOINKME.png',
    site: 'https://doinkme.xyz/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
  },
  {
    name: 'PFP Generator',
    description: 'PFP Overlay Changer',
    src: 'PFP.png',
    site: 'https://pfpgenerator.bankkroll.repl.co/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
  },
  {
    name: 'PFP Background Changer',
    description: 'PFP Background Changer',
    src: 'PFPbg.png',
    site: 'https://bg.bankkroll.repl.co/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
  }
];

export default projects;
