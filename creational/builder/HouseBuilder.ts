interface HousePlan {
    setFoundation(foundation: string): void;
    setStructure(structure: string): void;
    setRoof(roof: string): void;
    setInterior(interior: string): void;
}

class House implements HousePlan {
    foundation!: string;
    structure!: string;
    roof!: string;
    interior!: string;

    setFoundation(foundation: string): void {
        this.foundation = foundation;
    }

    setStructure(structure: string): void {
        this.structure = structure;
    }

    setRoof(roof: string): void {
        this.roof = roof;
    }

    setInterior(interior: string): void {
        this.interior = interior;
    }
}

export abstract class HouseBuilder {
    protected house: House = new House();

    abstract buildFoundation(): void;
    abstract buildStructure(): void;
    abstract buildRoof(): void;
    abstract buildInterior(): void;

    getHouse(): House {
        return this.house;
    }
}

export class IglooHouseBuilder extends HouseBuilder {
    buildFoundation(): void {
        this.house.setFoundation("Ice blocks");
    }

    buildStructure(): void {
        this.house.setStructure("Ice walls");
    }

    buildRoof(): void {
        this.house.setRoof("Ice dome");
    }

    buildInterior(): void {
        this.house.setInterior("Ice carvings");
    }
}
