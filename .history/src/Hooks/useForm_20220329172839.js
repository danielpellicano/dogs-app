import React, { useState } from 'react'

const validao = {
  email: {
    regex:  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: 'Preencha um email válido',
  }
}

const useForm = () => {
    const [value, setValue] = useState();

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
