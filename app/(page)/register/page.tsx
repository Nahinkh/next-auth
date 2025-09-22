'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import axios from 'axios'
import { Eye, EyeOff } from 'lucide-react'
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'
import { FaFacebook, FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'sonner'

const RegisterPage = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [isLoading, setIsLoading] = useState(false)

    const validate = () => {
        const newErrors: Record<string, string> = {}

        if (!form.name.trim()) newErrors.name = "Name is required"
        if (!form.email) {
            newErrors.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Invalid email format"
        }

        if (!form.password) {
            newErrors.password = "Password is required"
        } else if (form.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters"
        }

        if (!form.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password"
        } else if (form.password !== form.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match"
        }

        return newErrors
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }
        try {
            setIsLoading(true)
            const res = await axios.post('/api/register', {
                name: form.name,
                email: form.email,
                password: form.password
            })
            if (res.status === 200 || res.status === 201) {
                toast.success("Registered successfully! Please log in.")
                // Redirect to login page or perform any other action
            }else{
                toast.error("Registration failed. Please try again.")
            }
            console.log(res)

        } catch (error) {
            console.error("Error registering user:", error)
        } finally {
            setForm({
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
            })
            setErrors({})
            setIsLoading(false)
        }

        console.log("Form Data:", form)
    }
    return (
        <div className="flex min-h-screen items-center justify-center  p-4">
            <Card className="w-full max-w-md shadow-xl">
                <CardHeader>
                    <CardTitle className="text-2xl text-center">Create Account</CardTitle>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name */}
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="John Doe"
                                value={form.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="john@example.com"
                                value={form.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                value={form.password}
                                onChange={handleChange}
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-2 top-5 h-6 w-6 p-0 text-gray-500"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </Button>
                            {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                        </div>

                        {/* Confirm Password */}
                        <div className="relative">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input
                                id="confirmPassword"
                                name="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="••••••••"
                                value={form.confirmPassword}
                                onChange={handleChange}
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-2 top-5 h-6 w-6 p-0 text-gray-500"
                            >
                                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </Button>
                            {errors.confirmPassword && (
                                <p className="text-sm text-red-500">{errors.confirmPassword}</p>
                            )}
                        </div>

                        {/* Submit */}
                        <Button disabled={isLoading}     type="submit" className="w-full">
                            {
                                isLoading ? 'Registering...' : 'Register'
                            }
                        </Button>
                    </form>
                </CardContent>

                {/* Social Login */}
                <CardFooter className="flex flex-col gap-2">
                    <p className="text-center text-sm text-gray-500">Or register with</p>
                    <div className="flex w-full flex-col gap-2">
                        <Button onClick={() => signIn("google")} variant="outline" className="w-full flex items-center gap-2">
                            <FcGoogle size={20} /> Register with Google
                        </Button>
                        <Button onClick={() => signIn("github")} variant="outline" className="w-full flex items-center gap-2">
                            <FaGithub size={20} /> Register with GitHub
                        </Button>
                        <Button onClick={() => signIn("facebook")} variant="outline" className="w-full flex items-center gap-2 text-blue-600">
                            <FaFacebook size={20} /> Register with Facebook
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default RegisterPage