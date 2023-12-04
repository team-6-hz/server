const ROUTES = [
  {
    url: '/free',
    auth: false,
    creditCheck: false,
    rateLimit: {
      windowMs: 15 * 60 * 1000,
      max: 5
    },
    proxy: {
      target: "https://jsonplaceholder.typicode.com/todos/1",
      changeOrigin: true,
      pathRewrite: {
        [`^/free`]: '',
      },
    }
  }, 
  {
    url: '/posts',
    auth: false,
    creditCheck: false,
    proxy: {
      target: "http://localhost:3003/getPosts",
      changeOrigin: true,
      pathRewrite: {
        [`^/posts`]: '',
      },
    }
  },
  {
    url: '/acc',
    auth: false,
    creditCheck: false,
    proxy: {
      target: "http://localhost:3000/",
      changeOrigin: true,
      pathRewrite: {
        [`^/acc`]: '',
      },
    }
  },
  {
    url: '/postPost',
    auth: false,
    creditCheck: false,
    proxy: {
      target: "http://localhost:3003/post",
      changeOrigin: true,
      pathRewrite: {
        [`^/postPost`]: '',
      },
    }
  },
  {
    url: '/premium',
    auth: true,
    creditCheck: true,
    proxy: {
      target: "https://www.google.com",
      changeOrigin: true,
      pathRewrite: {
        [`^/premium`]: '',
      },
    }
  }
]
exports.ROUTES = ROUTES;