import axios from 'axios';

const url = "http://localhost:5000";

export const addApplicant = async (inputvalues) => {
  return await axios.post(`${url}/membership`, inputvalues);
}

export const getApplicant = async () => {
    return await axios.get(`${url}/viewApplicants`);
}



