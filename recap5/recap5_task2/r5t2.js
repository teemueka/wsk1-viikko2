async function postData() {
  const options = {
    body: JSON.stringify({
      name: 'john doe',
      job: 'developer',
    }),

    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
  };

  try {
    const response = await fetch('https://reqres.in/api/users', options);
    if (!response.ok) throw new Error('Invalid input');
    const json = await response.json();
    console.log('result json', json);
  } catch (e) {
    console.log('error', e);
  }
}

postData();
