import React, { useState } from "react";
import Joi from "joi-browser";

const useForm = (data, schema) => {
  const [values, setValues] = useState(data);
  //   const [schema, setSchema] = useState({});

  //   const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const [inputs, setInputs] = useState({});

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(values, schema, options);
    console.log(error);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const options = { abortEarly: true };
    const obj = { [name]: value };
    const s = { [name]: schema[name] };
    const { error } = Joi.validate(obj, s, options);

    return error ? error.details[0].message : null;
  };

  const handleChange = ({ currentTarget: input }) => {
    console.log(input);

    const errorMessage = validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    //data[input.name] = input.value;

    const auxValues = { ...values };
    auxValues[input.name] = input.value;
    setValues(auxValues);
  };

  //   handleChange = ({ currentTarget: input }) => {
  //     const errors = { ...this.state.errors };
  //     const errorMessage = this.validateProperty(input);
  //     if (errorMessage) errors[input.name] = errorMessage;
  //     else delete errors[input.name];

  //     const data = { ...this.state.data };

  //     data[input.name] = input.value;

  //     this.setState({ data, errors });
  //   };

  const handleSubmit = callback => event => {
    if (event) {
      event.preventDefault();
    }
    const errors = validate();
    setErrors(errors || {});

    if (errors) return;

    //call the server
    callback();
  };

  return [{ values, errors }, handleChange, handleSubmit];
};

export default useForm;
