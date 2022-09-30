import Header from "./Header";
import Search from "./SearchTab";
import EmployeeList from "./EmployeeList";

export default function Home() {
  return (
    <>
      <Header title="Employees" />
      <Search />
      <EmployeeList />
    </>
  );
}
