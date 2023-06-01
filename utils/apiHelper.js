import axios from 'axios';

async function apiFunction(requestText, requestType) {
    const options = {
        method: 'POST',
        url: requestType === 'text'
            ? process.env.RAPID_API_OPENAI_API_URL
            : process.env.RAPID_API_OPENAI_API_IMAGE_URL,
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST,
        },
        data: requestType === 'text'
            ? '{"messages":[{"role":"user", "content":"' + requestText + '"}]}'
            : '{"prompt":"' + requestText + '", "n": 2, "size": "512x512"}',
    };

    const MAX_RETRIES = 3;
    const RETRY_DELAY = 1000;

    let retryCount = 0;
    let responseData;

    const response = await axios.request(options);
    responseData = response.data;

    while (retryCount < MAX_RETRIES) {
        try {
            const response = await axios.request(options);
            responseData = response.data;
            return responseData;
        } catch (error) {
            if (error.response && error.response.status === 429) {
                // Exceeded rate limit, retry after delay
                await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
                retryCount++;
            } else {
                // Other error occurred, throw it
                throw error;
            }
        }
    }

    // Maximum number of retries exceeded, throw error
    throw new Error('Exceeded maximum number of retries');
}

module.exports = {
    apiFunction,
};