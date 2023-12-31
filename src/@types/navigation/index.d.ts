import { CarDTO } from "../../dtos/CarDTO";

export type RootStackParamList = {
    Home: undefined;
    CarDetails: { car: CarDTO };
    Scheduling: { car: CarDTO };
    SchedulingDetails: { car: CarDTO, dates: string[] };
    SchedulingComplete: undefined;
    MyCars: undefined;
    // Example: { car: CarDTO } | undefined;
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}