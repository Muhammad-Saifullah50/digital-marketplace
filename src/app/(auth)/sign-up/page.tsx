'use client'
import { Icons } from '@/components/Icons'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import AuthCredentialsValidator from '@/validations/AuthValidator'
import type { TAuthCredentialsValidator } from '@/types/AuthValidator'
import { trpc } from '@/trpc/client'

const Signup = () => {

  const {
    register, handleSubmit, formState: { errors } } = useForm<TAuthCredentialsValidator>({
      resolver: zodResolver(AuthCredentialsValidator)
    })

const {data} = trpc.anyApiRoute.useQuery()

  const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
    // send data to the server
  }
  return (<>
    <div className='container relative flex pt-20 flex-col items-center justfy-center lg:px-0'>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
        <div className=' flex-col flex items-center space-y-2 text-center'>
          <Icons.logo className='h-20 w-20' />
          <h1 className='text-2xl font-bold'>Create an account</h1>

          <Link
            className={buttonVariants({ variant: 'link', className: 'gap-1.5' })}
            href={'/signin'}>Already have an account? Sign In
            <ArrowRight className='h-4 w-4' />
          </Link>
        </div>

        <div className='grid gap-6'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid gap-2'>
              <div className='grid gap-1 py-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  {...register('email')}
                  className={cn({ 'focus-visible:ring-red-500': errors.email })}
                  placeholder='you@example.com' />
              </div>
              <div className='grid gap-1 py-2'>
                <Label htmlFor='password'>Password</Label>
                <Input
                  {...register('password')}
                  className={cn({ 'focus-visible:ring-red-500': errors.password })}
                  placeholder='Your password' />
              </div>

              <Button>Sign Up</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>)
}

export default Signup
