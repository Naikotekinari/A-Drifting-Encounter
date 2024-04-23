import { areaTables } from "/areaTables.js"

window.onload = init;
function init() {

    let encounterCount = 0
    let explorationXP = 0
    let scourgePoints = 0
    let currentEncounter = ""
    let currentArea = "erimera"
    let tpButtonPressed = false
    let tpButtonAnswer = "Eh?"
    let huntOngoing = false 
    let dataStore = []
    let inventoryTemp = []

    const encounterCountText = document.getElementById("EncounterCount")
    const explorationXPText = document.getElementById("ExplorationXP")
    const scourgePointsText = document.getElementById("ScourgePoints")
    const currentEncounterText = document.getElementById("CurrentEncounter")
    const tpYesButton = document.getElementById("tpYesButton")
    const tpNoButton = document.getElementById("tpNoButton")
    const huntDoneButton = document.getElementById("huntDoneButton")

    tpYesButton.addEventListener("click", function () {
        console.log("is being pressed allight")
        if (tpButtonPressed === true) {
            return
        }
        tpButtonAnswer = "y"
        console.log("yes!")
        tpButtonPressed = true
        actionExploreTwo()
    })

    tpNoButton.addEventListener("click", function () {
        if (tpButtonPressed === true) {
            return
        }
        tpButtonAnswer = "n"
        console.log("no!")
        tpButtonPressed = true
        actionExploreTwo()
    })
    huntDoneButton.addEventListener("click", function () {
        if (huntOngoing === false) {
            return
        }
        actionExploreThree()
    })

    //rollDice("2 d100 + 4")
    actionExplore()

    function actionExplore() {
        tpButtonPressed = false
        let encNum = rollDice(areaTables[currentArea].encounters[0])
        let encoun = areaTables[currentArea].encounters[encNum]
        encoun = "lowHunt"
        switch(encoun) {
            case "scourge":
                console.log("the scourge is coming the scourge is coming the sc")
                scourgePoints = scourgePoints + 1
                break
            case "blank":
                console.log("Nothing's here, its blank...")
                break
            case "lowMat":
                console.log("lowmat")
                let lowMatRoll = rollDice(areaTables[currentArea].lowMat[0])
                let lowMat = areaTables[currentArea].lowMat[lowMatRoll]
                let lowMatItem = lowMat[0]
                lowMatItem = findObject(lowMatItem)
                console.log(`please work please work pl ${lowMatItem}`)
                let lowMatNum = rollDice(lowMat[1])
                console.log(`obtained ${lowMatNum} of ${lowMatItem}`)
                break
            case "midMat":
                console.log("midmat")
                let midMatRoll = rollDice(areaTables[currentArea].midMat[0])
                let midMat = areaTables[currentArea].midMat[midMatRoll]
                let midMatItem = midMat[0]
                console.log(midMatItem)
                midMatItem = findObject(midMatItem)
                console.log(`please work please work pl ${midMatItem}`)
                let midMatNum = rollDice(midMat[1])
                console.log(`obtained ${midMatNum} of ${midMatItem}`)
                break
            case "highMat":
                console.log("highmat")
                let highMatRoll = rollDice(areaTables[currentArea].highMat[0])
                let highMat = areaTables[currentArea].highMat[highMatRoll]
                let highMatItem = highMat[0]
                console.log(highMatItem)
                highMatItem = findObject(highMatItem)
                console.log(`please work please work pl ${highMatItem}`)
                let highMatNum = rollDice(highMat[1])
                console.log(`obtained ${highMatNum} of ${highMatItem}`)
                break
            case "lowHunt":
                console.log("lowHunt")
                let lowHuntRoll = rollDice(areaTables[currentArea].lowHunt[0])
                let lowHunt = areaTables[currentArea].lowHunt[lowHuntRoll]
                let lowHuntItem = lowHunt[0]
                console.log(lowHuntItem)
                lowHuntItem = findObject(lowHuntItem)
                console.log(`please work please work pl ${lowHuntItem}`)
                let lowHuntNum = rollDice(lowHunt[1])
                console.log(`fighting ${lowHuntNum} of ${lowHuntItem[0]}...`)
                // there should be a function here that shows adialogue thing, then function passes something else to thing
                dataStore[0] = "hunt"
                dataStore[1] = lowHuntItem
                dataStore[2] = lowHuntNum
                console.log(dataStore)
                console.log("ok so this is alright")
                break
            case "highHunt":
                console.log("highHunt")
                let highHuntRoll = rollDice(areaTables[currentArea].highHunt[0])
                let highHunt = areaTables[currentArea].highHunt[highHuntRoll]
                let highHuntItem = highHunt[0]
                console.log(highHuntItem)
                highHuntItem = findObject(highHuntItem)
                console.log(`please work please work pl ${highHuntItem}`)
                let highHuntNum = rollDice(highHunt[1])
                console.log(`fighting ${highHuntNum} of ${highHuntItem[0]}...`)
                // there should be a function here that shows adialogue thing, then function passes something else to thing
                break


        }
    }

    function actionExploreTwo() {
        if (tpButtonAnswer === "n") {
            return
        }
        if (dataStore[0] === "hunt") {
            huntOngoing = true
            console.log("A TEST OF YOUR REFLEXES")
        }
        //so this is where the rest of the stuff goes but its mostly visual here
    }
    //spaghetti code my beloved (below)
    function actionExploreThree() {
        if (dataStore[0] === "hunt" && huntOngoing === true) {
            let loot = []
            for (let i = 0; i < dataStore[2]; i++) {
                let tempLoot
                for (let ii = 0; ii < 2; ii++) {
                    if (dataStore[1][3] < RNG(100)) {
                        tempLoot + 1;
                    }
                } 
                if (tempLoot < 1) {
                    tempLoot = 1
                }
                let invAdd = false
                for (let ii = 0; ii < inventoryTemp.length; ii++) {
                    if (inventoryTemp[ii][0] === dataStore[1][2]) {
                        inventoryTemp[ii][1] = inventoryTemp[ii][1] + tempLoot
                        invAdd = true
                        break
                    }
                }
                if (invAdd === false) {
                    inventoryTemp.push(dataStore[1][0])
                }
                let lootAdd = false
                for (let ii = 0; ii < loot.length; ii++) {
                    if (loot[ii][i] === dataStore[1][2]) {
                        loot[ii][1] = loot[ii][1] + tempLoot
                        lootAdd = true
                    }
                }
                if (lootAdd === false) {
                let arrPl = loot.length
                loot[arrPl][0] = dataStore[1]
                loot[arrPl][1] = 1
                console.log(loot)
            }
            console.log(`inventory: ${inventoryTemp}`)
            console.log(`loot: ${loot}`)
            ///atp just display all the loot collected and whatnot
        }
    }}

    function findObject(obj) {
        let objArr = obj.split(" ")
        let objNum
        let objItem
        switch(objArr[0]) {
            case ("pl"):
                console.log("PL PLEASE")
                objNum = parseInt(objArr[1])
                console.log(objNum)
                objItem = areaTables[currentArea].mats.pl
                objItem = objItem[objNum]
                return objItem
            case ("me"):
                console.log("ME PLEASE")
                objNum = parseInt(objArr[1])
                console.log(objNum)
                objItem = areaTables[currentArea].mats.me
                objItem = objItem[objNum]
                return objItem
            case ("fi"):
                console.log("FI PLEASE")
                objNum = parseInt(objArr[1])
                console.log(objNum)
                objItem = areaTables[currentArea].mats.fi
                objItem = objItem[objNum]
                return objItem
            case ("ot"):
                console.log("OT PLEASE")
                objNum = parseInt(objArr[1])
                console.log(objNum)
                objItem = areaTables[currentArea].mats.ot
                objItem = objItem[objNum]
                return objItem
            case ("mons"):
                console.log("MONS PLEASE")
                objNum = parseInt(objArr[1])
                console.log(objNum)
                objItem = areaTables[currentArea].mats.mons
                objItem = objItem[objNum]
                return objItem
        }
    } 
    }

    function rollDice(dStr) {
        const dice = dStr.split(" ")
        console.log(dice)
        if (dice.length < 2) {
            return parseInt(dice[0])
        }
        let result = 0
        
        for (let i = 0; i < dice[0]; i++) {
            switch(dice[1]){
                case "d2":
                    result = result + RNG(2)
                    break;
                case "d4": 
                    result = result + RNG(4)
                    break;
                case "d6":
                    result = result + RNG(6)
                    break;
                case "d8":
                    result = result + RNG(8)
                    break;
                case "d10":
                    result = result + RNG(10)
                    break;
                case "d12":
                    result = result + RNG(12)
                    break;
                case "d20":
                    result = result + RNG(20)
                    break
                case "d100":
                    result = result + RNG(100)
                    break
                default:
                    console.log("this isnt the right fice")
                    break 
            }
        }
        switch(dice[2]) {
            case "+":
                result = result + parseInt(dice[3])
                break
            case "-":
                result = result - parseInt(dice[3])
                break
            case "*":
                result = result * parseInt(dice[3])
                break
            case "/":
                result = parseInt(result / parseInt(dice[3]))
                break
                
        }
        if (dice[4] != null && result < dice[4]) {
            result = dice[4]
            console.log("minimum")
        }
        console.log(`result of dice is ${result}`)
        return result
    }


    function RNG(maxNum) {
        let num = Math.floor(Math.random() * maxNum + 1);
        console.log(`the number was ${num}`);
        return num;
    }


