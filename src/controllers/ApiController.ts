import { RoutesModel, StationModel, Stations } from '@/models/Models'
import { type AxiosInstance } from 'axios'
import axios from 'axios'
import { Logger } from '@/controllers/Logger'

export class ApiController {
  public client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:8080',
      timeout: 1000

    })
  }

  public async fetchStations(query: string): Promise<Stations> {
    let response: Stations = new Stations([]);
    let requestUrl = '/stations'
    await this.client
      .get<Stations>(requestUrl, {
        params: { query: query }
      })
      .then((r) => {
        response = r.data;
        console.log(`Got Response: ${JSON.stringify(response)}`)
      }).catch((error) => {
        Logger.RegisterRequestError(error.message, this.client.getUri()+requestUrl, {query:query})
      })
    console.log(response)
    return response


  }

  public async stations(): Promise<Stations> {
    return this.client.get<Stations>('/stations/all', {}).then((r) => {
      return r.data
    })
  }

  public async fetchRoutes(start: number, end: number): Promise<RoutesModel> {
    let routes: RoutesModel = new RoutesModel([[]])
    let requestUrl = '/route'
    await this.client.post<RoutesModel>(requestUrl, { stations: [start, end] }).then((r) => {
      routes =  r.data
    }).catch((error) => {
      Logger.RegisterRequestError(error.message, this.client.getUri()+requestUrl, {stations: [start, end]} )
    })

    return routes
  }

  public async getStationByName(name: string): Promise<StationModel> {
    let stations: Stations = new Stations([]);
    try{
      stations = await this.fetchStations(name)
    }catch(error){
      Logger.RegisterLog(`Somethin went wrong while getting stations from ${name}.\n\n${error}`)
    }
    console.log(`Request station by name: ${JSON.stringify(stations)}`)
    if (stations.stations.length > 0) {
      return stations.stations[0]
    } else {
      throw new Error('Query is not precise enough!')
    }
  }
}
