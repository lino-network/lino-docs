module.exports = {
  title: 'Hello VuePress',
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/'
      },
    ],
    sidebar: [
      {
        title: 'Overview', // 必要的
        sidebarDepth: 3, // 可选的, 默认值是 1
        children: [
          ['/overview/intro.html', 'haha']
        ]
      },
      {
        title: 'Tutorial', // 必要的
        // sidebarDepth: 4, // 可选的, 默认值是 1,
        displayAllHeaders: true,
        children: [
          ['/tutorial/start.html', 'Getting Started'],
          ['/tutorial/goals.html', 'Application Goals']
        ]
      },
    ],
    sidebarDepth: 2
  },
}