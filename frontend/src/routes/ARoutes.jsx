import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Dfaultpage from "../pages/defaultpage/Dfaultpage"
import About from "../components/Header/About"
import Login from "../pages/login/Login"
import AdminHomePage from "../pages/admin/adminhomepage/Adminhomepage"
import Studentpanel from "../pages/admin/studentpanel/Studentpanel"
import Createstudent from "../pages/admin/createstudent/Createstudent"
import Employeepanel from "../pages/admin/employeepanel/Employeepanel"
import Createemployee from "../pages/admin/createemployee/Createemployee"
import Manageemployee from "../pages/admin/manageemployee/Manageemployee"
import Updateemployee from "../pages/admin/Updateemployee/Updateemployee"
import CreateWarden from "../pages/admin/createemployee/CreateWarden"
import ManageWarden from "../pages/admin/manageemployee/Managewarden"
import Updatewarden from "../pages/admin/Updateemployee/Updatewarden"
import Noticepanel from "../pages/admin/noticepanel/Noticepanel"
import Createnotice from "../pages/admin/Createnotice/Createnotice"
import Managenotice from "../pages/admin/Managenotice/Managenotice";
import Menupanel from "../pages/admin/menupanel/Menupanel";
import CreateMenu from "../pages/admin/Createmenu/Createmenu";
import Managemenu from "../pages/admin/managemenu/Managemenu";
import Managestudent from "../pages/admin/managestudent/Managestudent";
import Studenthomepage from "../pages/student/studenthomepage/Studenthomepage";
export default function ARoutes() {
    return (<>
        <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
        <Routes>
            {/* user */}
            <Route path="/" element={<Dfaultpage />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />

            {/* admin pages */}
            <Route
                path="/admin"
                element={
                    <AdminHomePage />

                } />
                 <Route
                path="/student"
                element={
                    <Studenthomepage />

                } />
            <Route
                path="/studentpanel"
                element={
                    <Studentpanel />
                } />

            <Route
                path="/createstudent"
                element={
                    <Createstudent />
                } />


            <Route
                path="/Employeepanel"
                element={
                    <Employeepanel />
                } />

            <Route
                path="/createEmployee"
                element={
                    <Createemployee />
                } />

            <Route
                path="/manageemployee"
                element={
                    <Manageemployee />
                } />

            <Route
                path="/updateemployee/:id"
                element={
                    <Updateemployee />
                } />

            <Route
                path="/createwarden"
                element={
                    <CreateWarden />
                } />

            <Route
                path="/managewarden"
                element={
                    <ManageWarden />
                } />


            <Route
                path="/updatewarden/:id"
                element={
                    <Updatewarden />
                } />

            <Route
                path="/noticepanel"
                element={
                    <Noticepanel />
                } />
            <Route
                path="/createnotice"
                element={
                    <Createnotice />
                } />

            <Route
                path="/managenotice"
                element={
                    <Managenotice />
                } />

            <Route
                path="/menupanel"
                element={
                    <Menupanel />
                } />

            <Route
                path="/createmenu"
                element={
                    <CreateMenu />
                } />

            <Route
                path="/managemenu"
                element={
                    <Managemenu />
                } />
            <Route
                path="/managestudent"
                element={
                    <Managestudent />
                } />

        </Routes>


    </>)

}