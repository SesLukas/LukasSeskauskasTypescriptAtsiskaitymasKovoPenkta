"use strict";
class Potion {
    constructor(color, volume) {
        this.color = color;
        this.volume = volume;
    }
    mix(potion) {
        const totalVolume = this.volume + potion.volume;
        const newColor = [
            Math.round((this.color[0] * this.volume + potion.color[0] * potion.volume) / totalVolume),
            Math.round((this.color[1] * this.volume + potion.color[1] * potion.volume) / totalVolume),
            Math.round((this.color[2] * this.volume + potion.color[2] * potion.volume) / totalVolume)
        ];
        return new Potion(newColor, totalVolume);
    }
}
const felixFelicis = new Potion([255, 255, 255], 7);
const polyjuice = new Potion([51, 102, 51], 12);
const newPotion = felixFelicis.mix(polyjuice);
