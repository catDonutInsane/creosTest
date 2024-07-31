export interface DesignerType<T> {
    count: T
    next: any
    previous: string
    results: DesignerResultType[]
  }
  
  export interface DesignerResultType {
    avatar: string
    username: string
    email: string
    thumbnails: Thumbnails
    issues: Issue[]
  }
  
  export interface Thumbnails {
    avatar: string
    avatar_2x: string
    avatar_webp: string
    avatar_webp_2x: string
  }
  
  export interface Issue {
    id: number
    key: string
    date_created: string
    date_started_by_designer: string
    date_finished_by_designer: string
    status: string
  }