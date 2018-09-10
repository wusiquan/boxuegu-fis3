fis.set('project.ignore', [
  'dist/**',
  'node_modules/**',
  '.git/**',
  '.svn/**',
  '.vscode/**',
  'package.json',
  'package-lock.json'
])

fis.hook('commonjs', {
  baseUrl: './',
  paths: {
    jquery: '/static/js/jquery-1.12.1.js'
  },
  extList: ['.js']
})

fis.match('/node_modules/**.js', {
  isMod: true,
  useSameNameRequire: true
})

fis.unhook('components')
fis.hook('node_modules')

// fis.match('/node_modules/{art-template,clean-css}/**.js', {
//   ignoreDependencies: true
// })

// fis.match('/feedback/static/jquery-1.12.1.js', {
//   isMod: true
// })
// fis.match('/feedback/static/bootstrap.js', {
//   isMod: true
// })

// less预处理
fis.match('**.less', {
  parser: fis.plugin('less'),
  rExt: '.css'
})

// 添加css和image加载支持
// fis.match('*.{js,jsx,ts,tsx,es}', {
//     preprocessor: [
//       // fis.plugin('js-require-css'),
//       fis.plugin('js-require-file', {
//         useEmbedWhenSizeLessThan: 10 * 1024 // 小于10k用base64
//       })
//     ]
// })

// 支持ES6
// fis.match('/{pages,static}/**/*.js', {
//   useSameNameRequire: true,
//   parser: fis.plugin('babel-6.x', {
//     presets: ['es2015']
//   })
// })

fis.match('/widgets/**/*.html', {
  rExt: '.js', // from .handlebars to .js 虽然源文件不需要编译，但是还是要转换为 .js 后缀
  parser: fis.plugin('handlebars-4.x', {
    // fis-parser-handlebars-3.x option
  }),
  release: false
})

// fis.match('::package', {
//   packager: fis.plugin('map', {
//     '/static/js/vendor.js': '/static/js/{add,jquery-1.12.1}.js'
//   })
// })

/**
 * 标记模块
 */
fis.match('/static/js/jquery-1.12.1.js', {
  isMod: true
})

fis.match('/common/js/*.js', {
  isMod: true
})

fis.match('/widgets/**/*.js', {
  isMod: true
})

// widget下的 js 调用 jswrapper 进行自动化组件化封装
// fis.match('/widgets/**/*.js', {
//   postprocessor: fis.plugin('jswrapper', {
//     type: 'commonjs'
//   })
// })


/**
 * 打包规则
 */
// 用 loader 来自动引入资源
fis.match('::package', {
  postpackager: fis.plugin('loader')
})


/**
 * release 路径
 */
fis.match('*.html', {
  release: '$0'
})
