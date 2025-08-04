import "./stats.modules.scss";

interface StatsProps {
  icon: string;
  title: string;
  value: number;
}

const Stats = ({ icon, title, value }: StatsProps) => {
  return (
    <div className="stats">
      <img className="icon" src={icon} alt={title} />
      <p className="title">{title}</p>
      <h1 className="value">{value}</h1>
    </div>
  );
};

export default Stats;
