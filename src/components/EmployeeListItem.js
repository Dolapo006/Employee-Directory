import EmployeeImg from "./EmployeeImg";

export default function EmployeeListItem({ img, name, number, position }) {
  return (
    <div className="list-item">
      <EmployeeImg img={img} alt={name} />
      <div className="content">
        <h4>{name}</h4>
        <p>{number}</p>
        <p>{position}</p>
      </div>
    </div>
  );
}