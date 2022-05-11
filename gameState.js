
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
            level: 1,
            experience: 0,

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
            attackSpeed: 1000,
            //add damage of the bug
        },
        cloudStats: {
            width: 50, 
            height:50, 
            speed: 5,
            nextCloudCreation: 0,
            maxCreationInterval: 5000,

        }
    };
    
