import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import DefaultLayout from "../src/components/DefaultLayout";
import { Button } from "react-bootstrap";
import AddNewEmployee from "../src/components/AddNewEmployee";
import { useEffect, useState } from "react";
import DB from "../src/services/db";
import { Person, Search } from "react-bootstrap-icons";
import { Cloud } from "react-bootstrap-icons";
import { Trash } from "react-bootstrap-icons";
import DisplayEmployees from "../src/components/DisplayEmployees";
import ConfirmDialog from "../src/components/ConfirmDialog";
import ViewEmployee from "../src/components/ViewEmployee";

export default function Home() {
  const [isShowAddNewEmployee, setIsShowAddNewEmployee] = useState(false);
  const [isShowEmployee, setIsShowEmployee] = useState(false);
  const [toDeleteEmployee, setToDeleteEmployee] = useState(null);
  const [isBatch, setIsBatch] = useState(false);

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = () => {
    DB.loadEmployees()
      .then((data) => {
        console.log(data);
        setEmployees(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteEmployee = () => {
    DB.employeeDelete(toDeleteEmployee?.ID)
      .then(() => {
        setToDeleteEmployee(null);
        loadEmployees();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <DefaultLayout>
      <Head>
        <title>Hashed Indexes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <br />

      <ViewEmployee isShow={isShowEmployee} onClose={() => setIsShowEmployee(false)} />

      <div className="h-screen overflow-hidden">
        <div className="flex flex-wrap ">
          <p className="text-black font-light" onClick={() => { setIsShowEmployee(true); }}>
            Welcome Jamal. <br />
            <p className="font-bold text-lg">
              What would you like to do today?
            </p>
          </p>

          <div className="flex flex-row mb-8 ml-auto items-start">
            <Button
              onClick={() => {
                setIsBatch(false);
                setIsShowAddNewEmployee(true);
              }}
              className="flex flex-row justify-center items-center focus:outline-none px-2 py-2 rounded-md text-pink-500"
            >
              {" "}
              <Person />
              &nbsp; Add Employee
            </Button>
            <Button
              onClick={() => {
                setIsBatch(true);
                setIsShowAddNewEmployee(true);
              }}
              className="flex flex-row justify-center items-center focus:outline-none px-2 py-2 rounded-md text-pink-500"
            >
              <Cloud />
              &nbsp; Batch Upload
            </Button>
          </div>
        </div>

        <br />

        <DisplayEmployees
          onDelete={(employee) => {
            setToDeleteEmployee(employee);
          }}
          employees={employees}
        />

        <ConfirmDialog
          isShow={toDeleteEmployee != null}
          onClose={() => {
            setToDeleteEmployee(null);
          }}
          onYes={() => {
            deleteEmployee();
          }}
          title={
            <strong className="flex flex-row items-center justify-center">
              <Trash />
              &nbsp; Delete Employee
            </strong>
          }
          text={
            <p>
              Are you sure you want to delete{" "}
              <strong>
                {toDeleteEmployee?.FirstName} {toDeleteEmployee?.LastName}
              </strong>
              ? <br />
              This cannot be undone
            </p>
          }
        />

        <AddNewEmployee
          isShow={isShowAddNewEmployee}
          onClose={() => { setIsShowAddNewEmployee(false); }}
          batch={isBatch}
        />
      </div>
    </DefaultLayout>
  );
}
