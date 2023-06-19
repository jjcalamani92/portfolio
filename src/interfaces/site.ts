// import { Page } from "./page.interface"

import { Page } from "./page";
import { Type } from "./pet";

export interface Site {
  _id: string
  data: Data
  url: string
  pages: Page[]
}

interface Data {
  type: string
  html: {
    home: string
  }
  logo: {
    content: string
    type: string
  }
  theme: {
    light: string
    themes: string[]
    lightAndDarkMode: boolean
  }
  components: {
    header: string
    contact: string
    faqs: string
    footer: string
    gridArticle: string
    gridProduct: string
    gridCategory: string
    cardArticle: string
    cardProduct: string
    cardCategory: string
  }
  info: {
    name: string
    description: string;
    website: string;
    icon: string
  },
  // images?: {
  //   icon?: Image
  //   banner?: Image
  //   logo?: Image
  // }
}

export interface Seo {
  title: string;
  href: string;
  description: string;
  image?: Image
}

export interface Image {
  uid?: string
  src?: string;
  alt?: string;
}
export interface ImageInterface {
  uid?: string
  src: string;
  alt: string;
}


export interface DataBase {
  uid: string
  label: string;
  value: string;
}
export interface AdminSite {
  
  privilege: string;
  sid: string;
}





export interface Tags {
  uid: string;
  text: string;
  href:string;
}

export interface Register {
  uid: string;
  change: string;
  updatedAt: Date;
}
export interface UpdateDate {
  createdAt: Date;
  register: Register[];
}




export interface Timestamps {
  created: number;
  updated?: number;
}
export interface SiteForm {
  _id?: string
  title: string;
  domain: string;
  logo: string;
  icon: string;
  imageSrc: string;
  imageAlt: string;
  numberPhone: number;
  address: string;
  location: string;
  description: string;
  type: string;
  client: string;
}
// export interface ChildrenForm {
//   uid?: string
//   name: string;
//   description: string;
//   imageSrc: string;
//   imageAlt: string;
// }
export interface Domain {
  name: string;
  dlt: string;
}


export interface CreateSite {
  name: String
  type: string
  uid: string
}
export interface UpdateSite {
  name: string
  uid: string
}
export interface UpdateSiteInfo {
  name: string
  website: string
  description: string
  uid: string
}
export interface UpdateSiteTheme {
  theme: string
  lightAndDarkMode: boolean
  uid: string
}
export interface UpdateSiteLogo {
  type: string
  content: string
  uid: string
}
export interface UpdateSiteIcon {
  icon: string
  uid: string
}
export interface UpdateSiteDB {
  id:string
  type: string[]
}
export interface ListInput {
  limit: number
  offset: number
}
export interface UpdateSiteImage {
  id:string
  type: string
  images: {
    src: string
    alt: string
  }
  uid: string
}

export interface DeleteManySitesById {
  ids:string[]
}
