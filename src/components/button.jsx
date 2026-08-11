function Button ({name, children}) {
  return (
    <button className={name}>{children}</button>
  );
};

function RadioButton ({name}) {
    return <button style={{margin: '10px'}} className={name}>RadioButton</button>
}

export default Button;