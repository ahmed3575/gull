"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Clock, Shield, Star } from "lucide-react"

const taskTypes = [
  "Event Setup/Breakdown",
  "Moving/Lifting Heavy Items",
  "Garden/Outdoor Work",
  "Cleaning Tasks",
  "Warehouse/Storage Work",
  "Delivery Assistance",
  "General Labour",
  "Other (Please Specify)",
]

const timeSlots = [
  "Morning (8AM-12PM)",
  "Afternoon (12PM-5PM)",
  "Evening (5PM-9PM)",
  "Full Day (8AM-5PM)",
  "Custom Hours",
]

export default function BreezerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    taskType: "",
    customTask: "",
    helpersNeeded: "",
    date: "",
    timeSlot: "",
    customHours: "",
    location: "",
    duration: "",
    specialRequirements: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setSubmitted(true)
    setIsSubmitting(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (submitted) {
    return (
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card>
            <CardContent className="text-center py-12">
              <div className="text-green-600 text-6xl mb-6">✓</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Breezyeer Booking Submitted!</h1>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for your Breezyeer booking request. Our team will review your requirements and confirm
                availability within 2 hours.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
                <ul className="text-left text-gray-600 space-y-2">
                  <li>• We check helper availability for your date/time</li>
                  <li>• We match the right team for your task</li>
                  <li>• You'll receive confirmation within 2 hours</li>
                  <li>• Payment is taken on completion of work</li>
                </ul>
              </div>
              <p className="text-gray-600">
                Need immediate assistance? Call us at <strong>07398 395022</strong>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    )
  }

  return (
    <main className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Book Your Breezyeers</h1>
          <p className="text-xl text-gray-600 mb-8">
            Hire energetic young helpers for any task. From 1 to 20 Breezyeers available for your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Team Sizes</h3>
              <p className="text-gray-600">Choose from 1 to 20 helpers based on your needs</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Same Day Available</h3>
              <p className="text-gray-600">Last-minute bookings welcome, subject to availability</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
              <p className="text-gray-600">All Breezyeers are insured and background checked</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-6 w-6 mr-2 text-blue-600" />
                Book Your Breezyeers
              </CardTitle>
              <CardDescription>Fill out the form to request your team of helpers</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Task Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="taskType" className="block text-sm font-medium text-gray-700 mb-1">
                      Type of Task *
                    </label>
                    <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, taskType: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select task type" />
                      </SelectTrigger>
                      <SelectContent>
                        {taskTypes.map((task) => (
                          <SelectItem key={task} value={task}>
                            {task}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="helpersNeeded" className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Helpers *
                    </label>
                    <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, helpersNeeded: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="How many helpers?" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} Helper{num > 1 ? "s" : ""}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {formData.taskType === "Other (Please Specify)" && (
                  <div>
                    <label htmlFor="customTask" className="block text-sm font-medium text-gray-700 mb-1">
                      Please specify your task *
                    </label>
                    <Input
                      id="customTask"
                      name="customTask"
                      value={formData.customTask}
                      onChange={handleInputChange}
                      placeholder="Describe what you need help with"
                      required
                    />
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date *
                    </label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-700 mb-1">
                      Time Slot *
                    </label>
                    <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, timeSlot: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {formData.timeSlot === "Custom Hours" && (
                  <div>
                    <label htmlFor="customHours" className="block text-sm font-medium text-gray-700 mb-1">
                      Specify custom hours *
                    </label>
                    <Input
                      id="customHours"
                      name="customHours"
                      value={formData.customHours}
                      onChange={handleInputChange}
                      placeholder="e.g., 10AM - 3PM"
                      required
                    />
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Location/Postcode *
                    </label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Where do you need help?"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                      Expected Duration
                    </label>
                    <Input
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      placeholder="e.g., 4 hours"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700 mb-1">
                    Special Requirements
                  </label>
                  <Input
                    id="specialRequirements"
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleInputChange}
                    placeholder="Any specific skills or equipment needed?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Any additional details about your task..."
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
                  {isSubmitting ? "Submitting Booking Request..." : "Book My Breezyeers"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Pricing Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Per Helper (Hourly Rate)</span>
                    <span className="font-semibold text-blue-600">£12/hour</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Minimum Booking</span>
                    <span className="font-semibold">2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Same Day Booking</span>
                    <span className="font-semibold">+£5 per helper</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Example: 4 helpers × 4 hours</span>
                      <span className="text-blue-600">£192</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What Our Breezyeers Can Help With</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Event setup and breakdown</li>
                  <li>• Moving furniture and heavy items</li>
                  <li>• Garden clearance and landscaping</li>
                  <li>• Warehouse and storage tasks</li>
                  <li>• Cleaning and organising</li>
                  <li>• Delivery assistance</li>
                  <li>• General labour and odd jobs</li>
                  <li>• And much more!</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      "Booked 6 Breezyeers for our office move. They were fantastic - energetic, professional, and got
                      the job done quickly!"
                    </p>
                    <p className="text-sm font-semibold mt-1">- Sarah M.</p>
                  </div>
                  <div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      "Needed help with garden clearance. The team of 3 Breezyeers worked non-stop and cleared
                      everything in half the time I expected."
                    </p>
                    <p className="text-sm font-semibold mt-1">- Mike T.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
