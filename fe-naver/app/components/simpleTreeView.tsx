'use client'
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import * as React from 'react';
import Box from '@mui/material/Box';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
// When using TypeScript 4.x and above
import type {} from '@mui/x-tree-view/themeAugmentation';
import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiRichTreeView: {
      styleOverrides: {
        root: {
          backgroundColor: 'red',
        },
      },
    },
  },
});


export default function BasicSimpleTreeView() {
  return (
    <Box sx={{ minHeight: 352, minWidth: 250 }}>
      <SimpleTreeView>
        <TreeItem itemId="1" label="Item 1" />
        <TreeItem itemId="2" label="Item 2" />
      </SimpleTreeView>
    </Box>
  );
}