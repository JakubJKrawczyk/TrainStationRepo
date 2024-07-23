export class StationModel{
  public id: number;
  public name: string;
  public discriminant: string;

  constructor(id: number, name: string, discriminant: string){
    this.id = id;
    this.name = name;
    this.discriminant = discriminant;
  }
}

export class RoutesModel{
  public routes: StationModel[][];

  constructor(routes: StationModel[][]){
    if(routes === undefined){
      this.routes = [[]];
    }else{
      this.routes = routes;
    }
  }

}

export class Stations{
  public stations: StationModel[];
  constructor(stations: StationModel[]){
    this.stations = stations;
  }
}