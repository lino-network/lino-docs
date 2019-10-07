module.exports = {
  title: 'Lino Documentation',
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
    sidebar: [
      {
        title: 'Overview', // 必要的
        sidebarDepth: 3, // 可选的, 默认值是 1
        children: [
          ['/overview/intro.html', 'Introduction'],
          ['/overview/ls.html', 'LINO Stake'],
          ['/overview/block_rewards_distribution.html', 'Block Rewards Distribution']
        ]
      },
      {
        title: 'Blockchain', // 必要的
        sidebarDepth: 3, // 可选的, 默认值是 1
        children: [
          ['/blockchain/account.html', 'Account'],
          ['/blockchain/ida.html', 'In-app Digital Asset(IDA))'],
          ['/blockchain/fee.html', 'Network Fee'],
          ['/blockchain/governance.html', 'Governance']
        ]
      },
      {
        title: 'Validator', // 必要的
        // sidebarDepth: 4, // 可选的, 默认值是 1,
        displayAllHeaders: true,
        children: [
          ['/validator/introduction.html', 'Introduction'],
          ['/validator/setup.html', 'Set Up A Validator']
        ]
      },
      {
        title: 'App Developer', // 必要的
        // sidebarDepth: 4, // 可选的, 默认值是 1,
        displayAllHeaders: true,
        children: [
          ['/developer/introduction.html', 'Introduction'],
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
    sidebarDepth: 3
  },
}
