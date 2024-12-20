export const systemTitle = [
    { title: 'University of Eastern Philippines Learning Management System' }
]

export const sidebar = [
    { name: 'Dashboard' },
    { name: 'Department' },
    { name: 'Leave Types' },
    { name: 'Employees', },
    { name: 'Leave Management' },
    { name: 'Manage Admin', }
]

export const breadcrumbDashboard = [
    {
        label: 'Teacher',
        sublabel: 'Teacher\'s Dashboard'
    }
]

export const breadcrumbCourses= [
    {
        label: 'Teacher',
        sublabel: 'Courses'
    }
]

export const breadcrumbCalendar = [
    {
        label: 'Teacher',
        sublabel: 'Calendar'
    }
]

export const breadcrumbMessages = [
    {
        label: 'Teacher',
        sublabel: 'Inbox Messages'
    }
]

export const breadcrumbAbout = [
    {
        label: 'Teacher',
        sublabel: 'About LMS'
    }
];

export const breadcrumbManageAdmin = [
    {
        label: 'Admin',
        sublabel: 'Manage Admin'
    }
]

export const card = [
    {
        cardName: 'Total Employees',
        icon: 'fa-solid fa-users',
        info: 'Active Employees',
        total: '2',
    },
    {
        cardName: 'Listed Departments',
        icon: 'fa-solid fa-building',
        info: 'Available Departments',
        total: '4',
    },
    {
        cardName: 'New Leaves Application',
        total: '3',
    },
    {
        cardName: 'Approved Application',
        icon: 'fa-solid fa-check',
        info: 'Approved',
        total: '8',
    },
    {
        cardName: 'Pending Application',
        icon: 'fa-solid fa-spinner',
        info: 'Pending',
        total: '1',
    },
    {
        cardName: 'Declined Application',
        icon: 'fa-solid fa-xmark',
        info: 'Declined',
        total: '0',
    }
]

export function department() {
    var dept = document.getElementById('dept');
    dept.style.display = 'block';
}