import { ForkLeft, ForkRight } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogTitle, Grid2, IconButton, Stack, TextField, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import useFirebase from './hooks/useFirebase';
import AuthPage from './pages/AuthPage';


function ListCard() {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const handleAddButton = () => {
    if (inputText === "") return
    setList((prev: any[]) => {
      return [...prev, inputText]
    });
    setInputText("");
  }
  return (
    <Card>
      <CardContent>
        <Typography>Hello</Typography>
      </CardContent>
      <CardContent>
        <Stack spacing={2}>
          {list.map((item, index) => {
            return (
              <Card>
                <CardContent key={index} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <IconButton><ForkLeft /></IconButton>
                  {item}
                  <IconButton><ForkRight /></IconButton>
                </CardContent>
              </Card>)
          })}
        </Stack>
      </CardContent>
      <CardActions>
        <TextField variant="outlined" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      </CardActions>
      <CardActions>
        <Button>Delete</Button>
        <Button onClick={handleAddButton}>Add</Button>
      </CardActions>
    </Card>
  )
}
function AddListDialog({addDialogOpen, setAddDialogOpen}:{addDialogOpen:boolean, setAddDialogOpen:Function}) {
  return (
    <Dialog open={addDialogOpen} onClose={() => setAddDialogOpen(false)}
    >
      <DialogTitle>Add List</DialogTitle>
      <Box padding={5}>
        <TextField label="Title" variant="outlined" onChange={(e) => console.log(e.target.value)} />
      </Box>
      <DialogActions>
        <Button onClick={() => setAddDialogOpen(false)}>Close</Button>
        <Button>Add</Button>
      </DialogActions>
    </Dialog>
  )
}
function App() {
  const [lists, setLists] = useState<string[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const { isLoggedIn } = useFirebase();
  const handleAddDialogSubmit = (name: string) => {
    setLists((prev: string[]) => [...prev, name]);
    setAddDialogOpen(false);
  }
  if (!isLoggedIn) {
    return <AuthPage />
  }
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => setDrawerOpen(true)} edge="start" color="inherit" sx={{ mr: 2 }} >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MagicTodo
          </Typography>
          <IconButton color="inherit" edge="end" onClick={() => setAddDialogOpen(true)}>
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid2 color="primary" size={12} direction="row" container spacing={2} padding={5}>
        <ListCard />
      </Grid2>
      <AddListDialog addDialogOpen={addDialogOpen} setAddDialogOpen={handleAddDialogSubmit} />
    </div>
  )
}

export default App
