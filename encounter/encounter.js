import { areaTables } from "/areaTables.js"

window.onload = init;
function init() {

    let encounterCount = 0
    let explorationXP = 0
    let scourgePoints = 0

    let currentArea = "erimera"

    let exploreButtAvailable = true
    let tpButtAvailable = false
    let continueButtonAvailable = false
    let tpButtonYes = false
    let rewardButtAvailable = false 
    let exploreEndButtAvailable = false

    let dataStore = []
    // dataStore stores 0. type of action, 1. item/monster, 2. amount of item/monster, 3. if time point is used
    let inventoryTemp = []
    let totalLoot = []

    const encounterCountText = document.getElementById("EncounterCount")
    const explorationXPText = document.getElementById("ExplorationXP")
    const scourgePointsText = document.getElementById("ScourgePoints")
    const currentEncounterText = document.getElementById("CurrentEncounter")

    const exploreButton = document.getElementById("exploreButton")
    const continueButton = document.getElementById("continueButton")
    const tpYesButton = document.getElementById("tpYesButton")
    const tpNoButton = document.getElementById("tpNoButton")
    const huntDoneButton = document.getElementById("huntDoneButton")
    const exploreEndButton = document.getElementById("exploreEndButton")


    exploreButton.addEventListener("click", function () {
        console.log("explore button pressed")
        if (exploreButtAvailable === true) {
            actionExplore()
        }
    })

    continueButton.addEventListener("click", function () {
        console.log("continue button pressed")
        if (continueButtonAvailable === true) {
            actionExploreThree()
        }
    })

    tpYesButton.addEventListener("click", function () {
        console.log("is being pressed allight")
        if (tpButtAvailable === false) {
            return
        }
        tpButtonYes = true
        console.log("yes!")
        tpButtAvailable = true
        actionExploreTwo()
    })

    tpNoButton.addEventListener("click", function () {
        if (tpButtAvailable === false) {
            return
        }
        tpButtonYes = false
        console.log("no!")
        tpButtAvailable = true
        actionExploreTwo()
    })

    huntDoneButton.addEventListener("click", function () {
        if (rewardButtAvailable === false) {
            return
        }
        actionExploreThree()
    })

    exploreEndButton.addEventListener("click", function () {
        if (exploreEndButtAvailable === false) {
            return
        }
        actionExploreEnd()
    })

    //rollDice("2 d100 + 4")
    //actionExplore()

    function actionExplore() {
        if (exploreButtAvailable === false) {
            console.log("cant do this atm. go do the other stuff first")
        }
        encounterCount = encounterCount + 1
        if (encounterCount > 14) {
            //do an end function. or something
            
        }
        encounterCountText.innerHTML = encounterCount
        exploreButtAvailable = false
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
                dataStore[3] = "tp"
                console.log(dataStore)
                console.log("ok so this is alright")
                tpButtAvailable = true
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
        if (tpButtonYes === "n") {
            actionExploreEnd()
            return
        }
        if (dataStore[0] === "hunt") {
            rewardButtAvailable = true
            console.log("A TEST OF YOUR REFLEXES")
        }
        //so this is where the rest of the stuff goes but its mostly visual here
    }
    //spaghetti code my beloved (below)
    function actionExploreThree() {
        if (rewardButtAvailable === true) {
            rewardButtAvailable === false
            let rewardDisplay
            let tempLoot = 0
            if (dataStore[0] === "hunt") {
                for (let i = 0; i < dataStore[2]; i++) {
                    for (let ii = 0; ii < 2; ii++) {
                        if (dataStore[1][3] < RNG(100)) {
                        tempLoot = tempLoot + 1;
                        console.log(`temploot on the ${ii}th iteration: ${tempLoot}`)
                            }
                } 
                    if (tempLoot < 1) {
                    console.log("bad rolls...")
                    tempLoot = 1
                    }
                console.log(`templootinrewardbutt: ${tempLoot}`)
                rewardDisplay = invAddMons(tempLoot)
            }}
             
            exploreEndButtAvailable = true
            console.log(`reward display!! ${rewardDisplay}`)
            console.log(`but did the inventory- ${inventoryTemp}`)
            ///atp just display all the loot collected and whatnot
        }
    }

    function actionExploreEnd() {
        console.log("explore ending...")
        if (exploreEndButtAvailable === true) {
            dataStore = []
            exploreEndButtAvailable = false
            exploreButtAvailable = true;
            //reset all explore variables and return back to main layout
        }
    }

    function expeditionEnd() {
        //display all loot and take back to main page or something. idk
        console.log("Expedition finished! go home lesbo")
    }

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
    

    function invAddMons(drops) {
        console.log(`is this even DROPS ${drops}`)
        let loot = []
                let invAdd = false
                let lootAdd = false
                console.log("please work")
                for (let ii = 0; ii < inventoryTemp.length; ii++) {
                    console.log("if this doesnt show thenits not working")
                    console.log(`loop: ${ii}`)
                    console.log(`data store: ${dataStore}`)
                    if (inventoryTemp[ii][0] === dataStore[1][0]) {
                        console.log("Inventory is same")
                        console.log(`temploot is ${drops}`)
                        inventoryTemp[ii][1] = inventoryTemp[ii][1] + parseInt(drops)
                        invAdd = true
                        break
                    }}
                
                if (invAdd === false) {
                    inventoryTemp.push([dataStore[1][0], drops])
                    console.log("push inv " + inventoryTemp)
                }
                
                for (let iii = 0; iii < loot.length; iii++) {
                    if (loot[iii][0] === dataStore[1][0]) {
                        console.log("loot is same")
                        loot[iii][1] = loot[iii][1] + parseInt(drops)
                        lootAdd = true
                        break
                    }}
                
                if (lootAdd === false) {
                loot.push([dataStore[1][0], drops]) 
                console.log("push loot " + loot)               
            }
            console.log(`inventory: ${inventoryTemp}`)
            console.log(`loot: ${loot}`)
            return loot
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

}
