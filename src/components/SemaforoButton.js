import classNames from 'classnames';


export const SemaforoButton = (props) => {
  
  const buttonClasses = classNames({
    cell: true,
    [`${props.value}`]: true  
  });

  const butttonContentClasses = classNames({
      'cell-content': true,
      populated: true
  });
  return (
    <button className={buttonClasses}>
      <span className={ butttonContentClasses }></span>
    </button>
  )
}
