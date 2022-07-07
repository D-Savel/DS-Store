import { useState } from 'react'
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Heading,
  InputLeftAddon,
  Input,
  InputGroup,
  HStack,
  Stack,
  Textarea
} from '@chakra-ui/react'

function Contact(props) {

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    textValue: "",
  })

  const onUpdateField = e => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(nextFormState)
  }

  const onSubmitForm = e => {
    e.preventDefault()
    alert("your email has been sent\n\n" + JSON.stringify(form, null, 2))
  }



  return (
    <>
      <Container maxW='md' mt='2'>
        <Box border='1px' borderColor='gray.200' borderRadius='lg' p='2'>
          <Heading as='h2' size='lg' noOfLines={1} color='teal' >Contact</Heading>
          <Box as="form" onSubmit={onSubmitForm}>
            <HStack>
              <FormControl isRequired>
                <InputGroup p='1'>
                  <FormLabel htmlFor="firstName"> </FormLabel>
                  <InputLeftAddon minWidth='100' children='Firstname' color='teal' />
                  <Input
                    required='required'
                    id='firstName'
                    name='firstName'
                    aria-label="firstname field"
                    value={form.firstName}
                    type='text'
                    placeholder='John'
                    onChange={onUpdateField}
                    isInvalid={form.firstName === "" ? true : false} />
                </InputGroup>
              </FormControl>
            </HStack>
            <FormControl isRequired>
              <InputGroup p='1'>
                <FormLabel htmlFor="lastName"> </FormLabel>
                <InputLeftAddon minWidth='100' children='Lastname' color='teal' />
                <Input
                  required='required'
                  id='lastName'
                  name='lastName'
                  aria-label="lastname field"
                  value={form.lastName}
                  type='text'
                  placeholder='Doe'
                  onChange={onUpdateField}
                  isInvalid={form.lastName === "" ? true : false} />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup p='1'>
                <FormLabel htmlFor="email"> </FormLabel>
                <InputLeftAddon minWidth='100' children='Email' color='teal' />

                <Input
                  required='required'
                  id='email'
                  name='email'
                  aria-label="email field"
                  value={form.email} type='email'
                  placeholder='mail@xyz.com'
                  onChange={onUpdateField}
                  isInvalid={form.email === "" ? true : false} />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel pt="3" my="0" htmlFor="textValue">Message</FormLabel>
              <Textarea
                required='required'
                id='textValue'
                mt='2'
                aria-label="text field"
                name='textValue'
                value={form.textValue}
                type='text'
                placeholder='Your text here'
                size='md'
                h='150'
                isInvalid={form.textValue === "" ? true : false}
                onChange={onUpdateField}
              />
            </FormControl>
            <Button
              type='submit'
              mt='4'
              loadingText='Submitting'
              colorScheme='teal'
              variant='outline'
            >Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Contact