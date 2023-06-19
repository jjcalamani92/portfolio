import { Page } from "../interfaces/page";
import { Paths } from "../interfaces/paths";

export const getType = (pages: Page[]) => {
  
  const names = pages?.map(data => data.data.type)
  const nombresAEliminar: string[] = ['category', 'blog', 'product'];
  return names?.filter(data => !nombresAEliminar.includes(data))
}

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};



export const getPaths = (props: Paths) => {
  // console.log('props', props)
  const array = Object.values(props)
  return array.join('/')
}

export function capitalizar(palabras: string) {
  return palabras
    .split(' ')
    .map((palabra) => palabra[0].toUpperCase() + palabra.substring(1))
    .join(' ');
}

export function slug(str: string) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[\u002F]/g, '')
    .replace(/-/g, ' ')
    .normalize('NFD')
    .replace(/[\u003F]/g, '')
    .replace(/[\u0060]/g, '')
    .replace(/[\u2019]/g, '')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/-/g, '')
    .replace(/:/g, '')
    .replace(/[|]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/ /g, '-');
}


