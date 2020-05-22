const setFilterURL = () => {
    var url= `/filter?state=${document.getElementById('state').value}&city=${document.getElementById('city').value}&date=${document.getElementById('date').value}&shape=${document.getElementById('shape').value}`;
    document.write("Redirecting to the url now..."); 
    setTimeout(function(){window.location = url;}, 10); 
}