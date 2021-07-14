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

      if (response.ok) {
        console.log('SUCCESS')
      } else {
        console.log('FAILED')
      }

      console.log(json)
    } catch (err) {
      console.error(err)
    } finally {
      // close loader?
    };
  };
};

export default {
  post: getMethod('POST')
};