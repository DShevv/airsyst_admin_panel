import { CountButton, CountContainer, CountField } from "./Count.style";
import { useState, useEffect } from "react";

interface Props {
  count: number;
  onChange: (value: number) => void;
}

export default function Count({ count, onChange }: Props) {
  return (
    <CountContainer>
      <CountButton
        onClick={() => {
          onChange(count - 1);
        }}
        disabled={count === 1}
      >
        -
      </CountButton>
      <CountField
        type="number"
        value={count}
        onChange={(e) => {
          onChange(Number(e.target.value));
        }}
      />
      <CountButton
        onClick={() => {
          onChange(count + 1);
        }}
      >
        +
      </CountButton>
    </CountContainer>
  );
}
