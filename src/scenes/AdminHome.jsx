import {
    AdminJournals,
    NavbarAdmin, SidebarAdmin,
} from '../components';

import { useEffect } from 'react';

const AdminHome = () => {

    useEffect(() => {
        document.title = 'Admin- Dashboard | Elite Press Journals';
    }, []); 

    return (
        <div className='font-instrument-sans'>
            <NavbarAdmin />
            <div className='grid grid-cols-5 journal2'>
                <div className='fixed'>
                    <SidebarAdmin />
                </div>
                <div className='col-span-4 md:'>
                    <AdminJournals />
                </div>
            </div>
        </div>
    )
};

export default AdminHome;