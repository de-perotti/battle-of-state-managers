import React, { useContext } from 'react';
import { NextPage } from 'next';
import {
  context as formContext,
  withFormContext,
} from '../../features/forms/FormContext';
import { useFieldArray, useForm } from 'react-hook-form';
import { PageDashboard, urls } from '../../core/urls';
import { useRouter } from 'next/router';

type PersonalInputs = {
  title: string;
  firstName: string;
  lastName: string;
  socialName: string;
  age: string;
  gender: string;

  emails: Array<{ address: string }>;
  phones: Array<{ number: string }>;
};

const PersonalPage: NextPage = () => {
  const form = useContext(formContext);

  const { handleSubmit, register, errors, control } = useForm<PersonalInputs>({
    defaultValues: { emails: [{ address: '' }], phones: [{ number: '' }] },
  });

  const emailsFieldArray = useFieldArray({
    control,
    name: 'emails',
  });

  const phonesFieldArray = useFieldArray({
    control,
    name: 'phones',
  });

  const router = useRouter();

  return (
    <>
      <h1>Hello From Personal</h1>
      <form
        onSubmit={handleSubmit((data) => {
          form.setPersonal(data);
          void router.push(urls.get(PageDashboard));
        })}
      >
        <div>
          <label>
            <span>Title</span>
            <input name="title" type="text" ref={register} />
          </label>
          {errors.title && errors.title.message}
        </div>

        <div>
          <label>
            <span>First Name</span>
            <input name="firstName" type="text" ref={register} />
          </label>
          {errors.firstName && errors.firstName.message}
        </div>

        <div>
          <label>
            <span>Last Name</span>
            <input name="lastName" type="text" ref={register} />
          </label>
          {errors.lastName && errors.lastName.message}
        </div>

        <div>
          <label>
            <span>Social Name</span>
            <input name="socialName" type="text" ref={register} />
          </label>
          {errors.socialName && errors.socialName.message}
        </div>

        <button
          type="button"
          onClick={() => emailsFieldArray.append({ address: '' })}
        >
          Add Email
        </button>

        {emailsFieldArray.fields.map((field, index) => (
          <div key={field.id}>
            <button
              type="button"
              onClick={() => emailsFieldArray.remove(index)}
            >
              Remove Email
            </button>
            <label>
              <span>Email {index + 1}</span>
              <input
                name={`emails[${index}].address`}
                type="email"
                ref={register({ required: true })}
              />
            </label>
            {errors.emails &&
              errors.emails[index] &&
              errors.emails[index].address && (
                <p>
                  {errors.emails[index].address.message ||
                    errors.emails[index].address.type}
                </p>
              )}
          </div>
        ))}

        <div>
          <label>
            <span>Age</span>
            <input name="age" type="number" ref={register} />
          </label>
          {errors.age && errors.age.message}
        </div>

        <div>
          <label>
            <span>Gender</span>
            <input name="gender" type="text" ref={register} />
          </label>
          {errors.gender && errors.gender.message}
        </div>

        <button
          type="button"
          onClick={() => phonesFieldArray.append({ number: '' })}
        >
          Add Phone
        </button>

        {phonesFieldArray.fields.map((field, index) => (
          <div key={field.id}>
            <button
              type="button"
              onClick={() => phonesFieldArray.remove(index)}
            >
              Remove Phone
            </button>
            <label>
              <span>Phone {index + 1}</span>
              <input
                name={`phones[${index}].number`}
                type="tel"
                ref={register()}
              />
            </label>
            {errors.phones &&
              errors.phones[index] &&
              errors.phones[index].number && (
                <p>
                  {errors.phones[index].number.message ||
                    errors.phones[index].number.type}
                </p>
              )}
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default withFormContext(PersonalPage);
