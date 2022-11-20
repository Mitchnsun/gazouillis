import React from "react"

interface TweetProps {
  createdAt: Date
  displayName: string
  photoURL?: string
  text: string
}

export const Tweet = ({ displayName, text, photoURL, createdAt }: TweetProps) => (
  <div>
    <div>
      <div>
        <div>
          <img src={photoURL || "https://i.stack.imgur.com/wPh0S.jpg"} alt="Profile Picture" />
        </div>
        <div>
          <h6>
            {displayName || "Unknown"} <span> - {createdAt.toLocaleDateString()}</span>
          </h6>
          <p>{text}</p>
        </div>
      </div>
    </div>
  </div>
)
