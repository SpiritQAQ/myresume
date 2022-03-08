module.exports = {
  port: 5000,
  base: '/docs/dist',
  title: '简历 - 毕云帆 - 前端开发',
  dest: 'docs/dist',
  theme: 'resume',
  themeConfig: {
    sidebar: [
      {
        collapsable: false,
        children: ['/'],
      },
    ],
  },
}
