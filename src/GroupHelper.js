class Group {
  constructor(fields) {
    this.fields = fields;
    this._type = "div";

    return this;
  }

  type(component) {
    this._type = component;

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
