interface ContainerProps {
  children: React.ReactNode
  styles?: string
}

const Container = ({ children, styles }: ContainerProps) => {
  return (
    <div className={`container  mx-auto max-w-5xl px-3 sm:px-4 md:px-8 ${styles}`}>{children}</div>
  )
}

export default Container
