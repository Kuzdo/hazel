const hazel = require('./index')

const {
  INTERVAL: interval,
  ACCOUNT: account,
  REPOSITORY: repository,
  PRE: pre,
  TOKEN: token,
  URL: PRIVATE_BASE_URL,
  VERCEL_URL
} = process.env

// Pierwszeństwo ma stały adres z URL (produkcyjna domena), a dopiero potem adres wdrożenia.
const url = PRIVATE_BASE_URL || VERCEL_URL

module.exports = hazel({
  interval,
  account,
  repository,
  pre,
  token,
  url
})
