import { getPostFor } from "./workWithBd";

/**
 * Function to query data from a database.
 * @param {string} type 
 * @param {func} funcF 
 * @param {func} funcS 
 */
export default async function prepareData(type, funcF, funcS) {
    const posts = await getPostFor(type);
    funcF(posts);
    funcS(posts);
}

