import { Avatar, Grid, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import ChildCareIcon from "@mui/icons-material/ChildCare"

interface TweetProps {
  createdAt: Date
  displayName: string
  photoURL?: string
  text: string
}

export const Tweet = ({ displayName, text, photoURL, createdAt }: TweetProps) => {
  const theme = useTheme()
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Avatar src={photoURL} alt={`Profile picture of ${displayName}`} sx={{ bgcolor: theme.palette.primary.main }}>
          <ChildCareIcon />
        </Avatar>
      </Grid>
      <Grid item xs={9}>
        <Typography>
          <strong>{displayName}</strong> <span> - {createdAt.toLocaleDateString()}</span>
        </Typography>
        <Typography>{text}</Typography>
      </Grid>
    </Grid>
  )
}
