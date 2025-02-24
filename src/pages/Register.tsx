/**
 * Node Modules
 */
import { Link, Form } from 'react-router-dom';

/**
 * Custom Modules
 */
import { logoLight, logoDark } from '../assets/assets';

/**
 * Components
 */
import PageTitle from '../Components/PageTitle';
import TextField from '../Components/TextField';

const Register = () => {
  return (
    <>
      <PageTitle title='Create an account' />
      <div className=''>
        <div className=''>
          <Link to='/login'>
            <img
              src={logoLight}
              alt='Zephyra logo'
              width={133}
              height={24}
              className=''
            />
            <img
              src={logoDark}
              alt='Zephyra logo'
              width={133}
              height={24}
              className=''
            />
          </Link>
          <div className=''>
            <h2 className=''>Create an Account</h2>
            <p className=''>Register Today</p>
            <Form
              method='POST'
              className=''
            >
              <TextField />
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
