export const normalizeToInternational = (val: string) => {
    if (val.startsWith('0')) {
        return '+98' + val.slice(1)
    }
    return val
}