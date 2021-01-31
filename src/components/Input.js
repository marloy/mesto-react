function Input({value, handleChange, ...rest}) {
  return (
    <input 
      value={value}
      onChange={event => handleChange(event.target.value)}
      {...rest}
    />
  )
}

export default Input;