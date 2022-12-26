export interface IGarden {
  id: number,
  name: string,
  user: {
    id: string,
    pseudo: string
  }
}
export interface ISingleGarden {
  data: IGarden
}
export interface IDataGarden {
  data: IGarden[]
}

// Ngx-filter
export interface IGardenFilter {
  name: string
}