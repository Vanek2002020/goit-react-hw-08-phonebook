import PropTypes from "prop-types";

export default function Container({ children, additionalClass }) {
  return <div className={additionalClass}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.any,
  additionalClass: PropTypes.string,
};
