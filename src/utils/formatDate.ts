 const formatDate = (stringDate: string) => {
  const date = new Date(stringDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
}; 

export default formatDate;

// export const handleMonthSelected = (month: string) => {
//   try {
//     if (month !== "") {
//       const parsedMonth = Number(month);
//       return parsedMonth;
//     }
//   } catch (error: unknown) {
//     console.log(error);
//   }
// };

// export const handleYearSelected = (month: string) => {
//   try {
//     const parsedYear = Number(month);
//     return parsedYear;
//   } catch (error: unknown) {
//     console.log(error);
//   }
// };
