class Group {
  constructor(fields) {
    this.fields = fields;
    this._type = "div";
    this._attrs = {};

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
    this._attrs.class = classNames;

    return this;
  }

  attrs(attrs) {
    this._attrs = attrs;

    return this;
  }
}

function group() {
  return new Group(...arguments);
}

export default group;
