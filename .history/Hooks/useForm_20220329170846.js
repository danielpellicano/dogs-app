import React, { useState } from 'react'

const useForm = () => {
    const [value, setValue] = useState();
  return  {
    value,
    setValue,
  }
}

export default useForm
