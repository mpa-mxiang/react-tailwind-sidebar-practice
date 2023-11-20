import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
export const SidebarItem = [
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        link: "/dashboard",
        class: "dashboard"
    },
    {
        title: "Assessment",
        icon: <AssessmentIcon />,
        link: "/assessment"
    },
    {
        title: "Create Assessment",
        icon: <NoteAddIcon />,
        link: "/new-assessment"
    },
    {
        title: "Resources",
        icon: <LightbulbIcon />,
        link: "/resources"
    },
]