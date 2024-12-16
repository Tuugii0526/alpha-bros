export const ClosedDay = ({ closedDay }: { closedDay: string }) => {
  switch (closedDay) {
    case "1":
      return <>Даваа</>;
    case "2":
      return <>Мягмар</>;
    case "3":
      return <>Лхагва</>;
    case "4":
      return <>Пүрэв</>;
    case "5":
      return <>Баасан</>;
    case "6":
      return <>Бямба</>;
    default:
      return <>Ням</>;
  }
};
