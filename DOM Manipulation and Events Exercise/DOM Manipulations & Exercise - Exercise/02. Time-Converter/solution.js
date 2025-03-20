function attachEventsListeners() {
    const dayButtonElement = document.getElementById('daysBtn');
    const dayTextElement = document.getElementById('days');
    const hourButtonElement = document.getElementById('hoursBtn');
    const hourTextElement = document.getElementById('hours');
    const minuteButtonElement = document.getElementById('minutesBtn');
    const minuteTextElement = document.getElementById('minutes');
    const secondButtonElement = document.getElementById('secondsBtn');
    const secondTextElement = document.getElementById('seconds');
    //const mainElement = document.querySelector('main');

    // mainElement.addEventListener('click', (e) => {
    //     if (e.target.tagName === 'INPUT') {
            
    //     }
    //     if (e.target.getElementById('daysBtn') === dayButtonElement) {
    //         const days = Number(dayTextElement.value);
    //         hourTextElement.value = days * 24;
    //         minuteTextElement.value = days * 1440;
    //         secondTextElement.value = days * 86400;
    //     }
    // });

    dayButtonElement.addEventListener('click', () => {
        const days = Number(dayTextElement.value);
        hourTextElement.value = days * 24;
        minuteTextElement.value = days * 1440;
        secondTextElement.value = days * 86400;
    });

    hourButtonElement.addEventListener('click', () => {
        const hours = Number(hourTextElement.value);
        dayTextElement.value = hours / 24;
        minuteTextElement.value = hours * 60;
        secondTextElement.value = hours * 3600;
    });

    minuteButtonElement.addEventListener('click', () => {
        const minutes = Number(minuteTextElement.value);
        dayTextElement.value = minutes / 1440;
        hourTextElement.value = minutes / 60;
        secondTextElement.value = minutes * 60;
    });

    secondButtonElement.addEventListener('click', () => {
        const seconds = Number(secondTextElement.value);
        dayTextElement.value = seconds / 86400;
        hourTextElement.value = seconds / 3600;
        minuteTextElement.value = seconds / 60;
    });
}