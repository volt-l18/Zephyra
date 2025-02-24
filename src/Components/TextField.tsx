interface TextFieldProps {
  classes: string;
  helperText: string;
  label: string;
  name: string;
  placeholder: string;
  fieldClasses: string;
}

const TextField = ({
  classes = '',
  helperText,
  label,
  name,
  placeholder = ' ',
  fieldClasses = '',
  ...rest
}: TextFieldProps) => {
  return (
    <div className={`text-field-warpper ${classes}`}>
      <label
        htmlFor={name}
        className='label-text'
      >
        {label}
      </label>
      <input
        className={`text-field ${fieldClasses}`}
        id={name}
        placeholder={placeholder}
        {...rest}
      />
      {helperText && <p className='helper-text'>{helperText}</p>}
    </div>
  );
};

export default TextField;
