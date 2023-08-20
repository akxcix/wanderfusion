import axios from "axios";

interface ErrorResponse {
  status: number;
  error: string;
}

interface AxiosError extends Error {
  response?: {
    data: ErrorResponse;
    status: number;
  };
}

export const submitWaitlistForm = async (formData: {
  name: string;
  mail: string;
}) => {
  const url = "https://api.wanderfusion.com/waitlist";
  try {
    const res = await axios.post(url, formData);
    return { status: "success", message: res.data.data }; // "successfully added to waitlist"
  } catch (error) {
    console.log(error);
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      return { status: "error", message: axiosError.response.data.error }; // "email already exists in waitlist"
    } else {
      // Something else went wrong
      return { status: "error", message: "Something unkown happened" }; // "email already exists in waitlist"
    }
  }
};
