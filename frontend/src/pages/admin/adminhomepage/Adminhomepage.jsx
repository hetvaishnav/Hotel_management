import React from "react";
import Sidebar from "../../../components/sidenavbar/Sidebar";
import Card from "../../../components/cards/Card";
import { PiStudentFill } from "react-icons/pi";
import { FaUserTie } from 'react-icons/fa';
const Adminhomepage = () => {
    return (<>

        <div className="flex min-h-screen">
            <Sidebar />
            <div className="z-10 flex h-auto w-5/6 px-2 pt-10">
        <div className="grid grid-cols-3 gap-14">
                {/* Cards on the right side */}
                <Card
                    title="Student panel"
                    text="Register and show student"
                    bgColor=" bg-slate-200"
                    icon={<PiStudentFill  />}
                    link="/studentpanel"
                />
                <Card
                    title="Employee panel"
                    text="Register and show Employee"
                    bgColor="bg-slate-200"
                    icon={<FaUserTie />}
                    link="/Employeepanel"
                />
                 <Card
                    title="Notice Board"
                    text="Add Notice for student"
                    bgColor="bg-slate-200"
                    icon={<PiStudentFill />}
                    link="/noticepanel"
                />
                 <Card
                    title="Add Menu"
                    text="Add Menu for student"
                    bgColor="bg-slate-200"
                    icon={<PiStudentFill />}
                    link="/menupanel"
                />


                {/* Add more cards as needed */}
            </div>
            </div>
        </div>

    </>)


}
export default Adminhomepage;