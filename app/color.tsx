import React, { useState, useCallback } from 'react';
import { Box, Flex, Circle } from '@chakra-ui/react';
import { ChromePicker, ColorResult } from 'react-color';

interface ColorPickerProps {
  onColorChange: (color: string, boxIndex: number) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onColorChange }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>('#000000');
  const [boxColors, setBoxColors] = useState<string[]>(['#000000', '#000000', '#000000']);
  const [currentBoxIndex, setCurrentBoxIndex] = useState<number>(0);

  const handleColorChange = useCallback(
    (color: ColorResult) => {
      const newColor = color.hex;
      setSelectedColor(newColor);
      setBoxColors((prevColors) => {
        const newColors = [...prevColors];
        newColors[currentBoxIndex] = newColor;
        return newColors;
      });
      onColorChange(newColor, currentBoxIndex);
    },
    [onColorChange, currentBoxIndex]
  );

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleBoxClick = (boxIndex: number) => {
    setCurrentBoxIndex(boxIndex);
  };

  return (
    <Flex align="center" justify="center" direction="column">
      <Box mb={4}>
        <Circle size={16} bg={selectedColor} onClick={handleClick} />
        <Box ml={2} display="inline-block">
          Selected Color: {selectedColor}
        </Box>
      </Box>

      {[0, 1, 2].map((boxIndex) => (
        <Box
          key={boxIndex}
          bg={boxColors[boxIndex]}
          h="50px"
          w="50px"
          mb={2}
          onClick={() => handleBoxClick(boxIndex)}
        />
      ))}

      {displayColorPicker && (
        <ChromePicker color={selectedColor} onChange={handleColorChange} />
      )}
    </Flex>
  );
};

export default ColorPicker;
