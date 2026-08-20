import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const API_URL = import.meta.env.VITE_API_URL

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6" />
    <path d="M14 11v6" />
    <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
  </svg>
)

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('repairs')
  const navigate = useNavigate()

  const authHeader = () => ({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('adminToken')}`
  })

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    navigate('/admin/login')
  }

  return (
    <div className="min-h-screen w-full font-display">
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB] bg-[#ddf5e8]">
        <div>
          <div className="text-lg sm:text-xl md:text-2xl font-display font-medium text-[#1A1D22]">PHONELAND</div>
          <p className="text-sm font-medium text-[#0F766E]">Admin panel</p>
        </div>

        <button
          onClick={handleLogout}
          className="cursor-pointer font-bold text-sm px-3 py-2 rounded-md text-red-500 hover:bg-red-200"
        >
          Log out
        </button>
      </div>

      <div className="p-6">
        <div className="flex gap-6 border-b border-[#E5E7EB] mb-5">
          <button
            onClick={() => setActiveTab('repairs')}
            className={`pb-2 text-[15px] cursor-pointer transition-colors ${
              activeTab === 'repairs'
                ? 'text-[#0F766E] font-medium border-b-2 border-[#0F766E]'
                : 'text-[#5B5C5F]'
            }`}
          >
            Repair requests
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            className={`pb-2 text-[15px] cursor-pointer transition-colors ${
              activeTab === 'contacts'
                ? 'text-[#0F766E] font-medium border-b-2 border-[#0F766E]'
                : 'text-[#5B5C5F]'
            }`}
          >
            Contact requests
          </button>
        </div>

        {activeTab === 'repairs' ? (
          <RepairsPanel authHeader={authHeader} />
        ) : (
          <ContactsPanel authHeader={authHeader} />
        )}
      </div>
    </div>
  )
}

const RepairsPanel = ({ authHeader }) => {
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchRequests = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${API_URL}/repair`, { headers: authHeader() })
      if (!res.ok) throw new Error('Failed to load')
      const data = await res.json()
      setRequests(data)
      setError(null)
    } catch {
      setError('Could not load repair requests')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchRequests() }, [])

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this repair request?')) return
    try {
      const res = await fetch(`${API_URL}/repair/${id}`, {
        method: 'DELETE',
        headers: authHeader()
      })
      if (!res.ok) throw new Error('Delete failed')
      setRequests(requests.filter(r => r._id !== id))
    } catch {
      alert('Could not delete request')
    }
  }

  return (
    <div>
      <p className="text-2xl font-bold text-[#0F766E] mb-4">Repair requests</p>

      {loading && <p className="text-sm text-[#5B5C5F]">Loading...</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}

      {!loading && !error && (
        <div className="w-full shadow-md shadow-[#0F766E]/20 border border-[#E5E7EB] text-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md/30 hover:shadow-[#0F766E]">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#E5E7EB] text-left bg-[#F0F0EF] hover:bg-[#F0F0EF] text-[#0F766E]">
                <th className="py-2 px-2 font-medium">Name</th>
                <th className="py-2 px-2 font-medium">Phone</th>
                <th className="py-2 px-2 font-medium">Model number</th>
                <th className="py-2 px-2 font-medium">Problem</th>
                <th className="py-2 px-2 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((r) => (
                <tr key={r._id} className="border-b hover:bg-[#F0F0EF] border-[#E5E7EB]">
                  <td className="py-2 px-2 text-[#1A1D22]">{r.name}</td>
                  <td className="py-2 px-2 text-[#5B5C5F]">{r.phone}</td>
                  <td className="py-2 px-2 text-[#5B5C5F]">{r.modelNumber}</td>
                  <td className="py-2 px-2 text-[#5B5C5F]">{r.problem}</td>
                  <td className="py-2 px-2 text-right">
                    <button
                      onClick={() => handleDelete(r._id)}
                      className="text-red-600 hover:text-red-700 cursor-pointer inline-flex"
                      title="Delete"
                    >
                      <TrashIcon />
                    </button>
                  </td>
                </tr>
              ))}
              {requests.length === 0 && (
                <tr><td colSpan={5} className="py-6 text-center text-[#5B5C5F]">No repair requests yet</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

const ContactsPanel = ({ authHeader }) => {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchContacts = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${API_URL}/contact`, { headers: authHeader() })
      if (!res.ok) throw new Error('Failed to load')
      const data = await res.json()
      setContacts(data)
      setError(null)
    } catch {
      setError('Could not load contact requests')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchContacts() }, [])

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this contact request?')) return
    try {
      const res = await fetch(`${API_URL}/contact/${id}`, {
        method: 'DELETE',
        headers: authHeader()
      })
      if (!res.ok) throw new Error('Delete failed')
      setContacts(contacts.filter(c => c._id !== id))
    } catch {
      alert('Could not delete request')
    }
  }

  return (
    <div>
      <p className="text-2xl font-bold text-[#0F766E] mb-4">Contact requests</p>

      {loading && <p className="text-sm text-[#5B5C5F]">Loading...</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}

      {!loading && !error && (
        <div className="w-full shadow-md shadow-[#0F766E]/20 border border-[#E5E7EB] text-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md/30 hover:shadow-[#0F766E]">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#E5E7EB] text-left bg-[#F0F0EF] hover:bg-[#F0F0EF] text-[#0F766E]">
                <th className="py-2 px-2 font-medium">Name</th>
                <th className="py-2 px-2 font-medium">Email</th>
                <th className="py-2 px-2 font-medium">Subject</th>
                <th className="py-2 px-2 font-medium">Enquiry type</th>
                <th className="py-2 px-2 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => (
                <tr key={c._id} className="border-b hover:bg-[#F0F0EF] border-[#E5E7EB]">
                  <td className="py-2 px-2 text-[#1A1D22]">{c.name}</td>
                  <td className="py-2 px-2 text-[#5B5C5F]">{c.email}</td>
                  <td className="py-2 px-2 text-[#5B5C5F]">{c.subject}</td>
                  <td className="py-2 px-2">
                    <span className="text-xs bg-[#0F766E]/10 text-[#0F766E] px-2 py-1 rounded-full">
                      {c.typeOfEnquiry}
                    </span>
                  </td>
                  <td className="py-2 px-2 text-right">
                    <button
                      onClick={() => handleDelete(c._id)}
                      className="text-red-600 hover:text-red-700 cursor-pointer inline-flex"
                      title="Delete"
                    >
                      <TrashIcon />
                    </button>
                  </td>
                </tr>
              ))}
              {contacts.length === 0 && (
                <tr><td colSpan={5} className="py-6 text-center text-[#5B5C5F]">No contact requests yet</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard