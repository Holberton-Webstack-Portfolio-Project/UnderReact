import payload from '../assets/payload.json';

/**
 * returns the full year
 */
export const getFullYear = () => new Date().getFullYear();

/**
 * gets the topic object for a specified id (currently gets it from a json file)
 */
export function getTopic (id) {
    if (id === "" || id === undefined) {
        return payload[0];
    }
    const x = payload.filter(y => y.id === id);
    return x[0];
}
