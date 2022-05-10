
    var  state = {
        gameOver: false,
        score: 0,
        wizard: {
            x: 100, 
            y: 200,
            width: 82,
            height: 100,
            speed: 7,
            gravity: 0,
            experience: 0,
            level: 1,
        },
        keys: {},
        bugStats: {
            nextBugCreation: 0, 
            maxCreationInterval: 1500,
            speed: 3, 
            width: 50,
            height: 50,
            score: 500,
        },
        fireballStats: {
            width: 40,
            height: 40,
            speed: 10,
            nextFireballCreation: 0, 
            attackSpeed: 1500,

            //add damage of the bug
        }
    };
    
