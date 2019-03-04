import {Car} from './Car';
import {MotorBike} from './MotorBike';

const teslaModel = new Car (true, 'tesla', 200, true, 2001, 3, true, 200);
teslaModel.turnOnAC();
teslaModel.turnOnGPS();
teslaModel.move();
teslaModel.listProperties();
console.log(teslaModel);


const seatModel = new Car (true, 'seat', 250, true, 2019, 5, true, 120);
seatModel.turnOnAC();
seatModel.move();
seatModel.listProperties();
console.log(seatModel);


const yamaha = new MotorBike (true, 'yamaha', 120, true, 2018, 500, true);
yamaha.upGear();
yamaha.downGear();
yamaha.move();
yamaha.listProperties();
console.log(yamaha);


const mochilloCarmena = new MotorBike (true, 'mochilloCarmena', 50, true, 2015, 49, false);
mochilloCarmena.move();
mochilloCarmena.listProperties();
console.log(mochilloCarmena);