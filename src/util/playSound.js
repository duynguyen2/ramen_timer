export default function playSound() {
    const audio = new Audio('/path/to/sound.mp3'); // Replace with your sound file path
    audio.play().catch((error) => {
        console.error('Error playing sound:', error);
    });
}