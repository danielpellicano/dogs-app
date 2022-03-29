import React, { useState } from 'react'

const types = {
  email: {
    regex:  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: 'Preencha um email válido',
  }
}

const useForm = (type) => {
    const [value, setValue] = useState();
    const [error, setError] = useState(''); 

    function validate(value) {
      if(type === false ) return true;
      if(value.lenght === 0) {
        setError('Preencha um valor');
        return false;
      }
    }

    function onChange({target}) {
        setValue(target.value)
    }

  return  {
    value,
    setValue,
    onChange,
  }
}

export default useForm
