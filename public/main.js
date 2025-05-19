const API_PEOPLE_ENDPOINT = "/api/people";

const getPeople = async () => {
  const response = await fetch(API_PEOPLE_ENDPOINT);
  const data = await response.json();
  return data;
};

const renderPeople = (people) => {
  const peopleGrid = document.getElementById("people-grid");
  peopleGrid.innerHTML = "";
  people.forEach((person) => {
    const personElement = document.createElement("li");
    personElement.innerHTML = `
      <img src="${person.avatars[0]}" alt="${person.name}">
      <h3>${person.name}</h3>
      <p>${person.email}</p>
    `;
    
    peopleGrid.appendChild(personElement);
  });
};

const main = async () => {
  const people = await getPeople();
  renderPeople(people);
};

main();