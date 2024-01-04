let destinations = [];

function calcSimScore(d1, d2) {
  let count = 0;

  if (d1.price === d2.price) count++;
  if (d1.food === d2.food) count++;
  if (d1.population === d2.population) count++;
  if (d1.continent === d2.continent) count++;
  if (d1.activity === d2.activity) count++;
  if (d1.climate === d2.climate) count++;
  if (d1.language === d2.language) count++;

  return count;
}

function findSimilarDestinations(index) {
    const resultDivId = `result-${index}`;
    let resultDiv = document.getElementById(resultDivId);

    if (resultDiv && resultDiv.innerHTML !== '') {
        resultDiv.innerHTML = ''; 
        return; 
    }

    const selectedDestination = destinations[index];
    const similarDestinations = destinations.filter(destination => {
        const score = calcSimScore(selectedDestination, destination);
        return score >= 4;
    });

    displayResults(similarDestinations, index);
}

function displayResults(results, index) {
    const resultDivId = `result-${index}`;
    let resultDiv = document.getElementById(resultDivId);

    if (!resultDiv) {
        resultDiv = document.createElement('div');
        resultDiv.id = resultDivId;
        const destinationDiv = document.getElementById(`destination-${index}`);
        destinationDiv.appendChild(resultDiv);
    }

    resultDiv.innerHTML = '';

    if (results.length === 0) {
        resultDiv.innerHTML = 'No similar destinations found.';
        return;
    }

    const resultList = document.createElement('ul');
    results.forEach(destination => {
        const destinationItem = document.createElement('li');
        destinationItem.textContent = destination.name;
        resultList.appendChild(destinationItem);
    });

    resultDiv.appendChild(resultList);
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.findSimilarButton').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            findSimilarDestinations(index);
        });
    });

    fetch('travel.csv')
        .then(response => response.text())
        .then(parseCSV);
});

function parseCSV(csv) {
    const lines = csv.split('\n');
    const headers = lines[0].split(',');
    destinations = lines.slice(1).map(line => {
        const values = line.split(',');
        const destination = {};
        headers.forEach((header, index) => {
            destination[header.trim()] = values[index].trim();
        });
        return destination;
    });
    console.log(destinations);
}