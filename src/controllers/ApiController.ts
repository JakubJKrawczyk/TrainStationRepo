import { RoutesModel, StationModel, Stations } from '@/models/Models'
import type { AxiosInstance } from 'axios'
import axios from 'axios'

export class ApiController {
  public client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_APP_API_URL??'http://localhost:5065',
      timeout: 1000
    })
  }

  public async fetchStations(query: string): Promise<Stations> {
    return this.client
      .get<Stations>('/stations', {
        params: { query: query }
      })
      .then((r) => {
        return r.data
      })
  }

  public async stations(): Promise<Stations> {
    return this.client.get<Stations>('/stationsAll', {}).then((r) => {
      return r.data
    })
  }

  public async fetchRoutes(start: number, end: number): Promise<RoutesModel> {
    return this.client.post<RoutesModel>('/route', { stations: [start, end] }).then((r) => {
      return r.data
    })
  }

  public async getStationByName(name: string): Promise<StationModel> {
    const stations = await this.fetchStations(name)
    console.log(`Request station by name: ${JSON.stringify(stations)}`)
    if (stations.stations.length > 0) {
      return stations.stations[0]
    } else {
      throw new Error('Query is not precise enough!')
    }
  }
}
