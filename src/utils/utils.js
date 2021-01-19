import payload from '../assets/payload.json';

export const getFullYear = () => new Date().getFullYear();

export function getTopic (id) {
    if (id === "" || id === undefined) {
        return payload[0];
    }
    const x = payload.filter(y => y.id === id);
    return x[0];
}
