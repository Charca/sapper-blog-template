module.exports = (req, res) => {
  const runner = require('./__sapper__/build/index.js')
  res.end(runner)
}
