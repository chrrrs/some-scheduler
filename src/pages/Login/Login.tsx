import React, { FC, FormEvent, useState } from 'react'
import { Box, Button, InputProps, Link } from '@chakra-ui/react'
import { SimpleForm } from '../../components/SimpleForm'
import { ROUTES } from '../../utils/routes'
import { Link as RouterLink } from "react-router-dom"

export interface LoginProps { }

const inputs: InputProps[] = [
  {
    placeholder: "Email"
  },
  {
    placeholder: "Password"
  },
]

const Login: FC<LoginProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
  }


  return (
    <>
      <SimpleForm handleSubmit={handleSubmit} inputs={inputs}>
        <Box d="flex" alignItems="center" flexWrap="wrap">
          <Button isLoading={isLoading} type="submit" mr="4">Login</Button>
          <Link as={RouterLink} to={ROUTES.SIGNUP} color="gray.500" size="xs">No account?</Link>
        </Box>
      </SimpleForm>
    </>
  )
}

export default Login
