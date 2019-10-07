module.exports = {
  title: 'Lino Documentation',
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
          ['/blockchain/ida.html', 'In-app Digital Asset(IDA))'],
          ['/blockchain/fee.html', 'Network Fee'],
          ['/blockchain/ndn.html', 'Token-incentivized NDN'],
          ['/blockchain/governance.html', 'Governance']
        ]
      },
      {
        title: 'Tutorial', // 必要的
        // sidebarDepth: 4, // 可选的, 默认值是 1,
        displayAllHeaders: true,
        children: [
          ['/tutorial/install.html', 'Install Lino Core SDK'],
          ['/tutorial/developer.html', 'Set Up An App Developer Account'],
          ['/tutorial/validator.html', 'Set Up A Validator'],
          ['/tutorial/msg.html', 'Message Types']
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
