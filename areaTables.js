export let areaTables = { 
    erimera: 
    {
        name: "Erimera (Desert)",
        encounters: ["1 d20", "scourge", "scourge", "blank", "blank", "blank", "blank", "blank", "blank", "lowMat", "fish", "lowHunt", "lowHunt", "npc", "midMat", "wildMag", "landmark", "npc", "highHunt", "highMat"],
        mats: {pl: ["Acai Fruit", "Wyrmsqil"],
                me: ["Serpent Meat", "Scorpion Meat", "Lucsyn Meat"],
                fi: ["Sandlin", "Razorwolfe", "Goldsick Carp"],
                ot: ["Spirit Esscense", "Miracle Seed"],
                mons: [["Serpent", "serpent.png", "me 0", 66], ["Scorpion", "scorpion.png", "me 1", 55], ["Lucsyn", "lucsyn.png", "me 2", 30], ["Spirit", "spirit.png", "ot 0", 46]], },
        lowMat: ["1 d6", ["pl 0", "1"], ["pl 0", "2"], ["pl 0", "2"], ["pl 1", "1"], ["pl 1", "1 d2"], ["ot 1", "1"]],
        midMat: ["1 d6", ["pl 0", "1 d4 - 1 1"], ["pl 0", "2 d4 - 1 2"], ["pl 1", "1 d2"], ["pl 1", "1 d2 + 1"], ["ot 1", "1"], ["ot 1", "1"]],
        highMat: ["1 d6", ["pl 0", "1 d8 - 1 1"], ["pl 0", "2 d8 - 1 2"], ["pl 1", "1 d4"], ["pl 1", "1 d4 + 1"], ["ot 1", "1"], ["ot 1", "2"]],
        lowHunt: ["1 d4", ["mons 0", "1 d4 - 1 1"], ["mons 1", "1 d4 - 1 1"], ["mons 2", "1"], ["mons 3", "1 d2"]],
        highHunt: ["1 d4", ["mons 0", "1 d4 - 1 1"], ["mons 1", "1 d4 - 1 1"], ["mons 2", "1"], ["mons 3", "1 d2"]],
        fish: ["1 d4", ["fi 0", "DC 12"], ["fi 0", "DC 12"], ["fi 1", "DC 14"], ["fi 2", "DC 18"]]
    }
}

//encounter array defining: type, image, modifiers, extra array
//matsEnc = plants, me = meat, fi = fish, ot = others
//mons = Monster name, Monster image, drops, drop chance(1 = 100% 0.1 = 10%, etc), drops, drop chance, etc
//mats: material name, "dice amount/flat number, dice type (ex. d20), modifiers, modifier numbers, minimum roll"
//note for later, monsters appear, then press button after defeated, then loot appears
// x in dice means roll several times