import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  type SupportRequestFormType,
  type SupportRequestPayloadType,
} from '@/features/supportRequest/model/types/supportRequestTypes';
import { supportRequestSchema } from '@/features/supportRequest/model/schemas/supportRequestSchema';
import { Text } from '@/shared/ui/Text';
import { useTranslation } from '@/shared/lib/hooks';
import s from './supportRequestForm.module.scss';
import { SUPPORT_REQUEST_FIELDS } from '../../config/supportRequestFields';
import { InputController } from '@/shared/ui/Input';
import { CheckboxController } from '@/shared/ui/Checkbox/CheckboxController';
import { Button } from '@/shared/ui/Button';
import { usePostRequestMutation } from '../../api';
import { useEffect } from 'react';
import clsx from 'clsx';

type SupportRequestFormProps = {
  closeModal?: () => void;
  onSuccess?: () => void;
};

export const SupportRequestForm = ({ onSuccess }: SupportRequestFormProps) => {
  const { t } = useTranslation();

  const [postRequest, { isLoading, isError, reset }] = usePostRequestMutation();

  const {
    control,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm<SupportRequestFormType>({
    shouldUnregister: true,
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      consent: false,
      comment: '',
    },
    resolver: zodResolver(supportRequestSchema),
  });

  const onSubmit = async (data: SupportRequestFormType) => {
    const payload: SupportRequestPayloadType = {
      ...data,
      siteKey: 'tire-shop',
      pageUrl: window.location.href,
      comment: data.comment ?? '',
    };

    try {
      await postRequest(payload).unwrap();
      onSuccess?.();
    } catch (error) {
      console.error(error);
    }

    console.log('payload', payload);
  };
  useEffect(() => {
    const subscription = watch(() => {
      if (isError) {
        reset();
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, isError, reset]);

  return (
    <form className={s.sForm} onSubmit={handleSubmit(onSubmit)} noValidate>
      <Text as={'h2'} variant="h2">
        {t('supportRequest.title')}
      </Text>
      <Text variant="bodySmall" className={s.sFormSubtitle}>
        {t('supportRequest.subtitle')}
      </Text>

      <Text
        className={clsx(
          s.sFormStatus,
          isLoading && s.sFormStatusLoading,
          isError && s.sFormStatusError,
        )}
      >
        {isLoading
          ? t('supportRequest.sending')
          : isError
            ? t('supportRequest.sendError')
            : ''}
      </Text>
      <div className={s.sFormFields}>
        {SUPPORT_REQUEST_FIELDS.flatMap((item) =>
          item.fields.map((field) => (
            <InputController
              key={field.value}
              name={field.value}
              placeholderName={t(field.label)}
              id={field.value}
              type={field.type}
              inputWrapperClassName={s.sFormInputWrapper}
              inputClassName={s.sFormInput}
              control={control}
              required={field.required}
            />
          )),
        )}

        <CheckboxController
          control={control}
          name="consent"
          label={t('supportRequest.privacyConsent')}
          wrapperClassName={s.sFormCheckboxWrapper}
        />
      </div>
      <Button
        type="submit"
        disabled={!isValid || isLoading}
        className={s.sFormBtn}
      >
        {t('supportRequest.submit')}
      </Button>
    </form>
  );
};
