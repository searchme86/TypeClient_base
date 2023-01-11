import React, { BaseSyntheticEvent } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { GenericOnSubmit } from '../../../../backups/Login/LoginFormType';

import { FormElmContainer } from '../../../assets/styles/Form.style';

function FormElm<
  DataSchema extends Record<string, any>,
  Schema extends z.Schema<any, any>
>({
  schema,
  onSubmit,
  children,
  defaultValues,
}: {
  schema: Schema;
  onSubmit: (data: DataSchema, event?: BaseSyntheticEvent) => void;
  children: any;
  defaultValues?: Record<string, any>;
}) {
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const handleSubmit = methods.handleSubmit;
  // const errors = methods.formState.errors;
  // console.log('여기는 form 에러!!', errors);

  return (
    <FormElmContainer margin="10px 0 10px 0">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit as GenericOnSubmit)}>
          {children}
        </form>
      </FormProvider>
    </FormElmContainer>
  );
}

export default FormElm;
