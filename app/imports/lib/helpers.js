import serialize from 'form-serialize';

// Form helpers
const getFormData = (formId) => {
  const form = document.querySelector(formId);
  return serialize(form, { hash: true });
}

export {
  getFormData
}