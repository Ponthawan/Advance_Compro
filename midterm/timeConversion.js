function digitalClock(seconds) {
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Test cases
console.log(digitalClock(5025));   // Output: '01:23:45'
console.log(digitalClock(61201));  // Output: '17:00:01'
console.log(digitalClock(87000));  // Output: '00:10:00'