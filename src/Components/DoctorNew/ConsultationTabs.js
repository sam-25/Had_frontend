import React from 'react'

const ConsultationTabs = () => {
  return (
    <div role="tablist" className="tabs tabs-bordered tabs-lg">
      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Chats" checked/>
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Chats go here</div>

      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tests" checked/>
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tests go here</div>
    </div>
  )
}

export default ConsultationTabs