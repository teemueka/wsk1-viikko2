async function getRestaurantData() {
  const options = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  };
  try {
    const response = await fetch(
      'https://10.120.32.94/restaurant/api/v1/restaurants',
      options
    );
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.log('restaurant data error', error.message);
  }
}

async function getWeeklyMenu(id) {
  try {
    const response = await fetch(
      `https://10.120.32.94/restaurant/api/v1/restaurants/weekly/${id}/fi`
    );
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.log('weekly menu error', error);
  }
}

async function processRestaurants() {
  const restaurants = await getRestaurantData();

  restaurants.sort((a, b) =>
    a.name.toLowerCase().trim().localeCompare(b.name.toLowerCase().trim())
  );

  return restaurants;
}

async function createTables() {
  const restaurants = await processRestaurants();
  const tableNode = document.querySelector('table');
  const modal = document.querySelector('dialog');
  const modalContent = document.createElement('div');
  const modalMenu = document.createElement('div');
  const closeBtn = document.createElement('button');
  closeBtn.innerText = 'Close';
  closeBtn.id = 'close-button';

  for (let i = 0; i < restaurants.length; i++) {
    const tableRow = document.createElement('tr');
    const restaurant = document.createElement('td');
    const adress = document.createElement('td');
    restaurant.innerText = restaurants[i].name;
    adress.innerText = restaurants[i].address;
    tableRow.appendChild(restaurant);
    tableRow.appendChild(adress);
    tableNode.appendChild(tableRow);
  }

  const tableData = document.querySelectorAll('table tr:not(:first-child)');
  tableData.forEach((row, index) => {
    row.addEventListener('click', async () => {
      tableData.forEach((row) => row.classList.remove('highlight'));
      row.classList.toggle('highlight');
      const restaurantID = restaurants[index]._id;

      modalContent.innerHTML = '';
      modalMenu.innerHTML = '';

      try {
        const menu = await getWeeklyMenu(restaurantID);

        if (menu.days.length !== 0) {
          for (let i = 0; i < menu.days.length; i++) {
            const menuDay = document.createElement('h4');
            menuDay.innerText = menu.days[i].date;
            modalMenu.appendChild(menuDay);

            const menuDayCourses = menu.days[i].courses;

            if (menuDayCourses.length !== 0) {
              for (let j = 0; j < menuDayCourses.length; j++) {
                const courses = document.createElement('p');
                const price =
                  menuDayCourses[j].price !== null &&
                  menuDayCourses[j].price !== ''
                    ? ` - Price: ${menuDayCourses[j].price}`
                    : '';
                const courseInfo = `${menuDayCourses[j].name} ${price} - Diets: ${menuDayCourses[j].diets}`;
                courses.innerText = courseInfo;
                modalMenu.appendChild(courses);
              }
            } else {
              const courses = document.createElement('p');
              courses.innerText = 'No courses available for this day.';
              modalMenu.appendChild(courses);
            }
          }
        }
      } catch (error) {
        console.error('error fetching weekly menu: ', error);
      }

      const restaurantHeader = document.createElement('h3');
      restaurantHeader.innerText = restaurants[index].name;
      const restaurantAdress = document.createElement('p');
      restaurantAdress.innerText = restaurants[index].address;
      const restaurantPostal = document.createElement('p');
      restaurantPostal.innerText = restaurants[index].postalCode;
      const restaurantCity = document.createElement('p');
      restaurantCity.innerText = restaurants[index].city;
      const restaurantPhone = document.createElement('p');
      restaurantPhone.innerText = restaurants[index].phone;
      const restaurantCompany = document.createElement('p');
      restaurantCompany.innerText = restaurants[index].company;

      modalContent.appendChild(restaurantHeader);
      modalContent.appendChild(restaurantAdress);
      modalContent.appendChild(restaurantPostal);
      modalContent.appendChild(restaurantCity);
      if (restaurantPhone.innerText !== '-') {
        modalContent.appendChild(restaurantPhone);
      }
      modalContent.appendChild(restaurantCompany);
      modal.appendChild(modalContent);
      modal.appendChild(modalMenu);
      modal.appendChild(closeBtn);
      modal.showModal();
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.close();
  });
}

createTables();
