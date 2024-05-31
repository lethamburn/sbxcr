import "./Paragraph.css";
import PropTypes from "prop-types";

const getStyles = (...args) => ["paragraph", ...args].filter(Boolean).join(" ");

const Paragraph = ({ children, variant }) => {
  return <p className={getStyles(variant)}>{children}</p>;
};

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
};

export default Paragraph;
