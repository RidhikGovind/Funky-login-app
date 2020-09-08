const form = document.querySelector('form')
        const login = document.querySelector('.login')
        const password = document.querySelector('.password')
        const mood = document.querySelector('.mood');

        console.log("****HEY YOU WIERDO, YES YOU*** - If you are reading this, then you were probably curious about how this code works hence proving you are Awesomeeee ! @fluffyridz is my Twitter handle. Come let's connect and become friends(text me up with our secret code == *BlehDevLife*) ")

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