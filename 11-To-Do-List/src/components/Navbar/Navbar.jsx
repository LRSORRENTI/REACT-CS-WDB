import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChecklistIcon from '@mui/icons-material/Checklist';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Box sx={{display: "flex", margin: "auto", justifyContent: "center"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ChecklistIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginTop: "8px"}}>
            My To-Do List
          </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
