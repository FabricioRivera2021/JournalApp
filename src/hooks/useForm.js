/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from "react";

/* eslint-disable no-undef */

export const useForm = (initialForm = {}, formValidations = {}) => {//por defecto el form es un objeto

    const [formState, setFormState] = useState(initialForm);

    /*Validacion personalizada */
    const [formValidation, setFormValidation] = useState({})

    useEffect(() => {

      createValidators();

    }, [formState])
    
    const isFormValid = useMemo( () => {
      for (const item of Object.keys(formValidation)) {
        if (formValidation[item] !== null) return false;
      }

      return true;
    }, [formValidation])
  
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

    /*Validacion personalizada */
    const createValidators = () => {

      const formCheckedValues = {}

      for (const formField of Object.keys(formValidations)) {
        const [ fn, errorMessage ] = formValidations[formField];

        formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
        formCheckedValues[`confirmPassValid`] = (formState.password === formState.confirmPass) ? null : 'Las contraseñas deben ser iguales';
      }
      // console.log(formCheckedValues)
      setFormValidation(formCheckedValues);
    }

  
    return {
      ...formState,
      formState,
      onInputChange,
      onResetForm,

      ...formValidation,
      isFormValid
    };
  };