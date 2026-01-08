import type { FC } from "react"

interface IProps {
  countdownTimestamp: number
  currentBid: number
}

const NFTCard:FC<IProps> = ({ countdownTimestamp, currentBid }) => {
  return (
    <div>NFTCard</div>
  )
}

export default NFTCard