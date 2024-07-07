import React from "react";
import Sidebar from "../../../components/sidenavbar/Sidebar";
import Card from "../../../components/cards/Card";
import { PiStudentFill } from "react-icons/pi";
import { FaUserTie } from 'react-icons/fa';
const Employeepanel = () => {
    return (<>

        <div className="flex min-h-screen">
            <Sidebar />
            <div className="z-10 flex h-auto w-5/6 px-2 pt-10">
        <div className="grid grid-cols-3 gap-14">
                {/* Cards on the right side */}
                <Card
                    title="Create Employee"
                    text="Add new Employee"
                    bgColor=" bg-slate-200"
                    icon={<PiStudentFill  />}
                    link="/createEmployee"
                    />
                    <Card
                    title="Manage Employee"
                    text="Show all Employee"
                    bgColor="bg-slate-200"
                    icon={<FaUserTie />}
                    link="/manageemployee"
                />
                <Card
                    title="Create Warden"
                    text="Add detail of Warden"
                    bgColor="bg-slate-200"
                    icon={<FaUserTie />}
                    link="/createwarden"
                />
                   <Card
                    title="Manage Warden"
                    text="view all Warden or update or delete "
                    bgColor="bg-slate-200"
                    icon={<FaUserTie />}
                    link="/managewarden"
                />
                  

                {/* Add more cards as needed */}
            </div>
            </div>
        </div>

    </>)


}
export default Employeepanel;