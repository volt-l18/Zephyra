/*
 * Node Modules
 */
import { Link, Form } from 'react-router-dom';

/*
 * Custom Modules
 */
import { logoLight, logoDark } from '../assets/assets';

/*
 * Components
 */
import PageTitle from '../components/PageTitle';
import TextField from '../components/TextField';

const Register = () => {
  return (
    <>
      <PageTitle title='Create an account' />
      <div className=''>
        <div className=''>
          <Link>
            <img
              src={logoLight}
              alt='zephyra logo'
              width={266}
              height={48}
              className=''
            />

            <img
              src={logoDark}
              alt='zephyra logo'
              width={266}
              height={48}
              className=''
            />
          </Link>
          <div className=''>
            <h2 className=''>Create an account</h2>
            <p className=''>Register Today</p>
            <Form
              method='POST'
              className=''
            >
              <TextField
                type='text'
                name='name'
                lable='Full Name'
                placeholder='Full name'
                required={true}
                autoFocus={true}
              />
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
