const axios = require("axios")

export default {
get: function() {
    return axios.get("/view/books");
  },
}