class Group {
  constructor(fields) {
    this.fields = fields;

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
