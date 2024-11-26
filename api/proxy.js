const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = ''

  if (req.url.startsWith('/backend')) {
    target = 'http://47.120.67.162'
  }

  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/backend/': '/'
    }
  })(req, res)
}

