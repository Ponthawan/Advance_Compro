function isValidIPv4(ip) {
    const ipParts = ip.split('.');
    if (ipParts.length !==4) {
        return false;
    }

    for (const part of ipParts) {
        if (!/^\d{1,3}$/.test(part) || parseInt(part) < 0 || parseInt(part) > 255) {
            return false;
        }
    }
    return true;
}

console.log(isValidIPv4("1.2.3.4"));
console.log(isValidIPv4("1.2.3"));
console.log(isValidIPv4("1.2.3.4.5"));
console.log(isValidIPv4("123.45.67.89"));
console.log(isValidIPv4("123.456.78.90"));
console.log(isValidIPv4("123.045.067.089"));
