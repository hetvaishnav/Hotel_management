import React from "react";
import Sidebar from "../../../components/sidenavbar/Sidebar";
import Card from "../../../components/cards/Card";
import { PiStudentFill } from "react-icons/pi";
import { FaUserTie } from 'react-icons/fa';
const Noticepanel=()=>{
    return(<>
         <div className="flex min-h-screen">
            <Sidebar />
            <div className="z-10 flex h-auto w-5/6 px-2 pt-10">
        <div className="grid grid-cols-3 gap-14">
                {/* Cards on the right side */}
                <Card
                    title="Create Notice"
                    text="Add new notice for student"
                    bgColor=" bg-slate-200"
                    icon={<PiStudentFill  />}
                    link="/createnotice"
                    />
                    <Card
                    title="Manage Notice"
                    text="Show all Notice & manage it"
                    bgColor="bg-slate-200"
                    icon={<FaUserTie />}
                    link="/managenotice"
                />
                
                {/* Add more cards as needed */}
            </div>
            </div>
        </div>

    
    </>)
}

export default Noticepanel