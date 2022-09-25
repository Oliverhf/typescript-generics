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
var bigRooms = getBigRooms(conferenceRoom_1.conferenceRoomData, 20);
console.log(bigRooms);
// function shortenArray<T>(data: Array<T>, amountToShorten: number): Array<T> {
//     return data.splice(amountToShorten, data.length);
// }
// let stringArray: string[] = ['Visual Basic', 'C++', 'TypeScript', 'JavaScript'];
// let fewerLanguages = shortenArray(stringArray,2);
// console.log(fewerLanguages);
