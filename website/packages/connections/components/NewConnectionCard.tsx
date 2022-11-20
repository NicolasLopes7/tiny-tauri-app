import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from '@redis-ui/ui';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { NewConnection, newConnectionSchema } from '../schemas';
import { NewConnectionForm } from './NewConnectionForm';

type Props = {
  selectedConnection?: NewConnection;
  onSubmit: (connection: NewConnection) => void;
};

const defaultValues: Partial<NewConnection> = {
  data: {
    database: '',
    host: '',
    port: '',
    password: ''
  },
  metadata: {
    connectionName: '',
    saveConnection: false
  }
};

export function NewConnectionCard({ selectedConnection, onSubmit }: Props) {
  const { register, handleSubmit, reset, control, formState } = useForm<NewConnection>({
    resolver: zodResolver(newConnectionSchema),
    defaultValues
  });

  useEffect(() => {
    console.log('calling reset');
    if (!selectedConnection) {
      reset(defaultValues);
      // reset({
      //   data: {
      //     database: '',
      //     host: '',
      //     password: '',
      //     port: undefined
      //   },
      //   metadata: {
      //     connectionName: '',
      //     saveConnection: false
      //   }
      // });
      return;
    }

    reset(selectedConnection);
  }, [selectedConnection]);

  return (
    <Card.Container css={{ alignItems: 'center', gap: '$3' }} as={'form'} onSubmit={handleSubmit(onSubmit)}>
      <Card.Header>
        <Card.Title>Setup Connection</Card.Title>
        <Card.HeaderActions>
          <Card.HeaderAction>Import from URL</Card.HeaderAction>
        </Card.HeaderActions>
      </Card.Header>

      <NewConnectionForm control={control} formState={formState} register={register} />

      <Card.Footer>
        <Card.FooterActions>
          <Card.FooterAction>Connect</Card.FooterAction>
        </Card.FooterActions>
      </Card.Footer>
    </Card.Container>
  );
}
