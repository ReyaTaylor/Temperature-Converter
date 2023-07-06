document.querySelector('#convert').addEventListener('click', run)

function run() {

    // get temperature value from input
    let t = document.querySelector('#temperature').value

    // conversion of temperature
    t = t * 9/5 + 32

    // show the temperature value
    document.querySelector('#placeToConvert').innerText = t
}

