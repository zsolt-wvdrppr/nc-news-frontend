export const formatDate = (dateStr: string) => {
  if (!dateStr) return;

  const dayLookup = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const monthLookup = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(dateStr);
  const output = `
  ${dayLookup[date.getDay()]},
  ${monthLookup[date.getMonth()]}. 
  ${date.getFullYear()}.`;

  return output.toString();
};
