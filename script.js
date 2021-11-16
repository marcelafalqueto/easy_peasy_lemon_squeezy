function load() {
    var msg = window.document.getElementById('msg')
    var image = window.document.getElementById('image')
    var data = new Date()
    var hour = data.getHours()
    msg.innerHTML = `Now it is ${hour} o'clock`
    if (hour >= 5 && hour < 12) {
        // Good Morning
        image.src = 'morning.jpeg'
        document.body.style.background = '#FFFAAE'
    } else if (hour >= 12 && hour <= 18) {
        // Good Afternoon
        image.src = 'afternoon.jpeg'
        document.body.style.background = '#D2691E'
    } else {
        // Good evening
        image.src = 'evening.jpeg'
        document.body.style.background = '#3d3d3d'
    }

}

