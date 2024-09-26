function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun("hike"))

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork("swim"))

function wrapAdjective(description = "*"){
    return function(trait = "special"){
        return `You are ${description}${trait}${description}!`
    }
}
console.log(wrapAdjective("||")())