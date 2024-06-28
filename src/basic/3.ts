// Створіть змінну, яка може містити або рядок, або число (union type)?
// Також, оголосіть змінну, яка може містити лише одне з двох можливих
//  рядкових значень: 'enable' або 'disable'(literal type).

type unionType = string | number;
let union: unionType;

type literalType = "enable" | "disable";
let literal: literalType;
