import keyBy from "lodash/keyBy.js";
import has from "lodash/has.js";
import isEmpty from "lodash/isEmpty.js";
import * as yup from "yup";
import onChange from "on-change";
import axios from "axios";

const routes = {
  usersPath: () => "/users",
};

const schema = yup.object().shape({
  name: yup.string().trim().required(),
  email: yup.string().required("email must be a valid email").email(),
  password: yup.string().required().min(6),
  passwordConfirmation: yup
    .string()
    .required("password confirmation is a required field")
    .oneOf(
      [yup.ref("password"), null],
      "password confirmation does not match to password"
    ),
});

// Этот объект можно использовать для того, чтобы обрабатывать ошибки сети.
// Это необязательное задание, но крайне рекомендуем попрактиковаться.
const errorMessages = {
  network: {
    error: "Network Problems. Try again.",
  },
};

// Используйте эту функцию для выполнения валидации.
// Выведите в консоль её результат, чтобы увидеть, как получить сообщения об ошибках.
const validate = (fields) => {
  try {
    schema.validateSync(fields, { abortEarly: false });
    return {};
  } catch (e) {
    return keyBy(e.inner, "path");
  }
};

export default () => {
  const form = document.querySelector('[data-form="sign-up"]');
  const container = document.querySelector('[data-container="sign-up"]');
  const submit = form.querySelector('[type="submit"]');
  const state = {
    fields: { name: "", email: "", password: "", passwordConfirmation: "" },
    errors: {},
    sending: false,
  };
  const render = () => {
    for (const field of form.querySelectorAll("[name]")) {
      const error = state.errors[field.name];
      field.classList.toggle("is-invalid", Boolean(error));
      let feedback = field.parentElement.querySelector(".invalid-feedback");
      if (error) {
        if (!feedback) {
          feedback = document.createElement("div");
          feedback.className = "invalid-feedback";
          field.after(feedback);
        }
        feedback.textContent = error.message;
      } else if (feedback) feedback.remove();
    }
    submit.disabled =
      state.sending || Object.keys(validate(state.fields)).length > 0;
  };
  form.addEventListener("input", (event) => {
    if (!Object.hasOwn(state.fields, event.target.name)) return;
    state.fields[event.target.name] = event.target.value;
    state.errors = validate(state.fields);
    render();
  });
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (state.sending || Object.keys(validate(state.fields)).length) return;
    state.sending = true;
    render();
    try {
      await axios.post(routes.usersPath(), state.fields);
      container.textContent = "User Created!";
    } catch {
      let error = form.querySelector('[role="alert"]');
      if (!error) {
        error = document.createElement("p");
        error.setAttribute("role", "alert");
        form.append(error);
      }
      error.textContent = errorMessages.network.error;
    } finally {
      state.sending = false;
      if (form.isConnected) render();
    }
  });
  render();
};
