const images = [
    {name: "baby Yoda",
    address: 'swPictures/babyYoda.jpg',
    info: "Baby Yoda, officially known as Grogu, is the pint-sized scene-stealer from The Mandalorian, a Star Wars series. With his giant eyes, tiny hands, and insatiable appetite for frogs, Grogu manages to balance cuteness with a mysterious past and surprising Force powers. He’s basically 50 years old but acts like a toddler with the wisdom of a Jedi retiree."
    },
    {name: "Boba Fett",
    address: 'swPictures/bountyHunter.jpg',
    info: "Boba Fett, the galaxy's most infamous bounty hunter, is basically the cool uncle of the Star Wars universe—always armored, rarely smiling, and never missing a shot. Clad in Mandalorian armor with a jetpack that says 'no escape,' he’s the silent type who lets his blaster do the talking."
    },
    {name: "C3PO",
    address: 'swPictures/C3PO.jpg',
    info: "C-3PO, the galaxy’s most lovable worrywart, is basically a golden, walking etiquette manual with a knack for stating the obvious. Fluent in over six million forms of communication (but somehow still terrible at reading the room), he’s your go-to droid for translating alien languages, and freaking out under pressure. "
    },
    {name: "Dart Vader",
    address: 'swPictures/dartVader.jpg',
    info: "Darth Vader, the galaxy’s ultimate bad guy and breathing ASMR enthusiast, is what happens when you mix Jedi talent with serious anger issues. Once a heroic Jedi Knight, now he’s the Dark Side’s top enforcer, known for his dramatic entrances, heavy breathing, and a voice so deep it sounds like it’s straight out of a horror movie. Vader’s hobbies include Force-choking his subordinates, battling his inner conflict, and reminding everyone that even in a galaxy full of aliens, capes are always in style."
    },
    {name: "Storm Trooper",
    address: 'swPictures/stormTrooper.jpg',
    info: "Stormtroopers are the Empire’s not-so-sharp shooters, known for their iconic white armor, impeccable marching skills, and their absolute inability to hit a target—even if it’s the size of a barn. They’re the backbone of the Imperial forces, showing up in droves to look intimidating while generally being outsmarted by rebels, droids, and Ewoks alike."    
    },
    {name: "Kylo Ren",
    address: 'swPictures/kyloRen.jpg',
    info: "Kylo Ren, the galaxy’s moody bad boy with a lightsaber that looks like it’s throwing a tantrum, is what happens when you mix Skywalker genes with a relentless need for validation. Sporting a mask for the drama (and because granddad Vader did it first), he’s a conflicted Sith wannabe who swings between rage fits and puppy-eyed regret."    
    },
    {name: "Captain Phasma",
    address: 'swPictures/guardTrooper.jpg',
    info: "Captain Phasma, the galaxy’s shiniest enigma, is basically what happens when you combine stormtrooper armor with a mirror finish and a serious attitude. Towering over her troops in chrome, she’s all about discipline, intimidation, and looking fabulously reflective while doing it."
    },
    {name: "Admiral Ackbar",
    address: "swPictures/rebelCaptain.jpg",
    info: "Admiral Ackbar, the Mon Calamari strategist with the voice of a raspy sea captain, is best known for delivering the galaxy’s most famous line: “It’s a trap!” With a face like a lobster and the tactical mind of a chess grandmaster, he’s the Rebel Alliance’s go-to guy for spotting danger and naval ambushes."
    }
];



// function to load the images

function loadImages () {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex].address;

    document.getElementById("randomImage").src = randomImage;
    document.getElementById("p-info").textContent = images[randomIndex].info
}

// add event listener to the button
document.getElementById("loadButton").addEventListener("click", loadImages);