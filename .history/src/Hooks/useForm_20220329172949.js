import React, { useState } from 'react'

const types = {
  email: {
    regex:  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: 'Preencha um email válido',
  }
}

const useForm = (type) => {
    const [value, setValue] = useState();

    function validate(value) {
      if(type === false ) return true
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
