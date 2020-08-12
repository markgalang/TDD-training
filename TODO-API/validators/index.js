const isEmpty = (string) => {
  if (string.trim() === "") {
    return true;
  }
  return false;
};

const trimInputField = (object) => {
  Object.keys(object).map((key) => {
    if (typeof object[key] == "string") {
      return (object[key] = object[key].trim());
    }
    return object[key];
  });

  return object;
};

const validateTaskData = (data) => {
  const { name } = data;
  let errors = {};

  if (isEmpty(name)) {
    errors.name = "Must not be empty";
  }

  return {
    errors,
    isValid: Object.keys(errors).length > 0 ? false : true,
  };
};

module.exports = { trimInputField, validateTaskData };
