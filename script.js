function updateDateTime() {
    const currentDateTimeElement = document.getElementById('currentDateTime');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const currentDateTime = new Date().toLocaleDateString('en-US', options);
    currentDateTimeElement.textContent = currentDateTime;
}
// Update the date and time initially
updateDateTime();
// Update the date and time every second
setInterval(updateDateTime, 1000);
