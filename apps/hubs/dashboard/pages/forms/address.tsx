import React, { useContext, Fragment } from 'react';
import { NextPage } from 'next';
import {
  context as formContext,
  withFormContext,
} from '../../features/forms/FormContext';
import { useFieldArray, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { PageFormPersonal, urls } from '../../core/urls';

type AddressInputs = {
  postalCode: string;
  streetType: string;
  streetName: string;
  houseNumber: string;
  houseComplement: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
};

const defaultValue: AddressInputs = {
  city: '',
  country: '',
  houseComplement: '',
  houseNumber: '',
  neighborhood: '',
  postalCode: '',
  state: '',
  streetName: '',
  streetType: '',
};

const AddressPage: NextPage = () => {
  const form = useContext(formContext);
  const { handleSubmit, register, errors, control, watch } = useForm<{
    addresses: AddressInputs[];
  }>({ defaultValues: { addresses: [defaultValue] } });
  const router = useRouter();
  const addressesFieldArray = useFieldArray({
    control,
    name: 'addresses',
  });

  const onSubmit = (data) => {
    form.setAddress(data);
    void router.push(urls.get(PageFormPersonal));
  };

  return (
    <>
      <h1>Hello From Address</h1>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <button
          type="button"
          onClick={() => addressesFieldArray.append(defaultValue)}
        >
          Add Address
        </button>
        {addressesFieldArray.fields.map((field, index) => (
          <Fragment key={field.id}>
            <button
              type="button"
              onClick={() => addressesFieldArray.remove(index)}
            >
              Remove Address
            </button>

            <div>
              <label>
                <span>Postal Code</span>
                <input
                  name={`addresses[${index}].postalCode`}
                  type="text"
                  ref={register()}
                />
              </label>
              {errors.addresses &&
                errors.addresses[index] &&
                errors.addresses[index].postalCode && (
                  <p>
                    {errors.addresses[index].postalCode.message ||
                      errors.addresses[index].postalCode.type}
                  </p>
                )}
            </div>

            <div>
              <label>
                <span>Street Type</span>
                <input
                  name={`addresses[${index}].streetType`}
                  type="text"
                  ref={register()}
                />
              </label>
              {errors.addresses &&
                errors.addresses[index] &&
                errors.addresses[index].streetType && (
                  <p>
                    {errors.addresses[index].streetType.message ||
                      errors.addresses[index].streetType.type}
                  </p>
                )}
            </div>

            <div>
              <label>
                <span>Street Name</span>
                <input
                  name={`addresses[${index}].streetName`}
                  type="text"
                  ref={register()}
                />
              </label>
              {errors.addresses &&
                errors.addresses[index] &&
                errors.addresses[index].streetName && (
                  <p>
                    {errors.addresses[index].streetName.message ||
                      errors.addresses[index].streetName.type}
                  </p>
                )}
            </div>

            <div>
              <label>
                <span>House Number</span>
                <input
                  name={`addresses[${index}].houseNumber`}
                  type="text"
                  ref={register()}
                />
              </label>
              {errors.addresses &&
                errors.addresses[index] &&
                errors.addresses[index].houseNumber && (
                  <p>
                    {errors.addresses[index].houseNumber.message ||
                      errors.addresses[index].houseNumber.type}
                  </p>
                )}
            </div>

            <div>
              <label>
                <span>House Complement</span>
                <input
                  name={`addresses[${index}].houseComplement`}
                  type="text"
                  ref={register()}
                />
              </label>
              {errors.addresses &&
                errors.addresses[index] &&
                errors.addresses[index].houseComplement && (
                  <p>
                    {errors.addresses[index].houseComplement.message ||
                      errors.addresses[index].houseComplement.type}
                  </p>
                )}
            </div>

            <div>
              <label>
                <span>Neighborhood</span>
                <input
                  name={`addresses[${index}].neighborhood`}
                  type="text"
                  ref={register()}
                />
              </label>
              {errors.addresses &&
                errors.addresses[index] &&
                errors.addresses[index].neighborhood && (
                  <p>
                    {errors.addresses[index].neighborhood.message ||
                      errors.addresses[index].neighborhood.type}
                  </p>
                )}
            </div>

            <div>
              <label>
                <span>State</span>
                <input
                  name={`addresses[${index}].state`}
                  type="text"
                  ref={register()}
                />
              </label>
              {errors.addresses &&
                errors.addresses[index] &&
                errors.addresses[index].state && (
                  <p>
                    {errors.addresses[index].state.message ||
                      errors.addresses[index].state.type}
                  </p>
                )}
            </div>
          </Fragment>
        ))}

        <button type="submit">Next</button>
      </form>
    </>
  );
};

export default withFormContext(AddressPage);
