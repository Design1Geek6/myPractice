class Zombie{
    constructor(power, weekness){
    this.power = power
    this.weekness = weekness
    }
}

class ZombieAttribs{
    constructor(undead, noPain, canRun){
        this.undead = undead
        this.noPain = noPain
        this.canRun = canRun
    }
    attrib1(undead){
        this.undead = undead
        return 'Being undead allows zombies to survive most fatal wounds. '
    }
    attrib2(){
        this.noPain = !this.noPain
        return this.noPain + ', zombies feel no pain, which allows them to get close enough to bite you. '
    }
    attrib3(){ 
        this.canRun = !this.canRun
        return this.canRun + ' Zombies can\'t run.'
    }
}

class Power extends ZombieAttribs{
    constructor(undead, noPain, toxicBite){
        super(undead, noPain)
        this.toxicBite = toxicBite
    }
    attrib4(){
        return this.toxicBite = 'a zombie\'s bite is toxic and can infect a human killing them and changeing them into a zombie.'
    }
}

class Weekness extends ZombieAttribs{
    constructor(noPain, canRun, eatsBrains){
        super(noPain, canRun)
        this.eatsBrains = eatsBrains
    }
    attrib5(){
        this.eatsBrains = !this.eatsBrains
        return this.eatsBrains + ', they do eat brains but that hunger is what leads them into traps.'
    }
}

const zombieApp = new Zombie(new Power(false), new Weekness(true))

console.log(zombieApp.power.attrib1(), zombieApp.power.attrib2(), zombieApp.power.attrib4(), zombieApp.weekness.attrib2(), 'Can zombies run? ', zombieApp.weekness.attrib3(),'Also', zombieApp.weekness.attrib5() )