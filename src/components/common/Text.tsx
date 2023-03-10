interface TextProps {
  fontSize?: string
  color?: string
  spanText?: string
  text: string
  style?: string
  spanStyles?: string
}
const Text = ({
  fontSize = 'text-xs',
  color = 'text-secondary',
  spanText,
  text,
  style,
  spanStyles,
}: TextProps) => {
  return (
    <p className={`p-[0.1rem]  ${fontSize}  ${color} ${style ? style : ''}`}>
      {text}
      <span className={spanStyles}> {spanText}</span>
    </p>
  )
}

export default Text
