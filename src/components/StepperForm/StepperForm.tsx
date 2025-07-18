'use client';

import { getFormLocalStorage, setToLocalStorage } from '@/utils/local-sororage';
import { Button, Steps, message } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface ISteps {
  title?: string;
  content?: React.ReactElement | React.ReactNode;
}

interface IStepsProps {
  steps: ISteps[];
  persistKey: string;
  submitHandler: (el: any) => void;
  navigateLink?: string;
}

const StepperForm = ({
  steps,
  submitHandler,
  navigateLink,
  persistKey,
}: IStepsProps) => {
  const router = useRouter();

  const [current, setCurrent] = useState<number>(
    getFormLocalStorage('step')
      ? Number(JSON.parse(getFormLocalStorage('step') as string).step)
      : 0
  );

  const [savedValues, setSavedValues] = useState(
    getFormLocalStorage(persistKey)
      ? JSON.parse(getFormLocalStorage(persistKey) as string)
      : {}
  );

  useEffect(() => {
    setToLocalStorage('step', JSON.stringify({ step: current }));
  }, [current]);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const methods = useForm({ defaultValues: savedValues });
  const watch = methods.watch();

  useEffect(() => {
    setToLocalStorage(persistKey, JSON.stringify(watch));
  }, [watch, persistKey]);

  const { handleSubmit, reset } = methods;

  const handleStudentOnSubmit = (data: any) => {
    submitHandler(data);
    reset();
    setToLocalStorage('step', JSON.stringify({ step: 0 }));
    setToLocalStorage(persistKey, JSON.stringify({}));
    navigateLink && router.push(navigateLink);
  };

  return (
    <div style={{ padding: '0 16px' }}>
      <Steps current={current} items={items} responsive />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleStudentOnSubmit)}>
          <div style={{ marginTop: '1.5rem' }}>{steps[current].content}</div>
          <div
            style={{
              marginTop: '1.5rem',
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
            }}
          >
            {current < steps.length - 1 && (
              <Button
                type="primary"
                className="text-black shadow-lg"
                onClick={() => next()}
              >
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                htmlType="submit"
                className="text-black shadow-lg"
                onClick={() => message.success('Processing complete!')}
              >
                Done
              </Button>
            )}
            {current > 0 && <Button onClick={() => prev()}>Previous</Button>}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default StepperForm;
