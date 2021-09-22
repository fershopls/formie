class Group {
  constructor(fields) {
    this.fields = fields;
    this._type = "div";

    return this;
  }

  type(component, options = {}) {
    this._type = component;

    Object.keys(options).forEach((key) => {
      this[key] = options[key];
    });

    return this;
  }

  class(classNames) {
    if (!this.attrs) {
      this.attrs = {};
    }

    this.attrs.class = classNames;

    return this;
  }

  attrs(attrs) {
    this.attrs = attrs;

    return this;
  }
}

function group() {
  return new Group(...arguments);
}

export default group;
