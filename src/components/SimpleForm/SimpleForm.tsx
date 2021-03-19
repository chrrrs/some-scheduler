import { Button } from '@chakra-ui/button'
import { Input, InputProps } from '@chakra-ui/input'
import { Box, Container, SimpleGrid } from '@chakra-ui/layout'
import React, { FC, FormEventHandler } from 'react'

export interface SimpleFormProps {
  handleSubmit: FormEventHandler<HTMLFormElement>
  inputs: InputProps[]
}

const SimpleForm: FC<SimpleFormProps> = (props) => {
  const { handleSubmit, inputs, children } = props
  return (
    <Container >
      <form onSubmit={handleSubmit}>
        <SimpleGrid columns={1} spacingY="4">
          {inputs.map((inputProps, index) => <Input key={index} {...inputProps} />)}
          <Box>
            {children && children}
            {!children && <Button type="submit">Submit</Button>}
          </Box>
        </SimpleGrid>
      </form>
    </Container>
  )
}

export default SimpleForm
