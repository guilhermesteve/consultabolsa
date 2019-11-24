import { useState, useContext } from "react";

export default Input = props => {
  const [props, setProps] = useState({});

  return (
    <div className="form-group">
      <label className={labelClass} htmlFor={name}>
        {label}
      </label>
      <input
        autoFocus
        {...rest}
        // value={value}
        // onChange={onChange}
        // type={type}
        //ref={this.username}
        id={name}
        name={name}
        className={customClass}
        dir={dir}
      />
      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

// const Input = ({
//   name,
//   label,
//   labelClass,
//   errors,
//   customClass,
//   dir,
//   ...rest
// }) => {
//   return (
//     <div className="form-group">
//       <label className={labelClass} htmlFor={name}>
//         {label}
//       </label>
//       <input
//         autoFocus
//         {...rest}
//         // value={value}
//         // onChange={onChange}
//         // type={type}
//         //ref={this.username}
//         id={name}
//         name={name}
//         className={customClass}
//         dir={dir}
//       />
//       {errors && <div className="alert alert-danger">{errors}</div>}
//     </div>
//   );
// };

// export default Input;
