import React from 'react';
import { IMaskInput } from 'react-imask';

const FormMask = React.forwardRef((props, ref) => {
  const {
    field: { name, value },
    form: { setFieldValue, setFieldTouched },
    ...other
  } = props;

  const handleAccept = value => {
    setFieldValue(name, value);
  };

  const handleBlur = () => {
    setFieldTouched(name, true);
  };

  return (
    <IMaskInput
      {...other}
      mask="000-000-0000"
      lazy={true}
      definitions={{
        0: /[0-9]/,
      }}
      inputRef={ref}
      value={value}
      onAccept={handleAccept}
      onBlur={handleBlur}
      unmask={false}
    />
  );
});

export default FormMask;
