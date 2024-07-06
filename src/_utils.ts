const interpolate = (value: number, min: number, max: number) => {
    return (value - min) / (max - min);
}

const toHex = (value: number) => {
    const hex = Math.round(value).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

// Returns an array with the same order of elements but as hex colors from green (lowest number) to red (highest number)
export const numberToHexColor = (numbers: number[]) => {
    // Find the min and max values in the array
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    // Generate the hex color for each number
    return numbers.map(num => {
        const normalized = interpolate(num, min, max);
        const red = toHex(255 * normalized);
        const green = toHex(255 * (1 - normalized));
        return `#${red}${green}00`;
    });
}

export const areaByDiameter = (diameter: number) => {
    const radius = diameter / 2;
    return Math.PI * radius * radius
}

export const calculatePricePerCm2ByDiameter = (diameter: number, price: number) => {
    return price / areaByDiameter(diameter);
};
