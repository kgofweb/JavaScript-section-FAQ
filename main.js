// DOM elements
const allCross = document.querySelectorAll('.visible-pannel img');

allCross.forEach(element => {
        element.addEventListener('click', function() {
                //  Element clicked
                const currentChoice = this.parentNode.parentNode.childNodes[3];

                // Height of the element
                const elementHeight = this.parentNode.parentNode.childNodes[3].scrollHeight;

                // Toggle img svg
                if (this.src.includes('plus-solid')) {
                        this.src = './img/minus-solid.svg';
                        // Animation
                        gsap.to(
                                currentChoice,
                               {  duration: 0.3, height:  elementHeight + 20, opacity: 1, padding: '10px 15px' }
                        )
                } else if (this.src.includes('minus-solid')) {
                        this.src = './img/plus-solid.svg';
                        gsap.to(
                                currentChoice,
                               {  duration: 0.3, height:  0, opacity: 0, padding: '0px 15px' }
                        )
                }
        });
});








