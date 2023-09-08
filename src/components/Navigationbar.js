import React from "react";
import { Flex, Box, Text, Link } from "rebass";
  
const Navbar = () => {
  return (
  
    <div id='gfg'>
      <Flex
        px={3}
        color='green'
        bg='red'
        alignItems='center'>
        <Text p={2} fontWeight='bold'>GeeksforGeeks</Text>
        <Box mx='auto' />
        <Link variant='nav' href='https://www.geeksforgeeks.org/'>
          GeeksforGeeks
        </Link> 
      </Flex>
  
    </div>
  );
};
  
export default Navbar;