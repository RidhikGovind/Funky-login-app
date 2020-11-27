const form = document.querySelector('form')
        const login = document.querySelector('.login')
        const password = document.querySelector('.password')
        const mood = document.querySelector('.mood');

     

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            getData();
        })

        function getData() {

            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(async position => {
                    const lat = position.coords.latitude;
                    const long = position.coords.longitude;
                    // console.log(lat, long);


                    const data = {
                        name: login.value,
                        password: password.value,
                        mood: mood.value,
                        latitude: lat,
                        longitude: long
                    }


                    const options = {  //describing the type of method,header and body type
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data) //converting JS string into JSON 
                    }
                    const response = await fetch('/sample', options)
                    const json = await response.json();
                    console.log(json);
                    form.reset()
                })

            } else {
                console.log('geolocation not available');
            }
        }
