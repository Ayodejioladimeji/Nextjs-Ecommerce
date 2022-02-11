import { useContext } from 'react';
import { Context } from './../store/Context';
import Loading from './Loading';
import Toast from './Toast';

const Notify = () => {
  const [state, dispatch] = useContext(Context);
  const { notify } = state;

  console.log(notify);
  return (
    <>
      {notify.loading && <Loading />}
      {notify.error && (
        <Toast
          msg={{ msg: notify.error, title: 'Error' }}
          handleShow={() => dispatch({ type: 'NOTIFY', payload: {} })}
          bgColor='danger'
        />
      )}
      {notify.success && (
        <Toast
          msg={{ msg: notify.success, title: 'Success' }}
          handleShow={() => dispatch({ type: 'NOTIFY', payload: {} })}
          bgColor='success'
        />
      )}
    </>
  );
};

export default Notify;
