import { Axios } from "axios";

const photoService = {
  getPhoto: (url) => Axios({ method: "get", url: url }),
};

export default photoService;
