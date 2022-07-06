import {
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputLeftAddon,
  Input,
  InputGroup,
  Stack,
  Textarea
} from '@chakra-ui/react'

function Contact(props) {

  return (
    <>
      <Container maxW='md'>
        <h1>Contact</h1>
        <Stack>
          <FormControl>
            <InputGroup >
              <InputLeftAddon width='100' children='Firstname' />
              <Input id='firstName' type='text' placeholder='John' w='150' />
            </InputGroup>
            <InputGroup >
              <InputLeftAddon width='100' children='Lastname' />
              <Input id='lastName' type='text' placeholder='Doe' w='150' />
            </InputGroup>
            <InputGroup >
              <InputLeftAddon minWidth='100' children='Mail' />
              <Input id='email' type='email' placeholder='mail@xyz.com' w='150' />
            </InputGroup>
            <Button
              mt='2'
              loadingText='Submitting'
              colorScheme='teal'
              variant='outline'
            >Submit
            </Button>
          </FormControl>
        </Stack>
      </Container>
    </>
  )
}

export default Contact