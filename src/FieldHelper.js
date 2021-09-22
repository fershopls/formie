class Field {
  constructor(name, label, type = "text") {
    this.name = name;
    this.label = label;
    this.type = type;

    return this;
  }

  extend(binds) {
    Object.keys(binds).forEach((key) => {
      this[key] = binds[key];
    });

    return this;
  }

  required() {
    if (typeof this.attrs == typeof undefined) {
      this.attrs = {};
    }

    this.attrs.required = true;

    return this;
  }

  email() {
    this.type = "email";

    return this;
  }

  tel() {
    this.type = "tel";

    return this;
  }

  date() {
    this.type = "date";

    return this;
  }
}

function f() {
  return new Field(...arguments);
}

export default f;
