import styled from "styled-components";

export const InputStyle = styled.div`
  > div,
  > input {
    padding: 1rem;
    align-items: center;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid var(--b0, #11434a);
    background-color: white;
  }
  > div {
    min-width: 20rem;
  }
  > input {
    min-width: 5rem;
  }
`;

export const FormInputStyle = styled(InputStyle)`
  > div,
  > input {
    height: 3.125rem;
  }
`;

export const FormTextareaStyle = styled(InputStyle)`
  width: 100%;
  > div,
  > input {
    height: 15rem;
  }
  > div {
    min-width: 30rem;
    width: 100%;
  }
`;

export const FormDatePickerCalendarStyle = styled.div`
  & {
    background-color: white;
    width: 100%;
    position: absolute;
    top: calc(100% + 0.25rem);
    z-index: 1;

    .rdrDefinedRangesWrapper,
    .rdrDateDisplayWrapper {
      display: none;
    }
    .rdrDayToday .rdrDayNumber span:after {
      background: #fff;
    }
    .rdrDateRangePickerWrapper {
      width: 100%;
    }
    .rdrCalendarWrapper {
      width: 100%;
      border-radius: 0.5rem;
      border: 1px solid var(--gray-70);
      background: var(--gray-100);
      box-shadow: 0px 8px 24px 0px rgba(25, 32, 41, 0.16);
    }
    .rdrMonthsHorizontal > .rdrMonth {
      width: 100%;
    }
  }
`;
