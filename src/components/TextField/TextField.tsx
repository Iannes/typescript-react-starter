import React from "react";
// Components
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { ChangeEvent, KeyboardEvent } from "types";
import BodyText from "components/BodyText";
import { FormAction } from "actions";
import { useFormDispatch } from "../../contexts/GlobalContext";
import i18n from "mocks/i18n";

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    fieldset {
      background: white;
    }
  }
  .MuiInputBase-input {
    z-index: 1;
  }
  .MuiInputAdornment-root {
    z-index: 1;
  }
`;

interface ModifiedTextFieldProps {
  label: string;
  value?: string;
  onChange?: ChangeEvent;
  hasCurrency?: boolean;
  hasClear?: boolean;
  showTopInputLabel?: string;
  showTopInputTitle?: string;
  rowKeyName: string;
}

type InputProps = React.FC<ModifiedTextFieldProps>;

export const ModifiedTextField: InputProps = ({
  label,
  value,
  onChange,
  hasCurrency = false,
  hasClear = true,
  showTopInputTitle = "",
  showTopInputLabel = "",
  rowKeyName = "",
  ...other
}) => {
  const [stateValue, setStateValue] = React.useState(value);
  const dispatch: FormAction = useFormDispatch();

  const handleChange = (e: ChangeEvent) => {
    const newValue = e.target.value;
    setStateValue(newValue as string);
  };

  const handleCatchReturn = (e: KeyboardEvent) => {
    const value = stateValue as string;
    console.log(value);
  };

  const CurrencySymbol = () => (
    <InputAdornment position="start" disablePointerEvents>
      {i18n.app.currency}
    </InputAdornment>
  );

  const ClearFieldButton = () => (
    <InputAdornment position="end">
      <IconButton
        aria-label="Clear"
        onClick={() => setStateValue("")}
        size="small"
        color="primary"
      >
        &times;
      </IconButton>
    </InputAdornment>
  );

  return (
    <>
      {showTopInputTitle && (
        <BodyText variant="heading" titleText={showTopInputTitle} />
      )}
      {showTopInputLabel && <BodyText titleText={showTopInputLabel} />}
      <StyledTextField
        fullWidth
        margin="normal"
        variant="outlined"
        label={label}
        value={stateValue}
        onKeyDown={handleCatchReturn}
        onChange={handleChange}
        InputProps={{
          startAdornment: hasCurrency && <CurrencySymbol />,
          endAdornment: hasClear && stateValue !== "" && <ClearFieldButton />
        }}
        {...other}
      />
    </>
  );
};
