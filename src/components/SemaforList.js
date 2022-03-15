import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import { SemaforoButton } from './SemaforoButton'

export const SemaforList = () => {
  
  const { valueArray } = useSelector( state => state.semaforo,shallowEqual);
  
  const cells = valueArray.map((value,index)=>{
      return(
          <SemaforoButton
                key= { index }
                value = { value }
          />
      )
  })
  return (
    <div>
        {cells}
    </div>
  )
}
