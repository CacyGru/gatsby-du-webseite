import React from "react"
import styled from "styled-components"

const ThemeChangeButton = ({ text }) => {
  return (
    <Hover>
      <ThemeChangeBtn>{text}</ThemeChangeBtn>
    </Hover>
  )
}

const ThemeChangeBtn = styled.button`
  display: inline-block;
  cursor: pointer;
  background-color: #ebebeb;
  color: rgba(61, 176, 153, 1);
  outline: none;
  font-weight: bold;
  padding: 5px 10px;
  box-shadow: 1px 1px 2px rgb(202, 202, 202);
  border: none;
  border-radius: 10px;
  transition: all 0.2s ease;
`

const Hover = styled.div`
  &:hover ${ThemeChangeButton} {
    display: inline-block;
    background-color: #d6d6d6;
    color: red;
  }
`

export default ThemeChangeButton