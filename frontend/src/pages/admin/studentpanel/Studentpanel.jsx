import React from "react";
import Sidebar from "../../../components/sidenavbar/Sidebar";
import Card from "../../../components/cards/Card";
import { PiStudentFill } from "react-icons/pi";
import { FaUserTie } from 'react-icons/fa';
const Studentpanel = () => {
    return (<>

        <div className="flex min-h-screen">
            <Sidebar />
            <div className="z-10 flex h-auto w-5/6 px-2 pt-10">
        <div className="grid grid-cols-3 gap-14">
                {/* Cards on the right side */}
                <Card
                    title="Create student"
                    text="Add new student"
                    bgColor=" bg-slate-200"
                    icon={<PiStudentFill  />}
                    link="/createstudent"
                />
                <Card
                    title="Manage Student "
                    text="Show all Student"
                    bgColor="bg-slate-200"
                    icon={<FaUserTie />}
                    link="/managestudent"
                />
                 <Card
                    title="Assign Room"
                    text="give room to student"
                    bgColor="bg-slate-200"
                    icon={<PiStudentFill />}
                    link="/details"
                />


                {/* Add more cards as needed */}
            </div>
            </div>
        </div>

    </>)


}
export default Studentpanel;