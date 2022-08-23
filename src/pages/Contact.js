import { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  InputLeftAddon,
  Input,
  InputGroup,
  HStack,
  Textarea
} from '@chakra-ui/react'

export const Contact = (props) => {

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    textValue: '',
  })

  const { firstName, lastName, email, textValue } = form

  const onUpdateField = e => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(nextFormState)
  }

  const onSubmitForm = e => {
    e.preventDefault()
    alert('your email has been sent\n\n' + JSON.stringify(form, null, 2))
  }



  return (
    <>
      <Flex px='2' mt='2' align='start'>
        <Box border='1px' borderColor='gray.200' borderRadius='lg' p='2'>
          <Heading as='h2' size='lg' noOfLines={1} color='teal' >Contact</Heading>
          <Box as='form' onSubmit={onSubmitForm}>
            <HStack>
              <FormControl isRequired>
                <InputGroup p='1'>
                  <FormLabel htmlFor='firstName'> </FormLabel>
                  <InputLeftAddon minW='90px' children='Firstname' color='teal' />
                  <Input
                    required='required'
                    id='firstName'
                    name='firstName'
                    aria-label='firstname field'
                    value={firstName}
                    type='text'
                    placeholder='John'
                    onChange={onUpdateField}
                    isInvalid={firstName === '' ? true : false} />
                </InputGroup>
              </FormControl>
            </HStack>
            <FormControl isRequired>
              <InputGroup p='1'>
                <FormLabel htmlFor='lastName'> </FormLabel>
                <InputLeftAddon minW='90px' children='Lastname' color='teal' />
                <Input
                  required='required'
                  id='lastName'
                  name='lastName'
                  aria-label='lastname field'
                  value={lastName}
                  type='text'
                  placeholder='Doe'
                  onChange={onUpdateField}
                  isInvalid={lastName === '' ? true : false} />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup p='1'>
                <FormLabel htmlFor='email'> </FormLabel>
                <InputLeftAddon minW='90px' children='Email' color='teal' />
                <Input
                  required='required'
                  id='email'
                  name='email'
                  aria-label='email field'
                  value={email}
                  type='email'
                  placeholder='mail@xyz.com'
                  onChange={onUpdateField}
                  isInvalid={email === '' ? true : false} />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel pt='3' my='0' htmlFor='textValue'>Message</FormLabel>
              <Textarea
                minH='200px'
                required='required'
                id='textValue'
                name='textValue'
                value={textValue}
                mt='4'
                placeholder=' Your text here'
                size='md'
                h='150'
                isInvalid={textValue === '' ? true : false}
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
      </Flex>
    </>
  )
}

export default Contact