import guests from './guests.json';

const form = document.querySelector('.rsvp-form');

const names = form.querySelector('[name="name"]');
const results = form.querySelector('.search-results');

guests.forEach(guest => {
  const option = document.createElement('option');
  option.innerHTML = guest.name;
  option.value = guest.name;
  names.append(option);
});

names.onkeydown = (v) => {
  console.log('change', v);
  results.innerHTML = '';
  const found = [guests[0], guests[1]];
  found.forEach(result => {
    const resultElement = document.createElement('div');
    resultElement.innerHTML = `${result.name} ${result.count}`;
    results.append(resultElement);
  });
};
