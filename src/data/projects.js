const projects = [
  {
    name: 'GitHub', 
    description: 'View my github', 
    src: 'tmk.png', 
    site: 'https://github.com/BankkRoll',
    repository: 'https://github.com/BankkRoll',
    technologies: ['React', 'Next.js','Node.js', 'CSS', 'HTML'],
  },{
    name: 'Cusotm Website', 
    description: 'Need a custom website?', 
    src: '6684.gif', 
    site: 'https://serverinspector.xyz', 
    technologies: [],
  },
  {
    name: 'Server Inspector', 
    description: 'Discord Security Bot', 
    src: 'server.gif', 
    site: 'https://serverinspector.xyz', 
    technologies: ['Typescript'],
  },
  {
    name: 'Frens Radio Network', 
    description: 'A Space For All Frens In WEB3', 
    src: 'frensradio.gif', 
    site: 'https://frensradio.io', 
    technologies: ['React', 'Next.js', 'web3.js', 'HTML', 'CSS'],
  },
  {
    name: 'Fr00py Land Game', 
    description: 'Fr00py Land game for a fun expeirnce of two boys NFT', 
    src: 'froopy.gif', 
    site: 'https://bankkrolleth.itch.io/fr00pyland', 
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'NFT Displayer', 
    description: 'Search any ETH wallet and get all the NFTs displayed.', 
    src: 'display.gif', 
    site: 'https://nftdisplay.vercel.app/', 
    technologies: ['React', 'Next.js','Node.js', 'TypeScript', 'Tailwind'],
  },
  {
    name: 'Solana Programs (Smart Contracts)', 
    description: 'Solana Minting DApp', 
    src: 'solana.gif', 
    technologies: ['Typescript','React', 'Next.js','Node.js', 'CSS', 'HTML', 'Rust'],
  },
  {
    name: 'Token Gating Content/Pages', 
    description: 'DApp With TokenGating Content', 
    src: 'tokengate.gif', 
    site: 'https://solanawalletgatedapp.vercel.app/', 
    technologies: ['Typescript','React', 'Next.js','Node.js', 'CSS', 'HTML', 'Rust'],
  },
  {
    name: 'Solana Wallet Gating Content', 
    description: 'Solana "Wallet Gate" to gate content to specific wallets', 
    src: 'walletgate.png', 
    site: 'https://solanawalletgatedapp.vercel.app/',
    repository: 'https://github.com/BankkRoll/Solana-Wallet-Gate-A-Website',
    technologies: ['Typescript','React', 'Next.js','Node.js', 'CSS', 'HTML', 'Rust'],
  },
  {
    name: 'Alien Evo Sales Bot', 
    description: 'Alien Frens Evolution Twitter Sales Bot', 
    src: 'evobotfren.png', 
    site: 'https://twitter.com/alienevobotfren', 
    technologies: ['Typescript', 'Shell' ],
  },
  {
    name: 'Alien Frens Jerseys', 
    description: 'Alien Frens Jersey Generator', 
    src: 'afj.gif', 
    site: 'https://frensjerseys.vercel.app/',
    repository: 'https://github.com/BankkRoll/Alien-Frens-Jersey-Generator-frensjerseys.xyz',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    
  },
  {
    name: 'Alien Frens NFT Viewer', 
    description: 'NO WALLET CONNECTION! Input a address, see the Alien Frens they hold!', 
    src: 'afv.gif', 
    site: 'https://frens-viewer.netlify.app/',
    repository: 'https://github.com/BankkRoll/alien-frens-nft-viewer',
    technologies: ['HTML', 'CSS', 'JavaScript'],
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
  },
  {
    name: 'DOINK ME', 
    description: 'PFP Background Changer', 
    src: 'DOINKME.png', 
    site: 'https://doinkme.xyz/', 
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
  },
  {
    name: 'WEBTREE', 
    description: 'PFP Overlay Changer', 
    src: 'webtree.png', 
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Petal Headz', 
    description: 'Petal Headz NFT', 
    src: 'Petal.png', 
    site: 'https://www.petalheadz.com/', 
    technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'web3.js', 'Solidity'],
  },
  {
    name: 'The Chariot', 
    description: 'The Chariot NFT', 
    src: 'chariot.png', 
    site: 'https://www.thechariotnft.xyz/', 
    technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'web3.js', 'Solidity'],
  },
  {
    name: 'The Ascended Masters', 
    description: 'The Ascended Masters NFT', 
    src: 'am.png', 
    site: 'https://www.ascendedmasters.xyz/', 
    technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'web3.js', 'Solidity'],
  },
  {
    name: 'Greedy Ghost NFT', 
    description: 'A GGhost NFT on SOLANA', 
    src: 'gg.png',
    site: 'https://greedy-ghost.vercel.app/',
    technologies: ['React', 'Next.js', 'web3.js', 'TypeScript', 'Rust'],
  },
  {
    name: 'Downers NFT', 
    description: 'Downers NFT', 
    src: 'downers.png', 
    technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'web3.js', 'Solidity'],
  },
  {
    name: 'FROOTIEZ', 
    description: 'FROOTIEZ NFT', 
    src: 'frootiez.png', 
    technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'web3.js', 'Solidity'],
  },
  {
    name: 'FROOTIEZ SHOOTIEZ Game', 
    description: 'FROOTIEZ SHOOTIEZ NFT Game', 
    src: 'frootiezshootiez.png', 
    site: 'https://bankkrolleth.itch.io/frootiez-shootiez', 
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Budlist Game', 
    description: 'Budlist game for wl or discord invite code', 
    src: 'budlist.png', 
    site: 'https://bankkrolleth.itch.io/budlist', 
    technologies: ['HTML', 'CSS', 'JavaScript'],
  }
  
];

export default projects;
