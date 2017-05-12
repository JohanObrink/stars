const {parse} = require('path')
const {readFileSync} = require('fs')

function fallback (path) {
  const index = readFileSync(path, {encoding: 'utf8'})
  return (req, res, next) => {
    const {ext} = parse(req.url)
    if (!ext) {
      res.send(index)
    }
    next()
  }
}

module.exports = {fallback}
