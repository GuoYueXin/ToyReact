class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type);
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value);
  }
  appendChild(component) {
    this.root.appendChild(component);
  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content);
  }
}

export class Component {
  constructor() {
    this.props = Object.create(null);
    this.children = [];
    this._root = null;
  }
  setAttribute(name, value) {
    this.props[name] = value;
  }
  appendChild(component) {
    this.children.push(component);
  }
  get root() {
    if (!this._root) {
      this._root = this.render().root;
    }
    return this._root;
  }
}

export function createElement(type, attributes, children) {
  let ele = null;
  if (typeof type === 'string') {
    ele = document.createElement(type);
  } else {
    ele = new ElementWrapper(type);
  }
  for(let attr in attributes) {
    ele.setAttribute(attr, attributes[attr]);
  }
  for(let child of children) {
    if (!child) return;
    if (typeof child === 'string') {
      child = TextWrapper(child);
    }
    ele.appendChild(child);
  }
  console.log(ele);
  return ele;
}

export function render(component, parentElement) {
  parentElement.appendChild(component);
}