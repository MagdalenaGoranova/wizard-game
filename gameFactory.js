function gameFactory() {
    let { wizard, bugStats,  fireballStats } = state; // state is now global object 

    let startScreen = document.querySelector('.start-screen');
    let playScreen = document.querySelector('.play-screen');
    let scoreScreen = document.querySelector('.score-screen-div'); 
    let wizardElement = createWizard(wizard.x, wizard.y);
    
    playScreen.appendChild(wizardElement);

    let factory = {
        startScreen, 
        playScreen,
        scoreScreen,
        wizardElement,
        createBug: () => {
            let bugElement = document.createElement('div');
            bugElement.classList.add('bug'); 
            bugElement.style.width = bugStats.width + 'px';
            bugElement.style.height = bugStats.height + 'px';
            // bug position  - make position random every time not fixed 
            bugElement.style.left = playScreen.offsetWidth + 25 - bugStats.width + 'px';
            bugElement.style.top = (playScreen.offsetHeight + 25 - bugStats.height) * Math.random() + 'px';

           playScreen.appendChild(bugElement);
        },
        createFireball: () => {
            let fireballElement = document.createElement('div');
            fireballElement.classList.add('fireball'); 
            // add dynamic width and height so we can change them later in the game 
            fireballElement.style.width = fireballStats.width + 'px'; 
            fireballElement.style.height = fireballStats.height + 'px'; 

            // add position of the fireball 
            fireballElement.style.left = wizard.x + 45 + 'px';
            fireballElement.style.top = wizard.y + 25 + 'px'; 

            playScreen.appendChild(fireballElement); 
        }
        
    };

    return factory;
}
function createWizard(posX, posY) {
    let wizardElement = document.createElement('div');
    wizardElement.classList.add('wizard'); 
    wizardElement.style.top = posY + 'px';
    wizardElement.style.left = posX + 'px';

    return wizardElement;

}



