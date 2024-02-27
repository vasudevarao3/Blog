import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';
import DashPosts from '../components/DashPosts';
import DashUsers from '../components/DashUsers';
import DashComments from '../components/DashComments';
import DashboardComponent from '../components/DashboardComponent';
import DashAllPosts from '../components/DashAllPosts';

export default function Dashboard() {
  const location = useLocation()
  const [tab, setTab] = useState('')
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className='md:w-56'>
        {/* Sidebar */}
        <DashSidebar />
      </div>
        {/* Dash - Dashboard */}
        {tab === 'dash' && <DashboardComponent />}
        {/* Profile */}
        {tab === 'profile' && <DashProfile />}
        {/* Posts */}
        {tab === 'posts' && <DashPosts />}
        {/* Users */}
        {tab === 'users' && <DashUsers />}
        {/* All Posts */}
        {tab === 'allposts' && <DashAllPosts />}
        {/* Comments */}
        {tab === 'comments' && <DashComments />}
    </div>
  );
}
