module.exports = {
  title: 'Lino Doc',
  base: '/lino-docs/',
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
        sidebarDepth: 3, // 可选的, 默认值是 1
        children: [
          ['/overview/intro.html', 'Introduction'],
          ['/overview/block_rewards_distribution.html', 'Block Rewards Distribution']
        ]
      },
      {
        title: 'Blockchain', // 必要的
        sidebarDepth: 3, // 可选的, 默认值是 1
        children: [
          ['/blockchain/account.html', 'Account'],
          ['/blockchain/fee.html', 'Network Fee']
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
        title: 'Developer', // 必要的
        // sidebarDepth: 4, // 可选的, 默认值是 1,
        displayAllHeaders: true,
        children: [
          ['/developer/introduction.html', 'Introduction'],
          ['/developer/ida.html', 'In-app Digital Asset(IDA))']
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
