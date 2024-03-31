document.addEventListener('DOMContentLoaded', function() {
    // Function to run when the document is loaded
    // For example, you can fetch the horoscope for a default sign
    fetchHoroscope(document.getElementById('signSelector').value);
    

    
});

document.getElementById('signSelector').addEventListener('change', function() {
    const selectedSign = this.value;
    fetchHoroscope(selectedSign);
});

function fetchHoroscope(signNumber) {

    const apiUrl = `https://api-bundle.vercel.app/horoscopes/${signNumber}`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        document.getElementById('horoscope').innerText = data.horoscope;
    })
    .catch(error => console.error('Error fetching horoscope:', error));
}


const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
}


const darkmode = new Darkmode(options);
darkmode.showWidget();
