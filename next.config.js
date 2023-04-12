const nextTranslate = require('next-translate-plugin')

module.exports = nextTranslate({
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer, webpack }) => {
    return config;
  },
  env: {
    REQUEST_INPUT_PLACEHOLDER_ROW: process.env.REQUEST_INPUT_PLACEHOLDER_ROW_NUM,
    RESPONSE_INPUT_PLACEHOLDER_ROW: process.env.RESPONSE_INPUT_PLACEHOLDER_ROW_NUM,
    REQUEST_TEXT_LENGTH: process.env.REQUEST_TEXT_LENGTH,
    RAPID_API_OPENAI_API_URL: process.env.RAPID_API_OPENAI_API_URL,
    X_RAPIDAPI_KEY: process.env.X_RAPIDAPI_KEY,
    X_RAPIDAPI_HOST: process.env.X_RAPIDAPI_HOST,
    GPT_MODEL: process.env.GPT_MODEL
  }
})