module.exports = {
  title: 'Lino Documentation',
  head: [
    ['link', {
      rel: "shortcut icon",
      href: "/favicon.ico"
    }],
  ],
  themeConfig: {
    nav: [
      {
        text: 'Tracker',
        link: 'https://tracker.lino.network'
      },
      {
        text: 'Wallet',
        link: 'https://account.lino.network'
      },
    ],
    repo: 'lino-network/lino-docs',
    sidebar: [
      {
        title: 'Overview', // 必要的
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          ['/overview/intro.html', 'Introduction'],
          ['/overview/ls.html', 'LINO Stake'],
          ['/overview/block_rewards_distribution.html', 'Block Rewards Distribution']
        ]
      },
      {
        title: 'Blockchain', // 必要的
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          ['/blockchain/account.html', 'Account'],
          ['/blockchain/developer.html', 'App Developer'],
          ['/blockchain/validator.html', 'Validator'],
          ['/blockchain/ida.html', 'In-app Digital Asset(IDA)'],
          ['/blockchain/fee.html', 'Network Fee'],
          ['/blockchain/pocv.html', 'Proof of Content Value'],
          ['/blockchain/ndn.html', 'Token-incentivized NDN'],
          ['/blockchain/governance.html', 'Governance']
        ]
      },
      {
        title: 'Tutorial', // 必要的
        // sidebarDepth: 4, // 可选的, 默认值是 1,
        displayAllHeaders: true,
        children: [
          ['/tutorial/full_node.html', 'Set Up A Full Node'],
          ['/tutorial/developer.html', 'Register An App Developer Account'],
          ['/tutorial/validator.html', 'Register A Validator Account'],
          ['/tutorial/api.html', 'Lino API']
        ]
      },
      {
        title: 'Lino Wallet FAQ', // 必要的
        // sidebarDepth: 4, // 可选的, 默认值是 1,
        displayAllHeaders: true,
        children: [
          ['/lino_wallet_faq/faq.html', 'FAQ'],
        ]
      },
    ],
    sidebarDepth: 2
  },
}
