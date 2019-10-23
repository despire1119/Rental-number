module.exports = {
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/steambuy' : './',
  // publicPath: '/steambuy',
  lintOnSave: true
}
