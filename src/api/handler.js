import axios from "axios";

const checkServeyCode = async (surveyCode) => {
  const res = await axios.get("http://localhost:5000/survey-form", {
    params: { surveyCode: surveyCode },
    validateStatus: function (status) {
      return status === 200 || status === 400 || status === 500;
    },
  });
  // console.log(res);

  if (res.status === 400 || res.status === 500) {
    return { error: res.data.error };
  }
  if (!res.data.bookingIdExists)
    return { bookingIdExists: res.data.bookingIdExists, key: res.data.key };

  return { bookingIdExists: res.data.bookingIdExists, error: res.data.error };
};

const submitSurveyResponse = async (surveyResponse) => {
  const res = await axios.post(
    "http://localhost:5000/survey-form",
    {
      ...surveyResponse,
    },
    {
      validateStatus: function (status) {
        return (
          status === 201 || status === 400 || status === 403 || status === 500
        );
      },
    }
  );

  if (res.status === 400 || res.status === 403 || res.status === 500) {
    return { error: res.data.error };
  }

  return { message: res.data.success };
};

export { checkServeyCode, submitSurveyResponse };
