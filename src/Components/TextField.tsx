interface TextFieldProps {
  classes?: string;
  helperText?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  fieldClasses?: string;
  type?: string;
  required?: boolean;
  autoFocus?: boolean;
}

const TextField = ({
  type = 'text',
  classes = '',
  helperText,
  label,
  name,
  placeholder = ' ',
  fieldClasses = '',
  required = false,
  autoFocus = false,
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
        type={type}
        className={`text-field ${fieldClasses}`}
        id={name}
        placeholder={placeholder}
        required={required}
        autoFocus={autoFocus}
        {...rest}
      />
      {helperText && <p className='helper-text'>{helperText}</p>}
    </div>
  );
};

export default TextField;
