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

	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const [password, setPassword] = useState("");

	const handleLoginButton = async () => {
		if (email === "" || password === "") return alert("Please fill out all fields");
		try {
			await handleLogin(email, password);
		} catch ({ message }) {
			console.log(message);
			if (message === "Firebase: Error (auth/invalid-email).") {
				setEmailError("Invalid email");
			}
		}
	}
	return (
		<Card>
			<AppBar position="static">
				<Typography padding={2} variant="h5">Login</Typography>
			</AppBar>
			<CardContent>
				<Grid2 container spacing={2}>
					<TextField
						error={emailError !== ""}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						fullWidth label="Email"
						variant="outlined"
						helperText={emailError}
					/>
					<TextField value={password} onChange={(e) => setPassword(e.target.value)} fullWidth label="Password" variant="outlined" />
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

	const [fName, setFName] = useState("");
	const [lName, setLName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cPassword, setCPassword] = useState("");

	const handleCreateAccountButton = async () => {
		if (email === "" || password === "" || fName === "" || lName === "") return alert("Please fill out all fields");
		if (!email.includes("@")) return alert("Please enter a valid email");
		if (password === cPassword) {
			try {
				await handleSignUp(email, password, fName, lName);
			} catch ({ message }) {
				console.log(message);
			}
		}
	}
	return (
		<Card>
			<AppBar position="static">
				<Typography padding={2} variant="h5">Create An Account</Typography>
			</AppBar>
			<CardContent>
				<Grid2 container spacing={2}>
					<TextField fullWidth value={fName} onChange={(e) => setFName(e.target.value)} label="First Name" variant="outlined" />
					<TextField fullWidth value={lName} onChange={(e) => setLName(e.target.value)} label="Last Name" variant="outlined" />
					<TextField fullWidth value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" />
					<TextField fullWidth value={password} onChange={(e) => setPassword(e.target.value)} label="Password" variant="outlined" />
					<TextField fullWidth value={cPassword} onChange={(e) => setCPassword(e.target.value)} label="Confirm Password" variant="outlined" />
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