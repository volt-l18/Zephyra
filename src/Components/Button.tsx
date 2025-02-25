/**
 * Common button
 */
interface ButtonProps {
  classes?: string;
  variant?: 'filled' | 'outlined' | 'text';
  color?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  classes = '',
  variant = 'filled',
  color = 'primary',
  children,
  type = 'button',
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`btn ${variant} ${color} ${classes}`}
      type={type}
      {...rest}
    >
      {children}
      <div className='state-layer'></div>
    </button>
  );
};

export { Button };
