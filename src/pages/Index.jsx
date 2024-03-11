import { Box, Container, Flex, Heading, Text, Button, Image, VStack, HStack, Icon, Link } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope, FaUserGraduate, FaBriefcase, FaLaptopCode } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" my={8}>
        <VStack align={{ base: "center", md: "flex-start" }} textAlign={{ base: "center", md: "left" }}>
          <Heading as="h1" size="xl" fontWeight="bold">
            Elbridge Gerry
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Full Stack Developer & Open Source Enthusiast
          </Text>
          <HStack spacing={4} mt={4}>
            <Link href="https://linkedin.com/in/elbridgegerry" isExternal>
              <Button leftIcon={<FaLinkedin />} colorScheme="blue">
                LinkedIn
              </Button>
            </Link>
            <Link href="https://github.com/elbridgegerry" isExternal>
              <Button leftIcon={<FaGithub />} colorScheme="gray">
                GitHub
              </Button>
            </Link>
            <Button leftIcon={<FaEnvelope />} colorScheme="green" onClick={() => (window.location = "mailto:elbridge.gerry@example.com")}>
              Contact
            </Button>
          </HStack>
        </VStack>
        <Box boxSize="sm" mt={{ base: 4, md: 0 }} borderRadius="full" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1630529351114-d38ab5e0992f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxFbGJyaWRnZSUyMEdlcnJ5fGVufDB8fHx8MTcxMDEyMjc1NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Elbridge Gerry" />
        </Box>
      </Flex>

      <VStack spacing={8} my={8}>
        <Box w="full">
          <Heading as="h2" size="lg" mb={4}>
            <Icon as={FaUserGraduate} w={6} h={6} mr={2} />
            Education
          </Heading>
          <Text fontSize="md" color="gray.700">
            Master of Science in Computer Science
            <br />
            XYZ University, 2017 - 2019
          </Text>
        </Box>

        <Box w="full">
          <Heading as="h2" size="lg" mb={4}>
            <Icon as={FaBriefcase} w={6} h={6} mr={2} />
            Experience
          </Heading>
          <Text fontSize="md" color="gray.700">
            Senior Software Engineer at TechCorp
            <br />
            June 2019 - Present
          </Text>
        </Box>

        <Box w="full">
          <Heading as="h2" size="lg" mb={4}>
            <Icon as={FaLaptopCode} w={6} h={6} mr={2} />
            Projects
          </Heading>
          <Text fontSize="md" color="gray.700">
            Open Source Contributions
            <br />
            Various contributions to open source projects including React, Vue.js, and Node.js.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
