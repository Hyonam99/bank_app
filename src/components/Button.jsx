/* eslint-disable react/prop-types */

const Button = ({ btnStyles }) => (
  <button
    type="button"
    className={`${btnStyles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[8px]`}
  >
    Get Started
  </button>
);

export default Button;
