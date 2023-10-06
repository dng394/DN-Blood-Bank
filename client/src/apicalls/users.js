import { axiosInstance } from ".";

export const LoginUser = async (payload) => {
    const response = await axiosInstance("post", "/api/users/login", payload);
    return response;
};

export const RegisterUser = async (payload) => {
    const response = await axiosInstance("post", "/api/users/register", payload);
    return response;
};

export const GetCurrentUser = async () => {
    const response = await axiosInstance("get", "/api/users/get-current-user");
    return response;
};

export const GetAllDonorsOfOrganization = () => {
    return axiosInstance("get", `/api/users/get-all-donors`);
};

export const GetAllHospitalsOfOrganization = () => {
    return axiosInstance("get", `/api/users/get-all-hospitals`);
};

export const GetAllOrganizationsOfDonor = () => {
    return axiosInstance("get", `/api/users/get-all-organizations-of-donor`);
};

export const GetAllOrganizationsOfHospital = () => {
    return axiosInstance("get", `/api/users/get-all-organizations-of-hospital`);
};