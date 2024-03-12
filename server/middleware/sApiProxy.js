export default defineEventHandler(async (event) => {
  const url = event.node.req.url
  if (!url.startsWith('/s/')) {
    return
  }

  const method = event.node.req.method
  if (method !== 'POST') {
    return
  }

  const config = useRuntimeConfig()

  const apiUrl =  config.sApiUrl
  const apiKey =  config.sApiKey
  const path = url.replace('/s/', '')
  
  const body = await readBody(event)

  try {

    const response = await $fetch(`${apiUrl}/${path}`, {
      method,
      headers: {
        'Authorization': 'Bearer ' + apiKey, 
      },
      body,
    })

    // console.log('Response API:', response)
    return {
      status: response.status,
      message: 'Request successful',
    }
  } catch (error) {
    console.error('Error contacting API:', error.message)
    return sendError(event, error)
  }
})
