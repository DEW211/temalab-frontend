import React from 'react'
import Dashboard from './Dashboard'
import { useEffect } from 'react';
import connect from '../Connection/connection'

export default function DashboardWrapper() {

    useEffect(() => {
        connect();
    })


    return (
        <Dashboard />
    );
}