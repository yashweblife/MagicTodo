import { AppBar, Button, Card, CardActions, CardContent, Grid2, TextField, Typography } from "@mui/material";
import { useState } from "react";

export type SignupBoxProps = {
	handleLoginButton: () => void,
	handleSignUp: (email: string, password: string, fName: string, lName: string) => void
}

export default function SignupBox({ handleLoginButton, handleSignUp }: SignupBoxProps) {

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
