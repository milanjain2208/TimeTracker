window.onload = function() {
    const timeframes = document.querySelectorAll(".timeframe")
    let activeTimeframe = timeframes[0];
    function setActive(timeframe) {
        activeTimeframe.classList.toggle("color-white")
        timeframe.classList.toggle("color-white")
        activeTimeframe = timeframe
    }
    function setStat(timeframe) {
        data.forEach(cardstat => {
            const previous = document.querySelector(`.${cardstat["title"]} .previous`)
            const current = document.querySelector(`.${cardstat["title"]} .current`)
            current.innerText = cardstat["timeframes"][`${timeframe.dataset.name}`]["current"]+"hrs"
            previous.innerText = `Last ${timeframe.dataset.shortname} - ` + cardstat["timeframes"][`${timeframe.dataset.name}`]["previous"]+"hrs"
        })
    }
    timeframes.forEach(timeframe => timeframe.addEventListener('click',event => {
        setStat(timeframe)
        setActive(timeframe)
    }))
    setStat(timeframes[0])
}