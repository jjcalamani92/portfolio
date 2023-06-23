import { Site } from "../interfaces/site";
import { uid, url, type, v } from "../utils";

export async function getSiteById():Promise<Site> {
  const res = await fetch(`${url}/api/${v}/${type}/query/sites/${uid}`, {next: {revalidate: 60}});
  return res.json();
}
export async function getSiteByIdLogo() {
  const res = await fetch(`${url}/api/${v}/${type}/query/sites/${uid}`, {cache: 'no-cache'});
  // console.log('res', res)
  return await res.text();
}
