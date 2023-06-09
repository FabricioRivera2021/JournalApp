import { useState } from "react";

/* eslint-disable no-undef */

export const useForm = (initialForm = {}) => {//por defecto el form es un objeto

    const [formState, setFormState] = useState(initialForm);
  
    const onInputChange = ({ target }) => {
      const { name, value } = target;
      setFormState({
        ...formState,
        [name]: value /*[ name ] hace referencia al name de cada input, es basicamente
                                    para saber de donde esta viniendo ese valor que se cambia,
                                    si del name o del email, o de donde sera */,
      });
    };
  
    const onResetForm = () => {
      setFormState(initialForm)
    }
  
    return {
      ...formState,
      formState,
      onInputChange,
      onResetForm
    };
  };