import { AppBar, Button, Card, CardActions, CardContent, Grid2, TextField, Typography } from "@mui/material";
import { useState } from "react";

export type LoginBoxProps = {
	handleCreateAccountButton: () => void,
	handleLogin: (email: string, password: string) => void
}
export default function LoginBox({ handleCreateAccountButton, handleLogin }: LoginBoxProps) {

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