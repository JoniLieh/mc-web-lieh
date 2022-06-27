export default {
  filters: {
    uppercase(value) {
      return value.toUpperCase() || "";
    }, 
    capitalize(value) { // $options.filters.uppercase
      //return val.charAt(0).toUpperCase() + val.slice(1);
      if (!value) return ''
        value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    parseError(error) {
      if (!error)
        return ""
      console.log(error);

      if (error.response && error.response.status == 504)
        return "Server API konnte nicht erreicht werden"
      else if (error.response)
        return error.response.data ? error.response.data.message : error.response
      else if (error.message)
        return error.message
      else
        return error
    }
  },
  methods: {
    copyText(text) {
      var textarea = document.createElement("textarea");
      textarea.textContent = text;
      textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy"); 

      document.body.removeChild(textarea);
    },
    capitalize(value) { // $options.filters.uppercase
      //return val.charAt(0).toUpperCase() + val.slice(1);
      if (!value) return ''
        value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  }
}