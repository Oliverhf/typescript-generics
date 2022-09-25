"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var conferenceRoom_1 = require("./models/conferenceRoom");
function getBigRooms(rooms, minSize) {
    var bigRooms = [];
    rooms.forEach(function (r) {
        if (r.capacity > minSize) {
            bigRooms.push(r);
        }
    });
    return bigRooms;
}
var getLargeRooms;
getLargeRooms = getBigRooms;
var largeRooms = getLargeRooms(conferenceRoom_1.conferenceRoomData, 30);
console.log(largeRooms);
function shortenArray(data, amountToShorten) {
    return data.splice(amountToShorten, data.length);
}
var shrinkArray;
shrinkArray = shortenArray;
// let stringArray: string[] = ['Visual Basic', 'C++', 'TypeScript', 'JavaScript'];
// let fewerLanguages = shortenArray(stringArray,2);
// console.log(fewerLanguages);
