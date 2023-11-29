import { SignInButtonProps } from '@/types'
import { signIn } from 'next-auth/react'

const SignInButton = ({providerId} : SignInButtonProps) => {
  return (
    <button type="button" onClick={() => signIn(providerId, { callbackUrl: '/' })} className="normalButton w-full mt-6" >Sign In</button>
  )
}

export default SignInButton