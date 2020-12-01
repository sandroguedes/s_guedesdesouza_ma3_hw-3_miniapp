(() => {
    console.log('Loaded a totally oficial Mini App');

    let sigils = document.querySelectorAll('.iconContainer'),
        houseImages = document.querySelector('#carImages'),
        houseBio = document.querySelector('.carInfo'),
        houseName = document.querySelector('.carName');

    const houseInfo = [
        ["MINI 3 Doors", `It’s the original icon, reborn and reimagined for modern motoring. The MINI 3 door builds on 60+ years of timeless MINI design, but comes equipped with a whole host of 21st century tech features and practical touches to cater to your every need. Distinct by design and urban by nature, it’s made to stand out as you explore new corners of your city. And with its ultra-nimble go-kart feel, you’re sure to find something exciting around every turn.
        `],
        ["MINI 05 Doors", `It’s the iconic MINI hatch, with two extra doors and a bit more room for passengers and cargo. Featuring our hallmark wheels-pushed stance and a low centre of gravity, the MINI 5 door is designed to deliver the same level of corner-carving agility as its 3-door brother. But thanks to a surprisingly spacious interior equipped with added legroom and up to 941 Litres of cargo space, it’s as functional to own as it is fun to drive.
        `],
        ["MINI Clubman", `Allow us to introduce you to the most sophisticated MINI ever made. Superbly crafted with sleek exterior contours, refined cockpit accents, and quality materials throughout, the MINI Clubman is designed to make an impression everywhere it goes. And with a generously sized interior plus ALL4 All-Wheel Drive as standard, it boasts as much practicality as it does personality. Get in, get comfortable, and let the MINI Clubman open more doors to new experiences
        `]
    ];

    function animatePicture()
    {
        houseImages.style.right = `${this.dataset.offset * 600}px`;
        houseName.textContent = `${houseInfo[this.dataset.offset][0]}`;
        houseBio.textContent = `${houseInfo[this.dataset.offset][1]}`;
    }

    sigils.forEach(sigil => sigil.addEventListener('click', animatePicture));
})();