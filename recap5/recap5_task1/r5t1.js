async function getResponse() {
  const response = await fetch('https://reqres.in/api/users/1');
  console.log(response);
}

getResponse();
