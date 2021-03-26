import React, { FC, FormEvent, useState } from 'react'
import { Box, Button, InputProps, Link } from '@chakra-ui/react'
import { SimpleForm } from '../../components/SimpleForm'
import { ROUTES } from '../../utils/routes'
import { Link as RouterLink } from "react-router-dom"

export interface SignUpProps { }

const inputs: InputProps[] = [
  {
    placeholder: "Email"
  },
  {
    placeholder: "Name"
  },
  {
    placeholder: "Password"
  },
  {
    placeholder: "Repeat Password"
  },
]

const SignUp: FC<SignUpProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
  }


  return (
    <>
      <SimpleForm handleSubmit={handleSubmit} inputs={inputs}>
        <Box d="flex" alignItems="center" flexWrap="wrap">
          <Button isLoading={isLoading} type="submit" mr="4">Sign Up</Button>
          <Link as={RouterLink} to={ROUTES.LOGIN} color="gray.500" size="xs">Already have an account?</Link>
        </Box>
      </SimpleForm>
    </>
  )
}

export default SignUp
