import { useState } from "react";

const Dashboard = () => {
    const [user,setUser] = useState('');
    const checkAdmin = () => user.toLowerCase() === 'admin' ? true : false;

    return <>
        <h1>DashBoard</h1>
        <label>Enter Your Role</label>
        <input type="text" value={user} onChange={(e)=> setUser(e.target.value)} />
        {checkAdmin()?<AdminPage/>:<GuestPage/>}
    </>
}

const AdminPage = () => <h1 className="bg-warning text-center text-white m-2 p-2">Admin</h1>
const GuestPage = () => <h1 className="bg-secondary text-center text-white m-2 p-2">Guest</h1>

export default Dashboard;