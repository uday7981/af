'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronRight } from "lucide-react"


export function SignUpPageComponent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    investmentGoal: '',
    position: '',
    country: '',
    mobile: '',
    referralId: '',
    sponsor: '',
    otp: ''
  });
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();

        // Sorting and placing India first
        const countryList = data
          .map((country: { name: { common: string } }) => country.name.common)
          .sort();

        // Remove India if it's in the sorted list and then add it at the start
        const filteredCountries = countryList.filter(country => country !== 'India');
        setCountries(['India', ...filteredCountries]);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f9f9f9]"
      style={{
        backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}>
      {/* Lottie Animation */}
      <div className="hidden md:flex flex-col w-full md:w-1/2 items-center justify-center p-12">
        <iframe
          src="https://lottie.host/embed/378478f9-3ef4-4241-a618-eee3776b51bb/RjCUc4EiOt.json"
          className="w-full h-[80vh] max-w-[600px] max-h-[80vh] rounded-lg"
        ></iframe>
        <h1 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#201f6b] to-[#4b6cb7] mt-4 tracking-wide font-montserrat">
          Expanding the Horizon of Hedge Fund!
        </h1>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg">
          <div className="flex justify-center mb-8">
            <img src="https://alieusfund.com/assets/wp-content/uploads/2024/02/logo-8.png" alt="Alieus Fund" className="h-12 w-auto" />
          </div>
          <h1 className="text-2xl font-semibold text-center mb-8 text-[#201f6b]">Create Your Account</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="text-[#201f6b]">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="text-black"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-[#201f6b]">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="text-black"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-[#201f6b]">Email ID</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Email ID"
                required
                value={formData.email}
                onChange={handleChange}
                className="text-black"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="country" className="text-[#201f6b]">Country</Label>
                <select
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className={`${formData.country === "" ? "text-gray-500" : "text-black"} w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#201f6b]`}
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="mobile" className="text-[#201f6b]">Mobile No</Label>
                <Input
                  id="mobile"
                  name="mobile"
                  placeholder="Enter Mobile No"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="text-black"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="referralId" className="text-[#201f6b]">Referral ID</Label>
                <Input
                  id="referralId"
                  name="referralId"
                  placeholder="Enter Referral ID"
                  required
                  value={formData.referralId}
                  onChange={handleChange}
                  className="text-black"
                />
              </div>
              <div>
                <Label htmlFor="sponsor" className="text-[#201f6b]">Sponsor</Label>
                <Input
                  id="sponsor"
                  name="sponsor"
                  placeholder="Enter Sponsor Name"
                  required
                  value={formData.sponsor}
                  onChange={handleChange}
                  className="text-black"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="position" className="text-[#201f6b]">Position</Label>
                <select
                  id="position"
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleChange}
                  className={`${formData.position === "" ? "text-gray-500" : "text-black"} w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#201f6b]`}
                >
                  <option value="" disabled>Select Position</option>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                </select>
              </div>
              <div>
                <Label htmlFor="otp" className="text-[#201f6b]">OTP</Label>
                <Input
                  id="otp"
                  name="otp"
                  placeholder="Enter OTP"
                  required
                  value={formData.otp}
                  onChange={handleChange}
                  className="text-black"
                />
              </div>
            </div>

            <div className="flex items-center mt-6">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
                className="mr-2 h-4 w-4"
              />
              <Label htmlFor="terms" className="text-sm text-gray-600">
                I have read and agree to the Terms & Conditions
              </Label>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4 mt-6">
              <Button type="button" className="w-full mb-2 sm:mb-0">
                Send OTP <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button type="submit" className="w-full">
                Sign Up <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <a href="#" className="text-[#282681] hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
