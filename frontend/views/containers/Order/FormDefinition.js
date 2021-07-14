export default {
  firstName: {
    id: "firstName",
    validation: {
      required: 'First name is required'
    }
  },
  lastName: {
    id: "lastName",
    validation: {
      required: 'Last name is required',
      maxLength: {
        value: 1,
        message: 'Last name has invalid length',
      },
    }
  },
  email: {
    id: "email",
    validation: {
      required: 'Email is required'
    }
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
      required: 'Postal code is required'
    }
  },
  phone: {
    id: "phone",
    validation: {
      required: 'Phone is required'
    }
  },
  card: {
    id: "card",
    validation: {
      required: 'Card is required'
    }
  },
  securityCode: {
    id: "securityCode",
    validation: {
      required: 'Security code is required'
    }
  },
  expDate: {
    id: "expDate",
    validation: {
      required: 'Expiration date is required'
    }
  }
}