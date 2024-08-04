import { type RoutesModel, StationModel } from '@/models/Models'
import { reactive } from 'vue'
import { ApiController } from '@/controllers/ApiController'

type StationColor = {
  name: string
  color: string
}
export class GlobalConst {
  static Routes: RoutesModel
  static DiscriminantsLegend: { [key: string]: StationColor } = {
    BST: { name: 'bocznica stacyjna', color: '#FF5733' }, // Red-orange
    BSZ: { name: 'bocznica szlakowa', color: '#33FF57' }, // Green
    L: { name: 'ogólnodostępna bocznica szlakowa', color: '#3357FF' }, // Blue
    LPO: { name: 'ogólnodostępna bocznica szlakowa i przystanek osobowy', color: '#FF33A1' }, // Pink
    M: { name: 'mijanka', color: '#FFD733' }, // Yellow
    ML: { name: 'mijanka i ładownia', color: '#FF3333' }, // Red
    MLP: { name: 'mijanka, ładownia i przystanek osobowy', color: '#33FFF3' }, // Cyan
    MPO: { name: 'mijanka i przystanek osobowy', color: '#8A33FF' }, // Purple
    ODGS: { name: 'posterunek odgałęźny i przystanek służbowy', color: '#33FF8A' }, // Light Green
    ODST: { name: 'posterunek odstępowy', color: '#FF8A33' }, // Orange
    PBSP: { name: 'posterunek bocznicowy szlakowy i przystanek osobowy', color: '#338AFF' }, // Light Blue
    PBST: { name: 'posterunek bocznicowy stacyjny', color: '#FF33D7' }, // Magenta
    PBSZ: { name: 'posterunek bocznicowy szlakowy', color: '#33D7FF' }, // Sky Blue
    PGL: { name: 'posterunek odgałęźny i ładownia', color: '#8AFF33' }, // Lime Green
    PGLP: { name: 'posterunek odgałęźny, przystanek osobowy i ładownia', color: '#FF9933' }, // Deep Orange
    PGR: { name: 'przejście graniczne', color: '#A133FF' }, // Deep Purple
    PK: { name: 'przystanek osobowy w kolejowej komunikacji autobusowej', color: '#FFA133' }, // Light Orange
    PO: { name: 'przystanek osobowy publiczny', color: '#33FFA1' }, // Aquamarine
    PODG: { name: 'posterunek odgałęźny', color: '#FF33FF' }, // Fuchsia
    PODS: { name: 'przystanek osobowy i posterunek odstępowy', color: '#8A33A1' }, // Dark Purple
    POGM: { name: 'posterunek odgałęźny i mijanka', color: '#33FF33' }, // Bright Green
    POGP: { name: 'przystanek osobowy i posterunek odgałęźny', color: '#FF338A' }, // Deep Pink
    POGT: { name: 'przystanek osobowy i grupa torów towarowych', color: '#33D733' }, // Bright Light Green
    PP: { name: 'punkt przeładunkowy', color: '#D733FF' }, // Vivid Purple
    ST: { name: 'stacja', color: '#FF5733' }, // Red-orange
    STTH: { name: 'stacja techniczna', color: '#33FFD7' } // Light Cyan
  }

  static stationDiscriminant: { [key: string]: string } = {
    init: 'ha'
  }
}
