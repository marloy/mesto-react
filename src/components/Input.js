function Input({handleChange, ...rest}) {
  return (
    <input 
      onChange={event => handleChange(event.target.value)}
      {...rest}
    />
  )
}

export default Input;