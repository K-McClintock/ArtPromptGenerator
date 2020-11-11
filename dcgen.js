const subject =  ["A skeleton", 
                "A pirate",
                "A horse",
                "A cat",
                "A dog",
                "A rabbit",
                "A mage",
                "A princess",
                "A cowboy",
                "A robot",
                "An ogre",
                "An imp",
                "A treant",
                "An elf",
                "A gnome",
                "A teddy bear",
                "A zombie",
                "An alien"]
const attr = ["made of chocolate.",
            "made of sand.",
            "made of ice.",
            "armed with a bow.",
            "armed with a sword.",
            "disguised as a knight.",
            "dressed like a chef.",
            "outside a bakery.",
            "lost in a forest.",
            "with a flamethrower.",
            "made of stone.",
            "that can fly.",
            "made of water.",
            "made of fire.",
            "with a banjo.",
            "surfing.",
            "painting a sunset.",
            "being a real Karen.",
        ]
            
function dcGen() {
    let result = subject[Math.floor(Math.random() * subject.length)] +" "+
                attr[Math.floor(Math.random() * attr.length)];
    document.getElementById("res").innerHTML = result;
}            