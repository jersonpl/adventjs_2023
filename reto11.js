function calculateTime(deliveries = [""]) {
  let result =
    3600 * 7 -
    deliveries.reduce((acc, delivery) => {
      const [hours, minutes, seconds] = delivery.split(":").map(Number);
      return acc + hours * 3600 + minutes * 60 + seconds;
    }, 0);

  const sign = result <= 0 ? "" : "-";
  result = Math.abs(result);
  return (
    sign +
    Math.floor(result / 3600)
      .toFixed(0)
      .padStart(2, "0") +
    `:${Math.floor((result % 3600) / 60)
      .toFixed(0)
      .padStart(2, "0")}:${(result % 60).toFixed(0).padStart(2, "0")}`
  );
}

console.log(calculateTime(["00:10:00", "01:00:00", "03:30:00"]));
// '-02:20:00'

console.log(calculateTime(["02:00:00", "05:00:00", "00:30:00"]));
// '00:30:00'

console.log(calculateTime(["00:45:00", "00:45:00", "00:00:30", "00:00:30"])); // '-05:29:00'
