import { FormProvider, useForm } from "react-hook-form";
import BookingSection, {
  formInfo,
} from "../../components/booking/BookingSection";
import { InputType } from "../../components/form/FormInput";
import BaisicButton from "../../components/button/BaisicButton";
import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { createBookingApi } from "../../assets/api/booking";
import dayjs from "dayjs";

const userSectionFromData: formInfo[] = [
  {
    formType: "input",
    subTitle: "이름",
    name: "name",
    placeholder: "이름을 입력해주세요",
    type: "text" as InputType,
    disabled: false,
    required: true,
  },
  {
    formType: "input",
    subTitle: "전화번호",
    name: "phone",
    placeholder: "전화번호를 입력해주세요",
    type: "number" as InputType,
    disabled: false,
    required: true,
  },
];
const bookingSectionFromData: formInfo[] = [
  {
    formType: "input",
    subTitle: "업종",
    name: "category",
    placeholder: "자신의 업종을 입력해주세요.",
    type: "text" as InputType,
    disabled: false,
    required: true,
  },
  {
    formType: "date-range",
    subTitle: "희망 계약 기간",
    name: "period",
    placeholder: "ㅇㅇ",
    type: "number" as InputType,
    disabled: false,
    required: true,
  },
];
const businessSectionFromData: formInfo[] = [
  {
    formType: "text-area",
    subTitle: null,
    name: "information",
    placeholder: "자신의 사업을 설명해주세요.",
    type: "text",
    disabled: false,
    required: true,
  },
];
const questionSectionFromData: formInfo[] = [
  {
    formType: "text-area",
    subTitle: null,
    name: "inquiry",
    placeholder: "사업장에 문의할 내용을 입력하세요.",
    type: "text",
    disabled: false,
    required: true,
  },
];
const CreateBookingPage = () => {
  const location = useLocation();
  const methods = useForm({ mode: "onChange" });

  const submitForm = useCallback(
    async (result: any) => {
      const planId = Number(location.pathname.split("/")[2]);
      const reqBody = {
        ...result,
        phone: result.phone.toString(),
        startDate: dayjs(result.period.selection.startDate).format(
          "YYYY-MM-DD"
        ),
        endDate: dayjs(result.period.selection.endDate).format("YYYY-MM-DD"),
      };
      const response = await createBookingApi(planId, reqBody);

      if (response.status === 200) {
        //페이지 이동
      }
    },
    [location, methods]
  );

  return (
    <article className={`flex w-full flex-col gap-10`}>
      <section
        className={`flex w-full justify-center font-bold text-3xl pb-10 text-my-green basic-border-bottom`}
      >
        사업 계획서
      </section>

      <FormProvider {...methods}>
        <form>
          <BookingSection
            title={"이용자 정보"}
            data={userSectionFromData}
          ></BookingSection>
          <BookingSection
            title={"계약 정보"}
            data={bookingSectionFromData}
          ></BookingSection>
          <BookingSection
            title={"사업 정보"}
            data={businessSectionFromData}
          ></BookingSection>
          <BookingSection
            title={"문의사항"}
            data={questionSectionFromData}
          ></BookingSection>
        </form>
      </FormProvider>

      <div className={`w-full flex justify-center`}>
        <BaisicButton
          content={"접수하기"}
          color={"green"}
          type={"submit"}
          onClickEvent={methods.handleSubmit(submitForm)}
        ></BaisicButton>
      </div>
    </article>
  );
};

export default CreateBookingPage;
