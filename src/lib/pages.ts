import { Page } from "../interfaces/page";
import { uid, url, type, v } from "../utils";

export async function getPagesNavigation( ) {
  const res = await fetch(`${url}/api/${v}/${type}/query/pages/page/navigation?siteId=${uid}`, {cache: 'no-cache'});
  return res.json();
}
// export async function getPagesByParentId( ) {
//   const res = await fetch(`${url}/api/${v}/${type}/query/pages/page/parentId?id=${uid}`,);
//   return res.json();
// }

export async function getPageBySlug(slug: string):Promise<Page> {
  const res = await fetch(`${url}/api/${v}/${type}/query/pages/page/${uid}/${slug}`,);
  return res.json();
}