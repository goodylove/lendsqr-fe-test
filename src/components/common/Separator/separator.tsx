import "./separator.modules.scss";
const Separator = ({
  orientation,
}: {
  orientation?: "horizontal" | "vertical";
}) => {
  return <div className={`separator__div ${orientation}`} />;
};

export default Separator;
