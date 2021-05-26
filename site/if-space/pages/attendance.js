import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DefaultLayout from "../src/components/DefaultLayout";
import {Button} from "react-bootstrap";
import AddNewEmployee from "../src/components/AddNewEmployee";
import {useState} from "react";

export default function Attendance() {

    const [isShowAddNewEmployee, setIsShowAddNewEmployee] = useState(false)

    const attendanceData = [
        {
            date: "May 27, 2021",
            timeIn: "09:13 AM",
            timeOut: "18:57 PM",
            actions: [ "Mark Entry", "Leaving the Office" ]
        },{
            date: "May 27, 2021",
            timeIn: "09:13 AM",
            timeOut: "18:57 PM",
            actions: [ "Mark Entry", "Leaving the Office" ]
        },{
            date: "May 27, 2021",
            timeIn: "09:13 AM",
            timeOut: "18:57 PM",
            actions: [ "Mark Entry", "Leaving the Office" ]
        },{
            date: "May 27, 2021",
            timeIn: "09:13 AM",
            timeOut: null,
            actions: [ "Mark Entry", "Leaving the Office" ]
        },
    ]

    return (
        <DefaultLayout >
            <Head>
                <title>Hashed Indexes</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <br/>
            <div className="flex flex-wrap">
                <p className="text-black font-light">Welcome Jamal. <br/>
                    <p className="font-bold text-lg">What would you like to do today?</p>
                </p>
                <Button onClick={() => {setIsShowAddNewEmployee(true)}} className="focus:outline-none mb-8 bg-pink-500 px-4 py-2 rounded-md text-white ml-auto">Add employee</Button>

            </div>

            <br/>


            <table className="table-auto w-full">
                <thead>
                <tr className="bg-black text-white px-4 text-center">
                    <td className="font-bold ">Date</td>
                    <td className="font-bold ">Time In</td>
                    <td className="font-bold ">Time Out</td>
                    <td className="font-bold w-1/3">Actions</td>
                </tr>
                </thead>
                <tbody>
                { attendanceData.map( val => {
                    return (
                        <tr className="text-center h-16">
                            <td>{val?.date ?? `NULL`}</td>
                            <td>{val?.timeIn ?? `No Entry Time`}</td>
                            <td>{val?.timeOut ?? `No Exit Time`}</td>
                            <td>
                                <Button className="focus:outline-none mb-8 bg-pink-500 px-4 py-2 rounded-md text-white" style={{ marginBottom: "0" }}>Mark Attendance</Button>
                                <Button className="text-red-600 text-white mx-2 rounded-2xl px-8 py-3 focus:outline-none hover:text-black">I'm Leaving the Office</Button>
                            </td>
                        </tr>
                    )
                } ) }

                </tbody>
            </table>

            <AddNewEmployee isShow={isShowAddNewEmployee} onClose={() => {setIsShowAddNewEmployee(false)}}/>


        </DefaultLayout>
    )
}
