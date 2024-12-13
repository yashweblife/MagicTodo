import { AppBar, Box, Button, Card, CardActions, CardContent, Grid2, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import useFirebase from "../../hooks/useFirebase";

type LoginBoxProps = {
    handleCreateAccountButton: () => void,
    handleLogin: (email: string, password: string) => void
}
type SignupBoxProps = {
    handleLoginButton: () => void,
    handleSignUp: (email: string, password: string, fName: string, lName: string) => void
}
function LoginBox({ handleCreateAccountButton, handleLogin }: LoginBoxProps) {
    const handleLoginButton = () => {

    }
    return (
        <Card>
            <AppBar position="static">
                <Typography padding={2} variant="h5">Login</Typography>
            </AppBar>
            <CardContent>
                <Grid2 container spacing={2}>
                    <TextField fullWidth label="Email" variant="outlined" />
                    <TextField fullWidth label="Password" variant="outlined" />
                </Grid2>
            </CardContent>
            <CardActions>
                <Button variant="outlined" onClick={handleCreateAccountButton}>Create An Account</Button>
                <Button variant="contained" onClick={handleLoginButton}>Login</Button>
            </CardActions>
        </Card>
    )
}
function SignupBox({ handleLoginButton, handleSignUp }: SignupBoxProps) {

    const handleCreateAccountButton = () => {

    }
    return (
        <Card>
            <AppBar position="static">
                <Typography padding={2} variant="h5">Create An Account</Typography>
            </AppBar>
            <CardContent>
                <Grid2 container spacing={2}>
                    <TextField fullWidth label="First Name" variant="outlined" />
                    <TextField fullWidth label="Last Name" variant="outlined" />
                    <TextField fullWidth label="Email" variant="outlined" />
                    <TextField fullWidth label="Password" variant="outlined" />
                    <TextField fullWidth label="Confirm Password" variant="outlined" />
                </Grid2>
            </CardContent>
            <CardActions>
                <Button variant="outlined" onClick={handleLoginButton}>Login Instead</Button>
                <Button variant="contained" onClick={handleCreateAccountButton}>Create An Account</Button>
            </CardActions>
        </Card>
    )
}

export default function AuthPage() {
    const [isLoggingIn, setIsLoggingIn] = useState(true);
    const { handleLogin, handleSignUp } = useFirebase();
    return (
        <Grid2 container style={{
            height: "100vh",
            width: "100vw"
        }}>
            <Grid2 size={6}>
                <Box
                    style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Typography variant="h2">Login</Typography>
                </Box>
            </Grid2>
            <Grid2 size={6}>
                <Box
                    style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Paper elevation={3} style={{ margin: 20 }}>
                        {
                            isLoggingIn ?
                                <LoginBox
                                    handleCreateAccountButton={() => setIsLoggingIn(false)}
                                    handleLogin={handleLogin}
                                /> :
                                <SignupBox
                                    handleLoginButton={() => setIsLoggingIn(true)}
                                    handleSignUp={handleSignUp}
                                />
                        }
                    </Paper>
                </Box>
            </Grid2>
        </Grid2>
    )
}