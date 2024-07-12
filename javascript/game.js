let ingredients = [0, 0, 0];
let scoretrack = 0;
let scorepoints = JSON.parse(localStorage.getItem('scorepoints')) || 0;

const scoreDict = 
{
    111:"a matcha latte boba",
    211:"an espresso latte boba",
    311:"a milk tea boba",
    121:"a matcha tea boba",
    221:"an americano boba",
    321:"a tea boba",
    112:"a matcha latte grass jelly",
    212:"an espresso latte grass jelly",
    312:"a milk tea grass jelly",
    122:"a matcha tea grass jelly",
    222:"an americano grass jelly",
    322:"a tea grass jelly",
    110:"a matcha latte",
    210:"an espresso latte",
    310:"a milk tea",
    120:"a matcha tea",
    220:"an americano",
    320:"a tea"
};

const teaDict = 
{
    1:111,
    2:211,
    3:311,
    4:121,
    5:221,
    6:321,
    7:112,
    8:212,
    9:312,
    10:122,
    11:222,
    12:322,
    13:110,
    14:210,
    15:310,
    16:120,
    17:220,
    18:320
};

function startGame()
{
    document.querySelector(".game_box").style.filter = "none";
    document.querySelector(".game_order").style.filter = "none";
    document.querySelector(".game_score").style.filter = "none";
    document.querySelector(".game_start").style.visibility = "hidden";

    let x = Math.floor(Math.random() * 17 + 1);

    scoretrack = teaDict[x];
    document.querySelector(".game_cafeorder").innerHTML = `I would like ${scoreDict[teaDict[x]]}`;

    ingredients = [0, 0, 0];
}

function caffeine(x)
{
    ingredients[0] = x;
    checkConditions();
    console.log(ingredients);
}

function base(x)
{
    ingredients[1] = x;
    checkConditions();
    console.log(ingredients);
}

function toppings(x)
{
    ingredients[2] = x;
    checkConditions();
    console.log(ingredients);
}

function checkConditions()
{
    let x = false;

    if (ingredients[0] != 0 && ingredients[1] != 0)
    {
        x = true;
    }

    if (x)
    {
        document.querySelector('.game_serve').disabled = false; //button enabled
    }
}

function serve()
{
    console.log("serve");   

    let x = "";
    for (let i = 0; i < ingredients.length; i++)
    {
        x += ingredients[i];
    }
    
    x = Number(x);

    document.querySelector('.game_scoreReveal').classList.add('color_change');

    if (x == scoretrack)
    {
        scorepoints++;
        document.querySelector('.game_scoreReveal').innerHTML = "Happy Customer! +1";
    }
    else
    {
        document.querySelector('.game_scoreReveal').innerHTML = "Sad Customer! -1";
        scorepoints--;
    }

    localStorage.setItem('scorepoints', JSON.stringify(scorepoints));
    document.querySelector('.game_serve').disabled = true;

    setTimeout(function(){
        document.querySelector('.game_scoreReveal').classList.remove('color_change')
    }, 500)
    startGame();
}

function showScore()
{
    document.querySelector('.game_scoreReveal').innerHTML = scorepoints;
    scorepoints = 0;
    localStorage.removeItem('scorepoints');
}
