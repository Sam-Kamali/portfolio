function showSidebar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display ='flex';
}
function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display ='none';
}
function fetchHeader() {
  fetch('mainsections/header.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error));
}
fetchHeader();


function fetchUIUX() {
  fetch('components/uiuxdesign.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('uiux').innerHTML = data;
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error));
}
fetchUIUX();


function fetchCoding() {
  fetch('components/coding.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('coding').innerHTML = data;
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error));
}
fetchCoding();

function fetchDigitalArt() {
  fetch('components/digital-art.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('digitalArt').innerHTML = data;
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error));
}
fetchDigitalArt();


    

function fetchContactMe() {
  fetch('mainsections/contactme.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('contactme').innerHTML = data;
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error));
}
fetchContactMe();


function fetchFooter() {
  fetch('mainsections/footer.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error));
}
fetchFooter();
