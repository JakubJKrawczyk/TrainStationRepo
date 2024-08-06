import { type RoutesModel, StationModel } from '@/models/Models'
import { reactive } from 'vue'
import { ApiController } from '@/controllers/ApiController'

let firstGroup = "#1b1bb8"
let secondGroup = "#4747d6"
let thirdGroup = "#ba1e1e"
let fourthGroup = "#dc4e1c"
let fifthGroup = "#100f0f"
let sixthGroup = "#198e19"
let seventhGroup = "#25b4bc"
type StationColor = {
  name: string
  color: string
  border: string
}
export class GlobalConst {
  static Routes: RoutesModel
  static DiscriminantsLegend: { [key: string]: StationColor } = {
    BST: { name: 'bocznica stacyjna', color: firstGroup, border: "none"}, // Red-orange
    BSZ: { name: 'bocznica szlakowa', color: firstGroup , border: "none"}, // Green
    L: { name: 'ogólnodostępna bocznica szlakowa', color: firstGroup , border: "none"}, // Blue
    LPO: { name: 'ogólnodostępna bocznica szlakowa i przystanek osobowy', color: firstGroup , border: "dotted"}, // Pink
    PBSP: { name: 'posterunek bocznicowy szlakowy i przystanek osobowy', color: firstGroup , border: "dotted"}, // Light Blue
    PBST: { name: 'posterunek bocznicowy stacyjny', color: firstGroup , border: "none"}, // Magenta
    PBSZ: { name: 'posterunek bocznicowy szlakowy', color: firstGroup , border: "none"}, // Sky Blue
    M: { name: 'mijanka', color: secondGroup , border: "none"}, // Yellow
    ML: { name: 'mijanka i ładownia', color: secondGroup , border: "solid"}, // Red
    MLP: { name: 'mijanka, ładownia i przystanek osobowy', color: secondGroup , border: "dotted"}, // Cyan
    MPO: { name: 'mijanka i przystanek osobowy', color: secondGroup , border: "dotted"}, // Purple
    ODGS: { name: 'posterunek odgałęźny i przystanek służbowy', color: thirdGroup , border: "dotted"}, // Light Green
    PGL: { name: 'posterunek odgałęźny i ładownia', color: thirdGroup , border: "solid"}, // Lime Green
    PGLP: { name: 'posterunek odgałęźny, przystanek osobowy i ładownia', color: thirdGroup , border: "dotted"}, // Deep Orange
    PODG: { name: 'posterunek odgałęźny', color: thirdGroup , border: "none"}, // Fuchsia
    POGM: { name: 'posterunek odgałęźny i mijanka', color: thirdGroup , border: "none"}, // Bright Green
    POGP: { name: 'przystanek osobowy i posterunek odgałęźny', color: thirdGroup , border: "none"}, // Deep Pink
    ODST: { name: 'posterunek odstępowy', color: fourthGroup , border: "none"}, // Orange
    PODS: { name: 'przystanek osobowy i posterunek odstępowy', color: fourthGroup , border: "none"}, // Dark Purple
    PGR: { name: 'przejście graniczne', color: fifthGroup , border: "none"}, // Deep Purple
    STTH: { name: 'stacja techniczna', color: fifthGroup , border: "none"}, // Light Cyan
    PP: { name: 'punkt przeładunkowy', color: fifthGroup , border: "solid"}, // Vivid Purple
    ST: { name: 'stacja', color: sixthGroup , border: "none"}, // Red-orange
    PK: { name: 'przystanek osobowy w kolejowej komunikacji autobusowej', color: seventhGroup , border: "none"}, // Light Orange
    PO: { name: 'przystanek osobowy publiczny', color: seventhGroup , border: "none"}, // Aquamarine
    POGT: { name: 'przystanek osobowy i grupa torów towarowych', color: seventhGroup , border: "dotted"} // Bright Light Green
  }

  static stationDiscriminant: { [key: string]: string } = {
    init: 'ha'
  }
}
