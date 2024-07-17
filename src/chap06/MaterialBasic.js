import React from 'react';
import { Button } from '@mui/material';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const fontStyles = css`
  text-transform: none;
`;

export default function MaterialBasic() {
  return (
    <>
      <Button variant="text" color="secondary" sx={{ '&:hover': { backgroundColor: 'green' } }} css={fontStyles}>
        Contained
      </Button>
      <Button variant="contained" color="secondary" css={fontStyles}>
        Outlined
      </Button>
      <Button variant="outlined" color="secondary" css={fontStyles}>
        Text
      </Button>
    </>
  );
}
