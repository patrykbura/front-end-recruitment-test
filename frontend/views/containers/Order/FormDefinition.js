export default {
  firstName: {
    id: "firstName",
    validation: {
      required: 'First name is required',
      pattern: {
        value: /^[A-Za-z]+$/i,
        message: "First name is invalid"
      }
    }
  },
  lastName: {
    id: "lastName",
    validation: {
      required: 'Last name is required',
      pattern: {
        value: /^[A-Za-z]+$/i,
        message: "Last name is invalid"
      }
    }
  },
  email: {
    id: "email",
    validation: {
      required: 'Email is required',
      /* 
         To allow providing invalid email to test recruitment task and to show 
         how front is handling errors from backend this line is commented out
      */
      // pattern: {
      //   value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      //   message: 'Invalid email'
      // }
    },
  },
  country: {
    id: "country",
    validation: {
      required: 'Country is required'
    }
  },
  postalCode: {
    id: "postalCode",
    validation: {
      required: 'Postal code is required',
      pattern: {
        value: /^[0-9]{5}$/,
        message: "Postal code is invalid" 
      }
    }
  },
  phone: {
    id: "phone",
    validation: {
      required: 'Phone number is required',
      //TODO pattern
    }
  },
  card: {
    id: "creditCard",
    validation: {
      required: 'Credit card is required',
      pattern: {
        value: /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/,
        message: "Credit card number is invalid" 
      }
    }
  },
  securityCode: {
    id: "CVV",
    validation: {
      required: 'Security code is required',
      pattern: {
        value: /^[0-9]{3}$/,
        message: 'Security code is invalid'
      }
    }
  },
  expDate: {
    id: "expDate",
    validation: {
      required: 'Expiration date is required',
      pattern: {
        value: /^[0-9]{2}\/[0-9]{2}$/,
        message: "Postal code is invalid" 
      }
    }
  }
}