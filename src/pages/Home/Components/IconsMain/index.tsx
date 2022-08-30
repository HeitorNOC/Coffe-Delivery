import { IconContext } from "phosphor-react"
import { ForwardRefExoticComponent } from "react"
import { Wrapper } from "./styles"

interface IconsProps {
  IconName: ForwardRefExoticComponent< React.RefAttributes<SVGSVGElement>>
  text: string
  BackColor: string
}

export function IconsMain({ IconName, text, BackColor }: IconsProps) {

  const styles = {
    "padding": "8px",
    "backgroundColor": BackColor,
    "borderRadius": "999px",
    "display": "flex",
    "flex-direction": "row",
    "justify-content": "center",
    "align-items": "center",
  }

  return (
    <Wrapper>
      <IconContext.Provider
        value={{
          color: "white",
          size: 16,
          weight: "fill",
          
        }}
      >
        <span style={styles}>
          <IconName />
        </span>
        <p>{text}</p>
      </IconContext.Provider>
    </Wrapper>
  )
}