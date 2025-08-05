import "./userDetailsCard.modules.scss";

interface UserDetailsCardProps {
  label: string;
  value: string;
}

const UserDetailsCard = ({ label, value }: UserDetailsCardProps) => {
  return (
    <div className="user-detail-card">
      <span className="span_text">{label}</span>
      <span className="span_value">{value}</span>
    </div>
  );
};

export default UserDetailsCard;
