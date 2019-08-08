
function DiceRoller (sides, quantity) {
    let diceList = [];
    if(quantity > 1) {
        for(let i = 0; i < quantity; i++) {
            diceList.push(Math.floor(Math.random() * sides) + 1);
        }
        let duplicates = diceList.filter((val, i) => diceList.indexOf(val) !== i).sort();
        let unique = diceList.filter((val, i) => diceList.indexOf(val) >= i).sort()
        .map((val, i) => {
            if(!duplicates.includes(val)) {
                return val;
            } else {
                duplicates.push(val);
            }
        }).filter((val, i) => {if(val) return val;})
        let objResult = {
            available: unique,
            spent: duplicates
        };
        return objResult;
    } else {
        return Math.floor(Math.random() * sides) + 1;
    }
}
/*
function DiceRoller (sides, quantity) {
    rollThem(sides, quantity);
}*/

export default DiceRoller;