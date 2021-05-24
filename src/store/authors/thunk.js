import api from "../../app_backend_api/axios";
import { getAllAuthorsSuccess } from "./actionCreators";

export const getAuthor = (id) => {
  return api.get(`/authors/${id}`);
};

export const getAll = () => (dispatch) => {
  api.get("/authors/all")
    .then((resp) => dispatch(getAllAuthorsSuccess(resp.data.result)));
};