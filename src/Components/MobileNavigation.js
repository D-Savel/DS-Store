import { Box, Fade, Button, IconButton, useDisclosure } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
const MobileNavigation = ({ children }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button
        as={IconButton}
        aria-label="Open mobile menu"
        icon={<HamburgerIcon />}
        variant="outline"
        onClick={onToggle}
        ml="1"
      >
      </Button>
      <Box position="absolute" right="0" left="0" top="100%">
        <Fade in={isOpen} unmountOnExit={true}>
          {children}
        </Fade>
      </Box>
    </>
  )
}
export default MobileNavigation