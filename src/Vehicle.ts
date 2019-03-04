export interface IVehicle {
    hasMotor: boolean;
    type: string;
    maxSpeed: number;
    isMoving: boolean;
    year: number;
    move(): void;
    listProperties(): void;
   
}

