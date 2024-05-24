function extractTime(dateString) {
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  return `${hours}: ${minutes}`;
}

//helper function to pad single-digit number with a leading zero
function padZero(number) {
  return number.toString().padStart(2, "0");
}

export default extractTime;
