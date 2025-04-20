export default function displayEndTime(timeStamp) {
    const end = new Date(timeStamp) // 3 minutes from now
    const hour = end.getHours();
    const minutes = end.getMinutes();
    const formattedEndTime = `${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}`;
    return `Ramen ready at: ${formattedEndTime}`;
}