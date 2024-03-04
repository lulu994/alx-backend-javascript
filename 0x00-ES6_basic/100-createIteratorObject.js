export default function createIteratorObject(report) {
  let departments = Object.values(report.allEmployees);
  let employees = departments.reduce((acc, val) => acc.concat(val), []);
  let index = 0;

  return {
    next: function () {
      if (index < employees.length) {
        return { value: employees[index++], done: false };
      } else {
        return { done: true };
      }
    },
    [Symbol.iterator]: function () {
      return this;
    },
  };
}
