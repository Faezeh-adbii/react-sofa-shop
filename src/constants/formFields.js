const formFields = [
  {
    name: "name",
    label: "نام شما",
    type: "text",
    placeholder: "مثلاً: علی رضایی",
    dir: "rtl",
    validation: { required: "نام الزامی است" },
  },
  {
    name: "email",
    label: "ایمیل شما",
    type: "email",
    placeholder: "example@email.com",
    dir: "ltr",
    validation: {
      required: "ایمیل الزامی است",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "ایمیل معتبر نیست",
      },
    },
  },
];
export {formFields}