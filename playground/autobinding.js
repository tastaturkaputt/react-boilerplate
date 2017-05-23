var obj = {
  name: 'VS',
  printName: function () {
    console.log(`My name is ${this.name}.`);
  }
}

obj.printName();
setTimeout(obj.printName.bind({name: 'Mike'}), 1000);
