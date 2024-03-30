async function getResponse() {
  const options = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  };
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', options);
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log('error', error.message);
  }
}

getResponse();
