const reverseWords = require('src/reverse-words.js')

module.exports.reverse = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      reverseWords(event.body)
    )
  }

  callback(null, response)
}
