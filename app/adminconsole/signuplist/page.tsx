"use client"

import { useState, useEffect } from "react"
import { collection, addDoc, serverTimestamp, collectionGroup, getDocs } from "firebase/firestore"
import { db } from "@/lib/firebase"
import * as xlsx from "xlsx"

interface WaitlistSignup {
  id: string
  city: string
  generation: string
  firstName: string
  lastName: string
  email: string
  address: string
  fieldOfStudy: string
  university: string
  studiesFinished: boolean
  createdAt: Date
  finishedYear?: string
  profession?: string
  company?: string
  semester?: string
}

export default function AdminSignupList() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  // Auth Form State
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [authError, setAuthError] = useState("")
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const [signups, setSignups] = useState<WaitlistSignup[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  // Filtering State
  const [filterCity, setFilterCity] = useState<string>("All")
  const [filterGeneration, setFilterGeneration] = useState<string>("All")

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 15

  // Clear auth on unmount (refresh inherently clears state in React)
  useEffect(() => {
    return () => {
      setIsAuthenticated(false)
    }
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsAuthenticating(true)
    setAuthError("")

    try {
      // Hardcoded credentials match
      if (username === "yeti_signup_waitlist" && password === "Fuckyou") {
        // Log access
        await addDoc(collection(db, "credentials/waitlist/logins"), {
          timestamp: serverTimestamp(),
          username: username,
          userAgent: navigator.userAgent
        })
        
        setIsAuthenticated(true)
        fetchSignups()
      } else {
        // Log failed attempt
        await addDoc(collection(db, "credentials/waitlist/logins"), {
          timestamp: serverTimestamp(),
          username: username,
          status: "failed",
          userAgent: navigator.userAgent
        })
        setAuthError("Invalid username or password")
      }
    } catch (err) {
      console.error("Login logging failed:", err)
      setAuthError("An error occurred. Please try again.")
    } finally {
      setIsAuthenticating(false)
    }
  }

  const fetchSignups = async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Use collection group query to get all 'signups' collections deeply nested in 'waitlist'
      const signupsQuery = collectionGroup(db, 'signups')
      const querySnapshot = await getDocs(signupsQuery)
      
      const fetchedSignups: WaitlistSignup[] = []
      
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        // Try to extract city and generation from the path if they aren't explicitly in the document
        // Path format: waitlist/{city}/generations/{generation}/signups/{id}
        const pathParts = doc.ref.path.split('/')
        const city = data.city || (pathParts.length >= 2 ? pathParts[1] : 'Unknown')
        const generation = data.generation || (pathParts.length >= 4 ? pathParts[3] : 'Unknown')
        
        fetchedSignups.push({
          id: doc.id,
          city,
          generation,
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          email: data.email || '',
          address: data.address || '',
          fieldOfStudy: data.fieldOfStudy || '',
          university: data.university || '',
          studiesFinished: !!data.studiesFinished,
          finishedYear: data.finishedYear,
          profession: data.profession,
          company: data.company,
          semester: data.semester,
          createdAt: data.createdAt?.toDate() || new Date()
        })
      })

      // Sort by creation date descending
      fetchedSignups.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      
      setSignups(fetchedSignups)
    } catch (err) {
      console.error("Error fetching signups:", err)
      setError("Failed to load signups. Check your Firebase security rules or connection.")
    } finally {
      setIsLoading(false)
    }
  }

  const formatCity = (city: string) => city.charAt(0).toUpperCase() + city.slice(1)
  const formatGeneration = (gen: string) => {
    return gen.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [filterCity, filterGeneration])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-28 pb-12 bg-black flex items-center justify-center px-4 md:px-8 selection:bg-primary/30">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">Admin Portal</h1>
            <p className="text-neutral-500">Waitlist Management</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            {authError && (
              <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
                {authError}
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-neutral-700">Username</label>
              <input 
                required 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" 
                placeholder="Enter admin username" 
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-neutral-700">Password</label>
              <input 
                required 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" 
                placeholder="Enter password" 
              />
            </div>

            <button 
              type="submit" 
              disabled={isAuthenticating}
              className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
            >
              {isAuthenticating ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Authenticating...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>
      </div>
    )
  }

  // Derive available filter options from the raw data
  const availableCities = Array.from(new Set(signups.map(s => s.city.toLowerCase())))
  const availableGenerations = Array.from(new Set(signups.map(s => s.generation.toLowerCase())))

  // Filter the data based on selection
  const filteredSignups = signups.filter(s => {
    const cityMatch = filterCity === "All" || s.city.toLowerCase() === filterCity.toLowerCase()
    const genMatch = filterGeneration === "All" || s.generation.toLowerCase() === filterGeneration.toLowerCase()
    return cityMatch && genMatch
  })

  const exportToExcel = () => {
    if (filteredSignups.length === 0) return

    // Prepare data for Excel
    const excelData = filteredSignups.map(s => ({
      "Date": s.createdAt.toLocaleDateString(),
      "Time": s.createdAt.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      "City": formatCity(s.city),
      "Generation": formatGeneration(s.generation),
      "First Name": s.firstName,
      "Last Name": s.lastName,
      "Email": s.email,
      "Address": s.address,
      "Field of Study": s.fieldOfStudy,
      "University": s.university,
      "Status": s.studiesFinished ? "Graduated" : "Student",
      "Graduation Year": s.finishedYear || "-",
      "Profession": s.profession || "-",
      "Company": s.company || "-",
      "Semester": s.semester || "-"
    }))

    const worksheet = xlsx.utils.json_to_sheet(excelData)
    const workbook = xlsx.utils.book_new()
    xlsx.utils.book_append_sheet(workbook, worksheet, "Waitlist Signups")
    
    // Format name: Dresden Generation_8_2026-03-14
    const cityStr = filterCity === "All" ? "All_Cities" : formatCity(filterCity)
    const genStr = filterGeneration === "All" ? "All_Generations" : formatGeneration(filterGeneration)
    const dateStr = new Date().toISOString().split('T')[0]
    const fileName = `${cityStr}_${genStr.replace(' ', '_')}_${dateStr}.xlsx`
    
    xlsx.writeFile(workbook, fileName)
  }

  // Pagination Logic
  const totalPages = Math.ceil(filteredSignups.length / itemsPerPage)
  const paginatedSignups = filteredSignups.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  // Render Dashboard
  const groupedSignups = paginatedSignups.reduce((acc, current) => {
    const key = `${current.city}-${current.generation}`
    if (!acc[key]) {
      acc[key] = {
        city: current.city,
        generation: current.generation,
        items: []
      }
    }
    acc[key].items.push(current)
    return acc
  }, {} as Record<string, { city: string, generation: string, items: WaitlistSignup[] }>)

  const groups = Object.values(groupedSignups)

  return (
    <div className="min-h-screen pt-28 pb-12 bg-neutral-50 px-4 md:px-8 font-sans selection:bg-primary/30">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-neutral-100">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">Waitlist Signups</h1>
            <p className="text-neutral-500 mt-1">Found {filteredSignups.length} {filteredSignups.length === 1 ? 'signup' : 'signups'}</p>
          </div>
          
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 w-full lg:w-auto">
            {/* Filters */}
            <div className="flex items-center gap-3 bg-neutral-50 p-2 rounded-2xl border border-neutral-100 flex-1 sm:flex-initial">
              <select 
                value={filterCity}
                onChange={(e) => setFilterCity(e.target.value)}
                className="bg-white border border-neutral-200 text-neutral-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer min-w-[120px]"
              >
                <option value="All">All Cities</option>
                {/* Always show Dresden and Leipzig as requested, regardless if there is data currently */}
                <option value="dresden">Dresden</option>
                <option value="leipzig">Leipzig</option>
                {/* Add any other cities dynamically if they ever appear in DB */}
                {availableCities.filter(c => c !== 'dresden' && c !== 'leipzig').map(city => (
                  <option key={city} value={city}>{formatCity(city)}</option>
                ))}
              </select>

              <select 
                value={filterGeneration}
                onChange={(e) => setFilterGeneration(e.target.value)}
                className="bg-white border border-neutral-200 text-neutral-900 text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer min-w-[160px]"
              >
                <option value="All">All Generations</option>
                {availableGenerations.map(gen => (
                  <option key={gen} value={gen}>{formatGeneration(gen)}</option>
                ))}
              </select>
            </div>

            <div className="h-8 w-px bg-neutral-200 hidden sm:block"></div>

            {/* Actions */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full sm:w-auto mt-2 sm:mt-0">
              <button 
                onClick={exportToExcel}
                disabled={filteredSignups.length === 0}
                className="flex-1 sm:flex-initial px-5 py-2.5 bg-green-50 hover:bg-green-100 text-green-700 font-bold rounded-full transition-colors flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                Export Excel
              </button>
              
              <button 
                onClick={fetchSignups}
                className="p-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded-full transition-colors flex items-center justify-center"
                title="Refresh Data"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
              </button>
              
              <button 
                onClick={() => setIsAuthenticated(false)}
                className="p-2.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-full transition-colors flex items-center justify-center"
                title="Log Out"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
              </button>
            </div>
          </div>
        </header>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center p-20">
            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4"></div>
            <p className="text-neutral-500 font-medium">Loading waitlist data...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-100 rounded-3xl p-8 text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
            </div>
            <h3 className="text-xl font-bold text-red-900 mb-2">Data Fetch Failed</h3>
            <p className="text-red-600">{error}</p>
          </div>
        ) : groups.length === 0 ? (
          <div className="bg-white border text-center border-neutral-100 rounded-3xl p-20 shadow-sm">
            <div className="w-20 h-20 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-6 text-neutral-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 14h6"/><path d="M9 10h6"/><path d="M9 18h6"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">No signups found</h3>
            <p className="text-neutral-500 text-lg">Waitlist form submissions will appear here.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {groups.map((group, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-sm border border-neutral-100 overflow-hidden">
                <div className="px-8 py-6 bg-gradient-to-r from-neutral-50 to-white border-b border-neutral-100 flex items-center gap-4">
                  <div className="bg-primary/10 text-primary font-bold px-4 py-2 rounded-xl">
                    {formatCity(group.city)}
                  </div>
                  <div className="bg-neutral-100 text-neutral-700 font-bold px-4 py-2 rounded-xl">
                    {formatGeneration(group.generation)}
                  </div>
                  <div className="ml-auto text-neutral-500 font-medium whitespace-nowrap">
                    {group.items.length} {group.items.length === 1 ? 'signup' : 'signups'}
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-white border-b border-neutral-100">
                        <th className="px-8 py-4 text-xs font-bold text-neutral-400 uppercase tracking-wider">Date</th>
                        <th className="px-8 py-4 text-xs font-bold text-neutral-400 uppercase tracking-wider">Name</th>
                        <th className="px-8 py-4 text-xs font-bold text-neutral-400 uppercase tracking-wider">Email & Address</th>
                        <th className="px-8 py-4 text-xs font-bold text-neutral-400 uppercase tracking-wider">Education</th>
                        <th className="px-8 py-4 text-xs font-bold text-neutral-400 uppercase tracking-wider">Status Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-50">
                      {group.items.map((item) => (
                        <tr key={item.id} className="hover:bg-neutral-50/50 transition-colors">
                          <td className="px-8 py-6 align-top whitespace-nowrap">
                            <div className="text-sm font-medium text-neutral-900">
                              {item.createdAt.toLocaleDateString()}
                            </div>
                            <div className="text-sm text-neutral-400">
                              {item.createdAt.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                            </div>
                          </td>
                          <td className="px-8 py-6 align-top">
                            <div className="font-bold text-neutral-900">{item.firstName} {item.lastName}</div>
                          </td>
                          <td className="px-8 py-6 align-top">
                            <a href={`mailto:${item.email}`} className="text-primary hover:underline font-medium mb-1 block">
                              {item.email}
                            </a>
                            <div className="text-sm text-neutral-500 whitespace-pre-wrap leading-relaxed max-w-xs">{item.address}</div>
                          </td>
                          <td className="px-8 py-6 align-top">
                            <div className="font-medium text-neutral-900 mb-1">{item.fieldOfStudy}</div>
                            <div className="text-sm text-neutral-500">{item.university}</div>
                          </td>
                          <td className="px-8 py-6 align-top">
                            {item.studiesFinished ? (
                              <div className="space-y-1">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-2">
                                  Graduated ({item.finishedYear})
                                </span>
                                <div className="text-sm font-medium text-neutral-900">{item.profession}</div>
                                <div className="text-sm text-neutral-500">at {item.company}</div>
                              </div>
                            ) : (
                              <div className="space-y-1">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-2">
                                  Student
                                </span>
                                <div className="text-sm font-medium text-neutral-900">Semester {item.semester}</div>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between pt-8 pb-4">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-6 py-3 bg-white border border-neutral-200 text-neutral-700 font-bold rounded-xl hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
                >
                  Previous
                </button>
                <span className="text-neutral-500 font-medium bg-white px-6 py-3 rounded-xl border border-neutral-100 shadow-sm">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-6 py-3 bg-white border border-neutral-200 text-neutral-700 font-bold rounded-xl hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
