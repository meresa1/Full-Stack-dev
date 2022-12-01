import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PendingTable from './PendingTable'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const PendingRequests = () => {
  return (
    <>
      <div>
        {' '}
        <h1 className="text-3xl text-black pb-6">Pending Request</h1>
        <NavLink
          to={`/request/`}
          className="text-3xl  font-mono text-green-600 dark:text-blue-500 hover:underline"
        >
          Add Request 
        </NavLink>
      </div>
      <div className="p-6">
        <PendingTable />
      </div>
    </>
  )
}

export default PendingRequests
