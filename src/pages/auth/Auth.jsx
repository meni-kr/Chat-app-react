import Background from '@/assets/login2.png'
import Victory from '@/assets/victory.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { login, signup } from '@/store/actions/user.action'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export function Auth() {
    const navigate = useNavigate()
    const [nickName, setNickName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function signupValidate() {
        if (!nickName.length) {
            toast.error("nickName is required")
            return false
        }
        if (!email.length) {
            toast.error("Email is required")
            return false
        }
        if (!password.length) {
            toast.error("Password is required")
            return false
        }
        if (password !== confirmPassword) {
            toast.error("Passwords do not match")
            return false
        }
        return true
    }

    function loginValidate(){
        if (!email.length) {
            toast.error("Email is required")
            return false
        }
        if (!password.length) {
            toast.error("Password is required")
            return false
        }
        return true
    }

    async function handleLogin() {
        if(loginValidate()){
            const res = await login({email,password})
            if (res.success){
                res.user.profileSetup? navigate("/chat") : navigate("/profile")
            }
        }
    }

    async function handleSignup() {
        if (signupValidate()) {
            const res = await signup({nickName, email, password })
            if (res.success){
                navigate("/profile")
            }
        }
    }

    return (
        <div className="h-[100vh] w-[100vw] flex items-center justify-center">
            <div
                className="h-[80vh] w-[80vw] bg-white 
                border-2 border-white text-opacity-90 shadow-2xl 
                md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
                <div className="flex flex-col gap-10 items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center">
                            <h1 className="text-5xl font-bold md:text-6xl">welcome</h1>
                            <img src={Victory} alt="Victory Emoji" className='h-[100px]' />
                        </div>
                        <p className='font-medium text-center'> Fill in the details to get started with the best Chat App</p>
                    </div>
                    <div className='flex items-center justify-center w-full'>
                        <Tabs className='w-3/4' defaultValue='login'>
                            <TabsList className='bg-transparent rounded-none w-full'>
                                <TabsTrigger value="login"
                                    className="
                               data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black 
                               data-[state=active]:font-semibold
                               data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">Login</TabsTrigger>
                                <TabsTrigger value="signup"
                                    className="
                               data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black 
                               data-[state=active]:font-semibold
                               data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
                                >Signup</TabsTrigger>
                            </TabsList>
                            <TabsContent className="flex flex-col gap-5 mt-10" value="login">
                                <Input
                                    placeholder='Email'
                                    type='email'
                                    className='rounded-full p-6'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input
                                    placeholder='Password'
                                    type='password'
                                    className='rounded-full p-6'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Button className='rounded-full p-6' onClick={handleLogin}>Login</Button>
                            </TabsContent>
                            <TabsContent className="flex flex-col gap-5" value="signup">
                                <Input
                                    placeholder='NickName'
                                    type='nickName'
                                    className='rounded-full p-6'
                                    value={nickName}
                                    onChange={(e) => setNickName(e.target.value)}
                                />
                                <Input
                                    placeholder='Email'
                                    type='email'
                                    className='rounded-full p-6'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input
                                    placeholder='Password'
                                    type='password'
                                    className='rounded-full p-6'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Input
                                    placeholder='Confirm Password'
                                    type='password'
                                    className='rounded-full p-6'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <Button className='rounded-full p-6' onClick={handleSignup}>Signup</Button>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
                <div className='hidden xl:flex justify-center items-center'>
                    <img src={Background} alt="background login" className='h-[700px]' />
                </div>
            </div>
        </div>
    )
}