async function fetchData(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Error ', response.status);
  }
  return await response.json();
}

try {
  const user = {
    name: 'John Doe',
    job: 'Developer',
  };
  const url = 'https://reqres.in/api/users';

  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  const userData = fetchData(url, options);
  console.log(userData);
} catch (error) {
  console.log('Error occured: ', error);
}
// am I supposed to wait for the response on the fetchdata
// fuction or just do it like this??
