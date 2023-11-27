'use client';

import React from "react";


interface ItemProps {
  name: string;
}

export default function Item({ name }: ItemProps) {
  return (
    <h2>{name}</h2>
  )
}