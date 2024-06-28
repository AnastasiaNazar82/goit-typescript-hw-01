// Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?

function showMessage(message: string): void {
  console.log(message);
}
showMessage("Hello!");

function calc(num1: number, num2: number): number {
  return num1 + num2;
}
const result = calc(5, 7);
console.log(`Resolt: ${result}`);

function customError(): never {
  throw new Error("Error");
}
