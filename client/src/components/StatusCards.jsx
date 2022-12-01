import React from 'react'
import { FaPeopleArrows } from 'react-icons/fa'
import StatusCard from './StatusCard'

const StatusCards = ({ stats }) => {
  return (
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <StatusCard
        title={` Pending Requests`}
        count={stats.pending}
        icon={<FaPeopleArrows size="36" className={'text-white'} />}
      />
      {/*  <StatusCard
        title={`Customer Orderd Request`}
        count={stats.pending}
        icon={<FaPeopleArrows size="36" className={"text-white"} />}
      /> */}
      <StatusCard
        title={`Customer Completed Requests`}
        count={stats.pending}
        icon={<FaPeopleArrows size="36" className={'text-white'} />}
      />
    </div>
  )
}

export default StatusCards
