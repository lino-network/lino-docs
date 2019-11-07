module.exports = {
  title: 'Lino Documentation',
  head: [
    ['link', {
      rel: "shortcut icon",
      href: "/favicon.ico"
    }],
  ],
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-126405334-7'
      }
    ]
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
    repo: 'lino-network/lino',
    sidebar: [
      {
        title: 'Overview',
        sidebarDepth: 2,
        children: [
          ['/overview/notice.html', 'Notice & Disclaimer'],
          ['/overview/intro.html', 'Introduction'],
          ['/overview/ls.html', 'LINO Stake'],
          ['/overview/block_rewards_distribution.html', 'Block Rewards Distribution'],
          ['/overview/contributors.html', 'Blockchain Contributors']
        ]
      },
      {
        title: 'Blockchain',
        sidebarDepth: 2,
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
        title: 'Tutorial',
        displayAllHeaders: true,
        children: [
          ['/tutorial/full_node.html', 'Set Up A Full Node'],
          ['/tutorial/developer.html', 'Register An App Developer Account'],
          ['/tutorial/validator.html', 'Set Up A Validator'],
          ['/tutorial/rpc.html', 'JSON RPC'],
          ['/tutorial/sdk.html', 'Lino SDK']
        ]
      },
      {
        title: 'FAQ',
        displayAllHeaders: true,
        children: [
          ['/faq/faq.html', 'Lino FAQ'],
          ['/faq/validator.html', 'Validator FAQ']
        ]
      },
    ],
    sidebarDepth: 2
  },
}
