const object = {
  CopyText(text: string) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy"); 

    document.body.removeChild(textarea);
  },
  Capitalize(value: string | undefined | null) { // $options.filters.Capitalize
    //return val.charAt(0).toUpperCase() + val.slice(1);
    if (!value) return ''
      value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  },
  CapitalizeAll(value: string | undefined | null) { // $options.filters.Capitalize
    //return val.charAt(0).toUpperCase() + val.slice(1);
    if (!value) return ''
      value = value.toString()

    return value.split(" ").map((word: string) => value.charAt(0).toUpperCase() + value.slice(1)).join(" ")
  },
  ParseError(error: any) {
    if (!error)
      return ""

    if (error?.data?.details) console.log(error?.data?.details);

    if (error?.response?.status == 504) return "Server API konnte nicht erreicht werden"
    else if (error?.data?.message)  {
      let message = error.data.message;
      return Array.isArray(message) ? message.join(", ") : message;
    } 
    else if (error.message) return error.message
    else if (error.response) return error.response.data ? error.response.data.message : error.response
    else if (error?.data?.details) return error.data.details
    else return error
  },
  InitialLetters(fullName: string): string {
    const names = fullName?.split(" ");
    
    let initials = "";
    for (let i = 0; i < names?.length; i++) {
      if (names[i].length > 0) {
        initials += names[i].charAt(0).toUpperCase();
      }
    }
    
    return initials;
  },
  FormatDate(date: string, options = {
    year: 'numeric' as const,
    month: '2-digit' as const,
    day: '2-digit' as const,
    hour: '2-digit' as const,
    minute: '2-digit' as const,
    second: '2-digit' as const,
  }): string {
    const formattedDate = new Date(date).toLocaleString('de-DE', options);

    return formattedDate + " Uhr";
  }

};

export default object;