interface HeaderProps {
  headerText?: string;
}

export const HeaderComponent = ({ headerText = "Mangler headerText" }: HeaderProps) => {
  return <h1>{headerText}</h1>;
};
