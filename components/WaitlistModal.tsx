"use client"

import { useState } from "react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { trackEvent } from "@/lib/analytics"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
  city: "dresden" | "leipzig"
  generation: string
}

export function WaitlistModal({ isOpen, onClose, city, generation }: WaitlistModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    fieldOfStudy: "",
    university: "",
    studiesFinished: "no", // "yes" or "no"
    // If finished:
    finishedYear: "",
    profession: "",
    company: "",
    // If not finished:
    semester: ""
  })

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Structure: waitlist/{city}/generations/{generation}/signups/{autoId}
      // Since 'generation' might be "Generation 8", we can just use the string safe for URLs
      const generationId = generation.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase() || "unknown"

      const signupRef = collection(db, "waitlist", city, "generations", generationId, "signups")

      const dataToSave = {
        city,
        generation,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        address: formData.address,
        fieldOfStudy: formData.fieldOfStudy,
        university: formData.university,
        studiesFinished: formData.studiesFinished === "yes",
        createdAt: serverTimestamp(),
        // Conditional fields
        ...(formData.studiesFinished === "yes" ? {
          finishedYear: formData.finishedYear,
          profession: formData.profession,
          company: formData.company,
        } : {
          semester: formData.semester,
        })
      }

      await addDoc(signupRef, dataToSave)

      trackEvent('waitlist_signup', 'application', `${city}_${generationId}`)

      setIsSuccess(true)

      // Auto close after 3 seconds
      setTimeout(() => {
        onClose()
        // Reset state for next time
        setTimeout(() => {
          setIsSuccess(false)
          setFormData({
            firstName: "", lastName: "", email: "", address: "",
            fieldOfStudy: "", university: "", studiesFinished: "no",
            finishedYear: "", profession: "", company: "", semester: ""
          })
        }, 300)
      }, 3000)

    } catch (err) {
      console.error("Error submitting to waitlist:", err)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm sm:items-center items-start overflow-y-auto pt-20 pb-10">
      <div
        className="w-full max-w-2xl bg-white rounded-3xl p-6 md:p-10 relative my-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-neutral-400 hover:text-black transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>

        {isSuccess ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-neutral-900">You're on the list!</h3>
            <p className="text-neutral-600 text-lg">
              We'll notify you as soon as applications for {generation || "the next generation"} open.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2 text-neutral-900">Join the Waitlist</h2>
              <p className="text-neutral-600">
                Signup for the waiting list for {generation ? `${generation} ` : ""}in {city === "dresden" ? "Dresden" : "Leipzig"}.
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700">First Name *</label>
                  <input required name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700">Last Name *</label>
                  <input required name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700">Email *</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" placeholder="jane@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700">Current Address *</label>
                <input required name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" placeholder="Street, ZIP, City" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700">Field of Study *</label>
                  <input required name="fieldOfStudy" value={formData.fieldOfStudy} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" placeholder="e.g. Computer Science" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700">University *</label>
                  <input required name="university" value={formData.university} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" placeholder="e.g. TU Dresden" />
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-100">
                <label className="text-sm font-bold text-neutral-700">Have you finished your studies? *</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer text-neutral-900">
                    <input type="radio" name="studiesFinished" value="no" checked={formData.studiesFinished === "no"} onChange={handleChange} className="w-5 h-5 text-primary focus:ring-primary" />
                    <span>No</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-neutral-900">
                    <input type="radio" name="studiesFinished" value="yes" checked={formData.studiesFinished === "yes"} onChange={handleChange} className="w-5 h-5 text-primary focus:ring-primary" />
                    <span>Yes</span>
                  </label>
                </div>
              </div>

              {/* Conditional Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-neutral-50 p-6 rounded-2xl border border-neutral-100 pb-8">
                {formData.studiesFinished === "yes" ? (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-neutral-700">Year Finished *</label>
                      <input required name="finishedYear" value={formData.finishedYear} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" placeholder="e.g. 2023" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-neutral-700">Current Profession *</label>
                      <input required name="profession" value={formData.profession} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" placeholder="e.g. Software Engineer" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-bold text-neutral-700">Company *</label>
                      <input required name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" placeholder="Current employer" />
                    </div>
                  </>
                ) : (
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-neutral-700">Current Semester *</label>
                    <input required type="number" min="1" max="20" name="semester" value={formData.semester} onChange={handleChange} className="w-full md:w-1/2 px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors" placeholder="e.g. 3" />
                  </div>
                )}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    "Join Waitlist"
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
