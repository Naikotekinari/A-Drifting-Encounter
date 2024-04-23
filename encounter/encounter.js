import { areaTables } from "/areaTables.js"

let encounterCount = 0
let explorationXP = 0
let scourgePoints = 0
let currentEncounter = ""
let currentArea = "erimera"

window.onload = init;
function init() {
    const encounterCountText = document.getElementById("EncounterCount")
    const explorationXPText = document.getElementById("ExplorationXP")
    const scourgePointsText = document.getElementById("ScourgePoints")
    const currentEncounterText = document.getElementById("CurrentEncounter")

    //rollDice("2 d100 + 4")
    actionExplore()

    function actionExplore() {
        let encNum = rollDice(areaTables[currentArea].encounters[0])
        let encoun = areaTables[currentArea].encounters[encNum]
        encoun = "highMat"
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
        console.log(`result of dice is ${result}`)
        return result
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
    }

    function RNG(maxNum) {
        let num = Math.floor(Math.random() * maxNum + 1);
        console.log(`the number was ${num}`);
        return num;
    }


