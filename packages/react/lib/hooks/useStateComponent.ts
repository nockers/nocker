type Props = {
  isActive?: boolean
  isLoading?: boolean
  isDisabled?: boolean
}

export const useStateComponent = (props: Props) => {
  const isDefault =
    props.isLoading !== true &&
    props.isDisabled !== true &&
    props.isActive !== true

  const isActive =
    props.isActive === true &&
    props.isDisabled !== true &&
    props.isLoading !== true

  const isLoading = props.isLoading === true && props.isDisabled !== true

  const isDisabled = props.isDisabled === true

  return { isDefault, isActive, isLoading, isDisabled }
}
