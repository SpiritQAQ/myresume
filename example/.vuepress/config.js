module.exports = {
  port: 5000,
  base: '/myresume/example/dist',
  title: '简历 - 毕云帆 - 前端开发',
  dest: 'example/dist',
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
