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
            ? '{"model":"gpt-3.5-turbo","messages":[{"role":"user", "content":"' + requestText + '"}]}'
            : '{"prompt":"' + requestText + '", "n":4, "size":"1024x1024"}',
    };

    const MAX_RETRIES = 3;
    const RETRY_DELAY = 1000;

    let retryCount = 0;
    let responseData;

    while (retryCount < MAX_RETRIES) {
        try {
            const response = await axios.request(options);
            responseData = response.data;
            
            console.log(responseData);
            return responseData;
        } catch (error) {
            if (error.response && error.response.status === 429) {
                // Exceeded rate limit, retry after delay
                await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
                retryCount++;
            } else {
                // Other error occurred, throw it
                // console.error(error);
                throw error;
            }
        }
    }

    // Maximum number of retries exceeded, throw error
    console.error('Exceeded maximum number of retries');
    throw new Error('Exceeded maximum number of retries');
}

module.exports = {
    apiFunction,
};