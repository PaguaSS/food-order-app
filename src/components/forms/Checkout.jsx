import { useState, memo } from "react";

const defaultDeliveryData = {name: '', lastName: '', email: '', address: ''};

const Checkout = ({onSave}) => {
  const [error, setError] = useState('');
  const [deliveryData, setDeliveryData] = useState(defaultDeliveryData);
  const {name, lastName, email, address} = deliveryData;

  const onCheckout = event => {
    event.preventDefault();
    let error = '';

    Object.keys(deliveryData).every(k => {
      if (!deliveryData[k]) {
        error = `Make sure ${k} is not blank`;
        return false;
      }

      return true;
    });

    setError(error);

    if (error.length === 0) {
      onSave({...deliveryData});
    } 
  };

  const handleChange = fieldKey => event => {
    const newDeliveryData = { ...deliveryData, [fieldKey]: event.target.value};
    setDeliveryData(newDeliveryData);
  };

  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      <h1 className="px-6 text-2xl underline decoration-2 decoration-secondary-lighter underline-offset-8">
      Where and to who will we deliver this cart?
      </h1>
      <form method="POST" onSubmit={onCheckout}>
        <div>
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="form-control w-full col-span-6 sm:col-span-3">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input onChange={handleChange('name')} id="first-name" type="text" className="input input-primary w-full max-w-xs" value={name}/>
              </div>

              <div className="form-control w-full col-span-6 sm:col-span-3">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input onChange={handleChange('lastName')} id="last-name" type="text" className="input input-primary w-full max-w-xs" value={lastName}/>
              </div>

              <div className="form-control w-full col-span-6 sm:col-span-4">
                <label className="label">
                  <span className="label-text">Email address</span>
                </label>
                <input onChange={handleChange('email')} id="email" type="email" className="input input-primary w-full max-w-xs" value={email}/>
              </div>

              <div className="form-control col-span-6">
                <label className="label">
                  <span className="label-text">Street address</span>
                </label>
                <textarea onChange={handleChange('address')} id="street-address" className="textarea textarea-primary" value={address}></textarea>
              </div>
            </div>
          </div>
          {error && 
            <div className="alert alert-error">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{error}</span>
            </div>
          }
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="btn w-48 rounded-full"
            >
              Finish order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default memo(Checkout);