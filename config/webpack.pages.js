const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: [...chunks]
  })
}

const htmlPages = [
  createPages('./src/index.html', './index.html', ['index']),
  createPages('./src/pages/excursions.html', './pages/excursions.html', [
    'index'
  ]),
  createPages('./src/pages/tests.html', './pages/tests.html', ['index']),
  createPages('./src/pages/dictionary.html', './pages/dictionary.html', [
    'index'
  ]),
  createPages(
    './src/pages/articles/article1.html',
    './pages/articles/article1.html',
    ['index']
  ),
  createPages('./src/pages/tests/test1.html', './pages/tests/test1.html', [
    'index'
  ]),
  createPages('./src/workshops/flex.html', './workshops/flex.html', ['index']),
  createPages(
    './src/workshops/sticky-scroll.html',
    './workshops/sticky-scroll.html',
    ['sticky']
  )
]

module.exports = htmlPages
