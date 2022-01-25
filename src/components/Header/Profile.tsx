import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box>
                    <Text>João Victor</Text>
                    <Text
                        color="gray.300"
                        fontSize="small">
                        joaovictorfoseca@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="João Victor" src="https://github.com/joao-victor-fonseca.png" />
        </Flex>
    );
}