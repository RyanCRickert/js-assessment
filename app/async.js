asyncAnswers = {
  /**
   * Asynchronously returns a value via a promise. Example:
   * async('anyValue').then((result) => { return result === 'anyValue';});
   * 
   * @param value - Any value
   * @returns {then: function} A promise like object containing a then property.
   */
  async: async function async(value) {
    return await value;
  },

  /**
   * Creates a promise that resolves with the data returned from an ajax call to the url url.
   * You may use jquery, XMLHttpRequest, or fetch.
   * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   * https://api.jquery.com/jQuery.ajax/
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API   * 
   * 
   * @param {String} url - a valid url
   * @returns {then: function} A promise like object containing a then property.
   */
  manipulateRemoteData: function manipulateRemoteData(url) {
    return fetch(url)
      .then(res => res.json())
      .then((data) => {
        let target = [];

        data.people.forEach(person => target.push(person.name));

        return target.sort();
      })
      .catch(error => console.log(error))
  }
};

/*  ***** This is just an example of how the second question could be answered using async / await *****


  manipulateRemoteData: async function manipulateRemoteData(url) {
    let target = [];
  
    const res = await fetch(url);
  
    const data = await res.json();
  
    data.people.forEach(person => target.push(person.name))
  
    return target.sort();
  }
*/
