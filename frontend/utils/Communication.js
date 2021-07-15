const getMethod = (type) => {
  return async ({path, body}) => {
    const fetchParams = {
      method: type,
      body: JSON.stringify(body),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    };  
 
    try {
      const response = await fetch(path, fetchParams);
      const json = await response.json();

      return {
        success: response.ok,
        response: json
      }
    } catch (err) {
      console.error(err)
    }
  };
};

export default {
  post: getMethod('POST')
};