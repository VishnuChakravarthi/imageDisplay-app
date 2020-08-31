import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 72d953db22146b4425b2d9f9a692b93e706d850ded647947b6b75cea86ad236c"
  }
});
