export interface IPortal {
  id: number,
  name: string,
  presenceSensor: string,
  status: boolean,
  garden: {
    id: string
  }
}

export interface IDataPortal {
  data: IPortal[]
}

// Ngx-filter
export interface IPortalFilter {
  name: string
}