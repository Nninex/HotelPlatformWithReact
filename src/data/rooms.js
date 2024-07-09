import deluxeRoomImage from './images/deluxe-room.jpg';
import singleRoomImage from './images/single-room.jpg';
import doubleRoomImage from './images/double-room.jpg';
import suiteRoomImage from './images/suite-room.jpg';

export const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    type: "Deluxe",
    description: "A luxurious room with a stunning view of the city.",
    price: 500,
    image: deluxeRoomImage,
  },
  {
    id: 2,
    name: "Single Room",
    type: "Single",
    description: "A comfortable room with all the basic amenities, for one person.",
    price: 100,
    image: singleRoomImage,
  },
  {
    id: 3,
    name: "Double Room",
    type: "Double",
    description: "A comfortable room for two people.",
    price: 200,
    image: doubleRoomImage,
  },
  {
    id: 4,
    name: "Suite",
    type: "Suite",
    description: "A luxurious suite with all amenities and separate living area.",
    price: 300,
    image: suiteRoomImage,
  },
];

export default rooms;
