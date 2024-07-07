import React from "react";
import Sidebar from "../../../components/sidenavbar/Sidebar";
import Card from "../../../components/cards/Card";
import { PiStudentFill } from "react-icons/pi";
import { FaUserTie } from 'react-icons/fa';
const menupanel=()=>{
    return(<>
         <div className="flex min-h-screen">
            <Sidebar />
            <div className="z-10 flex h-auto w-5/6 px-2 pt-10">
        <div className="grid grid-cols-3 gap-14">
                {/* Cards on the right side */}
                <Card
                    title="Create Menu"
                    text="Add new Menu for student"
                    bgColor=" bg-slate-200"
                    icon={<PiStudentFill  />}
                    link="/createmenu"
                    />
                    <Card
                    title="Manage Menu"
                    text="Show all Menu & manage it"
                    bgColor="bg-slate-200"
                    icon={<FaUserTie />}
                    link="/managemenu"
                />
                
                {/* Add more cards as needed */}
            </div>
            </div>
        </div>

    
    </>)
}

export default menupanel