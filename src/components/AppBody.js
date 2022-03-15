import { useEffect, useState } from 'react';
import { useDispatch, useSelector,shallowEqual} from 'react-redux';
import { Next } from '../actions/semaforoAction';
import { SemaforList } from './SemaforList';
import './SemaforoButton.css';

export const AppBody = () => {

  const [buttonValues, setbuttonValues] = useState(['','','']);
  const [nextCount, setNextCount] = useState(0);
  const { count } = useSelector( state => state.semaforo,shallowEqual);
  const dispatch = useDispatch();  

  const handleNext = (e) =>{
      e.preventDefault();   
      setNextCount(count+1);
      switch(nextCount){
        case 0:
             setbuttonValues(['red','','']);
            break
        case 1:
             setbuttonValues(['','yellow','']);
            break
        case 2:
              setbuttonValues(['','','green']);
              setNextCount(0);
            break
        default:
              setbuttonValues(['','','']); 
      }
  }

  useEffect(()=>{
    dispatch(Next(nextCount,buttonValues));
    
  },[dispatch,nextCount,buttonValues])
  
  return (
    <div>
        <h1>Semaforo</h1>
        <SemaforList/>  
        <button 
            onClick={ handleNext }
            className='cell-button'
        >Next</button>
    </div>
  )
}
