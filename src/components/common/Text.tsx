import React from 'react'
interface TextProps {
  fontSize?: string
  color?: string
  spanText?: string
  text: string
  style?: string
  spanStyles?: string
}
const Text: React.FunctionComponent<TextProps> = ({
  fontSize = 'text-[0.6rem]',
  color = 'text-secondary',
  spanText,
  text,
  style,
  spanStyles,
}) => {
  return (
    <p className={`p-[0.1rem]  ${fontSize}  ${color} ${style ? style : ''}`}>
      {text}
      <span className={spanStyles}> {spanText}</span>
    </p>
  )
}

export default Text
