const Checkout = (props) => {
  return (
    <div className="mt-5 md:col-span-2 md:mt-0">
      <h1 className="px-6 text-2xl underline decoration-2 decoration-secondary-lighter underline-offset-8">
      Where and to who will we deliver this cart?
      </h1>
      <form action="#" method="POST">
        <div>
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first-name" className="block text-base font-medium leading-6 text-gray-900">
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary-main sm:text-sm sm:leading-6"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="last-name" className="block text-base font-medium leading-6 text-gray-900">
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary-main sm:text-sm sm:leading-6"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="email-address" className="block text-base font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary-main sm:text-sm sm:leading-6"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="street-address" className="block text-base font-medium leading-6 text-gray-900">
                  Street address
                </label>
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary-main sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-3xl bg-secondary-main py-1 px-5 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              onClick={props.onSave}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;