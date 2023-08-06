document.addEventListener("DOMContentLoaded", () => {

    const emoji = document.querySelector('.emoji'),
        slider = document.querySelector('.slider'),
        tempOutput = document.querySelector('.temperature-output'),
        tempOutputK = document.querySelector('.temperatureK-output');
        tempOutputF = document.querySelector('.temperatureF-output');

    const displayTempK = temperatureK => {
        // Display temperature
        tempOutputK.textContent = temperatureK;
    };

    const displayTempF = temperatureF => {
        // Display temperature
        tempOutputF.textContent = temperatureF;
    };

    const displayTemp = temperature => {
        // Display temperature
        tempOutput.textContent = temperature;

        // Display emoji
        if (temperature >= -40 && temperature <= -2) {
            emoji.textContent = '🥶';
            emoji.setAttribute('aria-label', 'freezing face');
        } else if (temperature > -2 && temperature <= 10) {
            emoji.textContent = '😬';
            emoji.setAttribute('aria-label', 'cold face');
        } else if (temperature > 10 && temperature <= 18) {
            emoji.textContent = '😊';
            emoji.setAttribute('aria-label', 'happy face');
        } else if (temperature > 18 && temperature <= 26) {
            emoji.textContent = '😅';
            emoji.setAttribute('aria-label', 'warm face');
        } else {
            emoji.textContent = '🥵';
            emoji.setAttribute('aria-label', 'hot face');
        }
    };

    slider.addEventListener('input', () => displayTemp(slider.value));

    if (location.pathname.includes('fullcpgrid')) {

        let temperature = 0;

        const interval = setInterval(() => {

            // Remove interval if max temperature is reached
            if (temperature === 40) clearInterval(interval);

            // Update slider value
            slider.value = temperature;

            // Display temperature and emoji
            displayTemp(temperature);

            // Increase temperature
            temperature++;

        }, 95);
    }

    slider.addEventListener('input', () => displayTempK(parseInt(slider.value) + 273));

    if (location.pathname.includes('fullcpgrid')) {

        let temperatureK = 273.15;

        const interval = setInterval(() => {

            // Remove interval if max temperature is reached
            if (temperatureK === 313.15) clearInterval(interval);

            // Update slider value
            slider.value = temperatureK;

            // Display temperature and emoji
            displayTempK(temperatureK);

            // Increase temperature
            temperatureK++;

        }, 95);
    }
    slider.addEventListener('input', () => displayTempF(parseInt((slider.value)*1.8 )+ 32));

    if (location.pathname.includes('fullcpgrid')) {

        let temperatureF = 32;

        const interval = setInterval(() => {

            // Remove interval if max temperature is reached
            if (temperatureF === 104) clearInterval(interval);

            // Update slider value
            slider.value = temperatureF;

            // Display temperature and emoji
            displayTempK(temperatureF);

            // Increase temperature
            temperatureF++;

        }, 95);
    }

});