"use client"
import { Box } from '@chakra-ui/react'
import React, { useState } from 'react';

import ColorPicker from './color';


export default function Home() {
  const handleColorChange = (color: string, boxIndex: number) => {
    console.log(`Color changed for Box ${boxIndex + 1}: ${color}`);
    // Handle color change logic as needed
  };
  return (
    <>
    
      {/* <Box p={4}>
        <ColorPicker onColorChange={handleColorChange} />
      </Box>
     */}

<ColorPicker onColorChange={handleColorChange} />
        <Box display="flex" justifyContent="center">
          {[0, 1, 2].map((index) => (
            <Box key={index} h="50px" w="50px" ml={2} />
          ))}
        </Box>
    </>
  )
}
