import { connection } from './connection.js';
import { generateId } from './ids.js';

const getEmployeeTable = () => connection.table('employee');

export async function getEmployees() {
    return await getEmployeeTable().select();
  }
  
  export async function getEmployee(id) {
    return await getEmployeeTable().first().where({ id });
  }

  export async function createEmployee({ name, resignation }) {
    const employee = {
      id: generateId(),
      name,
      resignation,
    };
    await getEmployeeTable().insert(employee);
    return employee;
  }
  
  export async function deleteEmployee(id) {
    const employee = await getEmployeeTable().first().where({ id });
    if (!employee) {
      throw new Error(`Employee not found: ${id}`);
    }
    await getEmployeeTable().delete().where({ id });
    return employee;
  }
  
  export async function updateEmployee({ id, name }) {
    const employee = await getEmployeeTable().first().where({ id });
    if (!employee) {
      throw new Error(`Employee not found: ${id}`);
    }
    const updatedFields = { name };
    await getEmployeeTable().update(updatedFields).where({ id });
    return { ...employee, ...updatedFields };
  }